import React, { useState } from 'react';
import { ArrowUp, Upload, SkipForward } from 'lucide-react';

const FIELDS = [
  { key: 'address_line_1', label: 'Address line 1', wide: true },
  { key: 'address_line_2', label: 'Address line 2', wide: true },
  { key: 'city',           label: 'City' },
  { key: 'state',          label: 'State / Province' },
  { key: 'pincode',        label: 'Postal / ZIP code' },
  { key: 'country',        label: 'Country' },
];

const ICONS = { address_upload_prompt: Upload, address_skip: SkipForward };

/**
 * Typed business-address composer. On submit the parent fires
 * intent=address_text with text=JSON.stringify(fields). The option chips
 * ("Upload a document instead", "Skip for now") route through the generic
 * action dispatcher.
 */
export default function ChatAddressComposer({ initial = {}, onSubmit, onAction, options = [], disabled }) {
  const [vals, setVals] = useState(() => {
    const seed = {};
    for (const f of FIELDS) seed[f.key] = initial[f.key] || '';
    return seed;
  });

  const set = (k, v) => setVals((p) => ({ ...p, [k]: v }));
  const hasAny = FIELDS.some((f) => (vals[f.key] || '').trim());

  // One-time VAT/GST registration capture on the same step as country, so most
  // users are classified before they ever reach the app's item form. Optional —
  // the address still saves without it. `regStatus`: '' | 'registered' | 'not_registered'.
  const [regStatus, setRegStatus] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const regBlocked = regStatus === 'registered' && !regNumber.trim();

  const fire = () => {
    if (!hasAny || disabled || regBlocked) return;
    const payload = { ...vals };
    if (regStatus === 'registered' || regStatus === 'not_registered') {
      payload.tax_registration_status = regStatus;
      if (regStatus === 'registered') payload.tax_number = regNumber.trim();
    }
    onSubmit(payload);
  };

  return (
    <div className="lynx-card-stack">
      <form
        className="lynx-address-form"
        onSubmit={(e) => { e.preventDefault(); fire(); }}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}
      >
        {FIELDS.map((f) => (
          <input
            key={f.key}
            type="text"
            className="lynx-composer__input"
            placeholder={f.label}
            value={vals[f.key]}
            onChange={(e) => set(f.key, e.target.value)}
            disabled={disabled}
            autoComplete="off"
            style={{
              gridColumn: f.wide ? '1 / -1' : 'auto',
              border: '1px solid var(--lynx-border, #e2e8f0)',
              borderRadius: 10,
              padding: '10px 12px',
            }}
          />
        ))}
        <div style={{ gridColumn: '1 / -1', marginTop: 4 }}>
          <div style={{ fontSize: 13, color: 'var(--lynx-text-muted, #64748b)', marginBottom: 6 }}>
            Are you registered for VAT / GST?
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[{ v: 'registered', l: 'Yes, registered' }, { v: 'not_registered', l: 'No' }].map((o) => (
              <button
                key={o.v}
                type="button"
                onClick={() => { setRegStatus(o.v); if (o.v !== 'registered') setRegNumber(''); }}
                disabled={disabled}
                style={{
                  flex: 1, padding: '8px 12px', borderRadius: 10, cursor: 'pointer',
                  border: `1.5px solid ${regStatus === o.v ? '#3b82f6' : 'var(--lynx-border, #e2e8f0)'}`,
                  background: regStatus === o.v ? '#eff6ff' : '#fff',
                  color: regStatus === o.v ? '#1d4ed8' : 'var(--lynx-text, #334155)',
                  fontWeight: regStatus === o.v ? 600 : 400,
                }}
              >
                {o.l}
              </button>
            ))}
          </div>
          {regStatus === 'registered' && (
            <input
              type="text"
              className="lynx-composer__input"
              placeholder="Your VAT / GST number"
              value={regNumber}
              onChange={(e) => setRegNumber(e.target.value)}
              disabled={disabled}
              autoComplete="off"
              style={{ marginTop: 8, width: '100%', border: '1px solid var(--lynx-border, #e2e8f0)', borderRadius: 10, padding: '10px 12px' }}
            />
          )}
        </div>

        <button
          type="submit"
          className="lynx-action lynx-action--primary"
          disabled={!hasAny || disabled || regBlocked}
          style={{ gridColumn: '1 / -1', justifyContent: 'center' }}
        >
          <ArrowUp size={16} />
          <span>Save address</span>
        </button>
      </form>

      <div className="lynx-actions">
        {options.map((opt) => {
          const Icon = ICONS[opt.id] || null;
          return (
            <button
              key={opt.id}
              type="button"
              className="lynx-action lynx-action--ghost lynx-action--inline"
              onClick={() => onAction(opt)}
              disabled={disabled}
            >
              {Icon && <Icon size={15} />}
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
