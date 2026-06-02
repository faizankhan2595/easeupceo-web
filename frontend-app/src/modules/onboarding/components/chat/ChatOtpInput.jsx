import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp, RefreshCcw, ShieldCheck } from 'lucide-react';

/**
 * Inline email-OTP composer. The user types the 6-digit code we emailed; on
 * submit the parent fires intent=otp_verify with text=<code>. The "Resend
 * code" option (ui.options) routes through the generic action dispatcher
 * (intent=otp_resend).
 */
export default function ChatOtpInput({ onVerify, onAction, options = [], disabled }) {
  const [code, setCode] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    if (!disabled && ref.current) ref.current.focus();
  }, [disabled]);

  const fire = () => {
    const v = code.replace(/\D/g, '').slice(0, 6);
    if (v.length < 6 || disabled) return;
    setCode('');
    onVerify(v);
  };

  const resendOpt = options.find((o) => o.id == 'otp_resend');

  return (
    <div className="lynx-card-stack">
      <form
        className="lynx-composer lynx-composer--text"
        onSubmit={(e) => { e.preventDefault(); fire(); }}
      >
        <span className="lynx-dropzone__icon" style={{ marginRight: 4 }}>
          <ShieldCheck size={18} />
        </span>
        <input
          ref={ref}
          type="text"
          inputMode="numeric"
          maxLength={6}
          className="lynx-composer__input"
          placeholder="6-digit code"
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
          disabled={disabled}
          autoComplete="one-time-code"
          spellCheck="false"
          style={{ letterSpacing: '0.4em', fontWeight: 600 }}
        />
        <button
          type="submit"
          className="lynx-composer__send"
          disabled={code.replace(/\D/g, '').length < 6 || disabled}
          aria-label="Verify"
        >
          <ArrowUp size={18} />
        </button>
      </form>

      {resendOpt && (
        <button
          type="button"
          className="lynx-action lynx-action--ghost lynx-action--inline"
          onClick={() => onAction(resendOpt)}
          disabled={disabled}
        >
          <RefreshCcw size={15} />
          <span>{resendOpt.label}</span>
        </button>
      )}
    </div>
  );
}
