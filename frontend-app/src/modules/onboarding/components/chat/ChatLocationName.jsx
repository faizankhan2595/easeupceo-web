import React, { useState } from 'react';
import { ArrowUp, Building2, SkipForward } from 'lucide-react';

/**
 * Name-this-location composer. Preset chips (Head Office, City/Country Branch…) and a
 * free-text box both fire intent=location_name_submit with text=<name>. The "Skip" chip
 * (id=location_name_skip) routes through the generic action dispatcher.
 */
export default function ChatLocationName({ onSubmit, onAction, options = [], disabled }) {
  const [val, setVal] = useState('');

  const presets = options.filter((o) => o.id == 'location_preset');
  const actions = options.filter((o) => o.id != 'location_preset');

  const fire = () => {
    const name = (val || '').trim();
    if (!name || disabled) return;
    onSubmit(name);
  };

  return (
    <div className="lynx-card-stack">
      {presets.length > 0 && (
        <div className="lynx-actions" style={{ flexWrap: 'wrap' }}>
          {presets.map((opt, i) => (
            <button
              key={i}
              type="button"
              className="lynx-action lynx-action--ghost lynx-action--inline"
              onClick={() => { if (!disabled) onSubmit(opt.label); }}
              disabled={disabled}
            >
              <Building2 size={15} />
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      )}

      <form
        onSubmit={(e) => { e.preventDefault(); fire(); }}
        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8 }}
      >
        <input
          type="text"
          className="lynx-composer__input"
          placeholder="Or type a custom name (e.g. Head Office)"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          disabled={disabled}
          autoComplete="off"
          style={{ border: '1px solid var(--lynx-border, #e2e8f0)', borderRadius: 10, padding: '10px 12px' }}
        />
        <button
          type="submit"
          className="lynx-action lynx-action--primary"
          disabled={!val.trim() || disabled}
          style={{ justifyContent: 'center' }}
        >
          <ArrowUp size={16} />
          <span>Save location name</span>
        </button>
      </form>

      {actions.length > 0 && (
        <div className="lynx-actions">
          {actions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className="lynx-action lynx-action--ghost lynx-action--inline"
              onClick={() => onAction(opt)}
              disabled={disabled}
            >
              <SkipForward size={15} />
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
