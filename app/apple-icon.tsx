import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0d0d0d',
        }}
      >
        <div style={{ color: '#fff', fontSize: 110, fontWeight: 900, fontFamily: 'sans-serif', lineHeight: 1 }}>
          S
        </div>
        <div style={{ width: 70, height: 14, background: '#0033ff', marginTop: 12 }} />
      </div>
    ),
    { ...size }
  );
}
