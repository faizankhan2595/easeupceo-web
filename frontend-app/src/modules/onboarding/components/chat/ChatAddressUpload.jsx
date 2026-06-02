import React, { useCallback, useRef, useState } from 'react';
import { FileText, Loader2, Pencil, SkipForward } from 'lucide-react';

const ICONS = { address_type_prompt: Pencil, address_skip: SkipForward };

/**
 * Address-document upload card. Drop an image or PDF (letterhead, bill, …);
 * the parent forwards it with intent=address_doc and the backend extracts the
 * address via Claude. Option chips ("Type it instead", "Skip") route through
 * the generic action dispatcher.
 */
export default function ChatAddressUpload({ onPickFile, onAction, options = [], disabled }) {
  const inputRef = useRef(null);
  const [drag, setDrag] = useState(false);
  const [busy, setBusy] = useState(false);

  const handleFiles = useCallback(async (files) => {
    if (!files?.length || disabled) return;
    setBusy(true);
    try {
      await onPickFile(files[0]);
    } finally {
      setBusy(false);
    }
  }, [onPickFile, disabled]);

  return (
    <div className="lynx-card-stack">
      <div
        className={`lynx-dropzone ${drag ? 'is-drag' : ''} ${busy ? 'is-busy' : ''}`}
        onClick={() => !disabled && !busy && inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); if (!disabled) setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDrag(false);
          if (!disabled) handleFiles(e.dataTransfer.files);
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if ((e.key == 'Enter' || e.key == ' ') && !disabled && !busy) inputRef.current?.click();
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*,application/pdf"
          style={{ display: 'none' }}
          onChange={(e) => handleFiles(e.target.files)}
          disabled={disabled || busy}
        />
        <span className="lynx-dropzone__icon">
          {busy ? <Loader2 size={22} className="lynx-spin" /> : <FileText size={22} />}
        </span>
        <div>
          <div className="lynx-dropzone__title">{busy ? 'Reading your document…' : 'Drop a document with your address'}</div>
          <div className="lynx-dropzone__hint">Image or PDF · we'll extract the address for you</div>
        </div>
      </div>

      <div className="lynx-actions">
        {options.map((opt) => {
          const Icon = ICONS[opt.id] || null;
          return (
            <button
              key={opt.id}
              type="button"
              className="lynx-action lynx-action--ghost lynx-action--inline"
              onClick={() => onAction(opt)}
              disabled={disabled || busy}
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
