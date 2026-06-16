'use client';

import { useState } from 'react';
import { useTweaks } from './UseTweaks';

const ACCENT_OPTIONS = ['#0033ff', '#ff3322', '#0a0a0a', '#2e6f5e', '#ff7a1a', '#7c4dff'];
const DENSITY_OPTIONS = [
  { value: 'dense',       label: '촘촘' },
  { value: 'comfortable', label: '기본' },
  { value: 'loose',       label: '여유' },
] as const;

export default function TweaksPanel() {
  const { tweaks, set } = useTweaks();
  const [open, setOpen] = useState(false);

  return (
    <div className="tweaks-panel">
      {open && (
        <div className="tweaks-body">
          {/* 색감 섹션 */}
          <div>
            <p className="tweaks-section-label">색감</p>

            <div className="tweak-row">
              <label>Accent</label>
              <div className="color-swatches">
                {ACCENT_OPTIONS.map(color => (
                  <button
                    key={color}
                    className={`color-swatch${tweaks.accent === color ? ' on' : ''}`}
                    style={{ background: color }}
                    onClick={() => set('accent', color)}
                    title={color}
                    aria-label={`accent 색상 ${color}`}
                  />
                ))}
              </div>
            </div>

            <div className="tweak-row">
              <label>다크 모드</label>
              <button
                className={`toggle-btn${tweaks.dark ? ' on' : ''}`}
                onClick={() => set('dark', !tweaks.dark)}
                aria-pressed={tweaks.dark}
                aria-label="다크 모드 토글"
              />
            </div>
          </div>

        </div>
      )}

      <button
        className="tweaks-toggle"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span>⊙</span> 설정
      </button>
    </div>
  );
}