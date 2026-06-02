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

  const fire = () => {
    if (!hasAny || disabled) return;
    onSubmit(vals);
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
        <button
          type="submit"
          className="lynx-action lynx-action--primary"
          disabled={!hasAny || disabled}
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
