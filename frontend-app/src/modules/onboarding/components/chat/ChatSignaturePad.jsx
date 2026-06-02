import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Check, Eraser, Loader2, SkipForward, Upload } from 'lucide-react';

/**
 * Authorised-signatory signature composer.
 *  - Draw on a transparent <canvas> → exported as a transparent PNG.
 *  - OR upload an existing signature image (PNG / WEBP only, so the
 *    transparent background composites cleanly onto invoices).
 * Both paths call onPickFile(file) which the parent forwards with
 * intent=signature_submit. The "Skip" chip routes through onAction.
 */
export default function ChatSignaturePad({ onPickFile, onAction, options = [], disabled }) {
  const canvasRef = useRef(null);
  const drawing = useRef(false);
  const lastPt = useRef(null);
  const inputRef = useRef(null);
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  // Size the backing store to the rendered size for crisp strokes.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ratio = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(rect.width * ratio));
    canvas.height = Math.max(1, Math.floor(rect.height * ratio));
    const ctx = canvas.getContext('2d');
    ctx.scale(ratio, ratio);
    ctx.lineWidth = 2.2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#0f172a';
  }, []);

  const pointFromEvent = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const src = e.touches ? e.touches[0] : e;
    return { x: src.clientX - rect.left, y: src.clientY - rect.top };
  };

  const start = (e) => {
    if (disabled || busy) return;
    e.preventDefault();
    drawing.current = true;
    lastPt.current = pointFromEvent(e);
  };

  const move = (e) => {
    if (!drawing.current || disabled || busy) return;
    e.preventDefault();
    const ctx = canvasRef.current.getContext('2d');
    const pt = pointFromEvent(e);
    ctx.beginPath();
    ctx.moveTo(lastPt.current.x, lastPt.current.y);
    ctx.lineTo(pt.x, pt.y);
    ctx.stroke();
    lastPt.current = pt;
    if (!dirty) setDirty(true);
  };

  const end = () => { drawing.current = false; lastPt.current = null; };

  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setDirty(false);
    setError('');
  };

  const saveDrawing = useCallback(() => {
    if (!dirty || disabled || busy) return;
    const canvas = canvasRef.current;
    canvas.toBlob(async (blob) => {
      if (!blob) { setError("Couldn't read the signature — try again."); return; }
      const file = new File([blob], 'signature.png', { type: 'image/png' });
      setBusy(true);
      setError('');
      try {
        await onPickFile(file);
      } finally {
        setBusy(false);
      }
    }, 'image/png');
  }, [dirty, disabled, busy, onPickFile]);

  const handleUpload = useCallback(async (files) => {
    if (!files?.length || disabled || busy) return;
    const file = files[0];
    const type = (file.type || '').toLowerCase();
    if (type != 'image/png' && type != 'image/webp') {
      setError('Please upload a transparent PNG or WEBP image.');
      return;
    }
    setBusy(true);
    setError('');
    try {
      await onPickFile(file);
    } finally {
      setBusy(false);
    }
  }, [onPickFile, disabled, busy]);

  const skipOpt = options.find((o) => o.id == 'signature_skip');

  return (
    <div className="lynx-card-stack">
      <div
        style={{
          position: 'relative',
          border: '1px dashed var(--lynx-border, #cbd5e1)',
          borderRadius: 12,
          background: 'repeating-conic-gradient(#f8fafc 0% 25%, #eef2f7 0% 50%) 50% / 16px 16px',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: 150, touchAction: 'none', display: 'block', cursor: disabled ? 'default' : 'crosshair' }}
          onMouseDown={start}
          onMouseMove={move}
          onMouseUp={end}
          onMouseLeave={end}
          onTouchStart={start}
          onTouchMove={move}
          onTouchEnd={end}
        />
        {!dirty && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', pointerEvents: 'none', fontSize: 14 }}>
            Draw your signature here
          </div>
        )}
      </div>

      {error ? <div style={{ color: '#dc2626', fontSize: 12 }}>{error}</div> : null}

      <div className="lynx-actions">
        <button
          type="button"
          className="lynx-action lynx-action--ghost lynx-action--inline"
          onClick={clear}
          disabled={disabled || busy || !dirty}
        >
          <Eraser size={15} />
          <span>Clear</span>
        </button>

        <button
          type="button"
          className="lynx-action lynx-action--primary"
          onClick={saveDrawing}
          disabled={disabled || busy || !dirty}
        >
          {busy ? <Loader2 size={15} className="lynx-spin" /> : <Check size={15} />}
          <span>Use this signature</span>
        </button>

        <button
          type="button"
          className="lynx-action lynx-action--ghost lynx-action--inline"
          onClick={() => !disabled && !busy && inputRef.current?.click()}
          disabled={disabled || busy}
        >
          <Upload size={15} />
          <span>Upload image</span>
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/webp"
          style={{ display: 'none' }}
          onChange={(e) => handleUpload(e.target.files)}
          disabled={disabled || busy}
        />

        {skipOpt && (
          <button
            type="button"
            className="lynx-action lynx-action--ghost lynx-action--inline"
            onClick={() => onAction(skipOpt)}
            disabled={disabled || busy}
          >
            <SkipForward size={15} />
            <span>{skipOpt.label}</span>
          </button>
        )}
      </div>
    </div>
  );
}
