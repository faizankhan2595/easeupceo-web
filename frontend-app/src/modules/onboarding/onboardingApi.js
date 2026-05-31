/**
 * Thin client for the chat-mode onboarding API.
 *
 * `API_BASE` defaults to the production Node backend at
 * `https://alfabackend.inkapps.io` (same as `LiveOrderContext.jsx:8`).
 * Override with `VITE_ONBOARDING_API_BASE` in `.env.local` for local dev.
 *
 * Auth: every request carries `Authorization: Bearer <token>` + an
 * `organization: <id>` header. Both are sourced from the URL query string
 * on first load (`?token=...&org=...`), then mirrored into sessionStorage
 * so subsequent calls keep working after the router clears the query.
 * The server re-verifies the JWT and matches the resolved (user_id, org_id)
 * against the session's stamped owner on every turn.
 */

const DEFAULT_API_BASE = 'https://alfabackend.inkapps.io';

const API_BASE =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_ONBOARDING_API_BASE) || DEFAULT_API_BASE;

const url = (path) => `${API_BASE}${path}`;

/**
 * Resolve the user's JWT for the onboarding API in this priority order:
 *   1. URL query string  (?token=<jwt>)         — typical HRMS handoff
 *   2. sessionStorage    ('onboarding_token')   — sticky after first call
 *   3. sessionStorage    ('token' / 'authToken' / 'jwt') — common keys
 *   4. localStorage      ('token' / 'authToken' / 'jwt') — sticky long-term
 *
 * The first non-empty match wins. URL-supplied tokens are mirrored into
 * sessionStorage on read so subsequent calls keep working after the
 * router strips the query string.
 */
function authToken() {
  if (typeof window == 'undefined') return '';
  try {
    // 1. URL query
    const search = window.location?.search || '';
    if (search) {
      const params = new URLSearchParams(search);
      const t = params.get('token') || params.get('auth_token') || params.get('jwt');
      if (t) {
        try { window.sessionStorage?.setItem('onboarding_token', t); } catch (_) {}
        return t;
      }
    }
    // 2-3. sessionStorage keys
    const ss = window.sessionStorage;
    if (ss) {
      for (const k of ['onboarding_token', 'token', 'authToken', 'jwt']) {
        const v = ss.getItem(k);
        if (v) return v;
      }
    }
    // 4. localStorage keys
    const ls = window.localStorage;
    if (ls) {
      for (const k of ['onboarding_token', 'token', 'authToken', 'jwt']) {
        const v = ls.getItem(k);
        if (v) return v;
      }
    }
  } catch (_) { /* fall through */ }
  return '';
}

/**
 * Resolve the user's organization_id similarly — query string then storage.
 * Required because the main backend reads `organization` from headers
 * (CRUDController.ts:288 convention) rather than the JWT payload.
 */
function orgId() {
  if (typeof window == 'undefined') return '';
  try {
    const search = window.location?.search || '';
    if (search) {
      const params = new URLSearchParams(search);
      const o = params.get('org') || params.get('organization') || params.get('org_id');
      if (o) {
        try { window.sessionStorage?.setItem('onboarding_org_id', o); } catch (_) {}
        return o;
      }
    }
    const ss = window.sessionStorage;
    if (ss) {
      for (const k of ['onboarding_org_id', 'org_id', 'organization']) {
        const v = ss.getItem(k);
        if (v) return v;
      }
    }
    const ls = window.localStorage;
    if (ls) {
      for (const k of ['onboarding_org_id', 'org_id', 'organization']) {
        const v = ls.getItem(k);
        if (v) return v;
      }
    }
  } catch (_) { /* fall through */ }
  return '';
}

function authHeaders() {
  const headers = {};
  const t = authToken();
  if (t) headers.Authorization = `Bearer ${t}`;
  const o = orgId();
  if (o) headers.organization = o;
  return headers;
}

async function jsonFetch(path, options = {}) {
  const res = await fetch(url(path), {
    headers: { 'Content-Type': 'application/json', ...authHeaders(), ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) {
    let detail = res.statusText;
    try {
      const body = await res.json();
      detail = body.detail || JSON.stringify(body);
    } catch (_) { /* fall through */ }
    throw new Error(`${res.status} ${detail}`);
  }
  return res.json();
}

export const onboardingApi = {
  /**
   * Bootstrap (or resume) a chat session.
   *
   * `handoff` carries the HRMS context the user was redirected with — the
   * SPA reads these from the URL query string on first load:
   *
   *   { bearer_token, organization_id, return_url,
   *     user:    { name, email, ... },     // optional
   *     company: { name } }                // optional pre-fill
   *
   * Backend stores them on the session and reuses them on every uploadFile
   * call and the final HRMS sync.
   *
   * Returns { session_id, current_step, state }.
   */
  startSession(resumeSessionId = null, handoff = null) {
    const body = { resume_session_id: resumeSessionId };
    if (handoff) {
      if (handoff.bearer_token || handoff.organization_id) {
        body.auth = {
          bearer_token:    handoff.bearer_token    || null,
          organization_id: handoff.organization_id || null,
        };
      }
      if (handoff.user)       body.user       = handoff.user;
      if (handoff.company)    body.company    = handoff.company;
      if (handoff.return_url) body.return_url = handoff.return_url;
    }
    return jsonFetch('/api/onboarding/start', {
      method: 'POST',
      body:   JSON.stringify(body),
    });
  },

  /**
   * Enter Workspace handler — backend validates the session, builds the
   * canonical payload, syncs it to HRMS (when HRMS_SYNC_URL is configured)
   * and returns the redirect URL.
   *
   *   { session_id, success, synced, sync_response, final_payload, redirect_url }
   */
  finalize(sessionId) {
    return jsonFetch('/api/onboarding/finalize', {
      method: 'POST',
      body:   JSON.stringify({ session_id: sessionId }),
    });
  },

  /** Direct URL for the employee Excel template — used as an <a download>. */
  templateUrl() {
    return url('/api/onboarding/employees/template');
  },

  /**
   * Single multipart endpoint that drives the conversational onboarding.
   *
   * Pass any combination of text / intent / theme JSON / file. The backend
   * applies side-effects against the existing services and returns the
   * conversational reply + the UI descriptor for the next composer.
   */
  async chat(sessionId, { text, intent, theme, file } = {}) {
    const fd = new FormData();
    fd.append('session_id', sessionId);
    if (text   != null) fd.append('text',   text);
    if (intent != null) fd.append('intent', intent);
    if (theme  != null) fd.append('theme',  typeof theme === 'string' ? theme : JSON.stringify(theme));
    if (file)           fd.append('file',   file);

    const res = await fetch(url('/api/onboarding/chat'), {
      method: 'POST',
      headers: { ...authHeaders() },
      body: fd,
    });
    if (!res.ok) {
      let msg = res.statusText;
      try {
        const j = await res.json();
        msg = j.detail || msg;
      } catch (_) { /* fall through */ }
      throw new Error(msg);
    }
    return res.json();
  },
};

export default onboardingApi;
