import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
        <div style={{ color: '#fff', fontSize: 20, fontWeight: 900, fontFamily: 'sans-serif', lineHeight: 1 }}>
          S
        </div>
        <div style={{ width: 13, height: 3, background: '#0033ff', marginTop: 2 }} />
      </div>
    ),
    { ...size }
  );
}
