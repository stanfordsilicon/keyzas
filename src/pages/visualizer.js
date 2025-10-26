'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Visualizer() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const router = useRouter();
  const { src } = router.query;

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div>
      <button
        onClick={toggleFullscreen}
        style={{
          position: 'fixed',
          top: 50,
          right: 50,
          zIndex: 10000,
          padding: '8px 16px',
          fontWeight: 'bold',
          borderRadius: '8px',
          border: '2px solid #7a5b42',
          backgroundColor: '#faf4e2',
          cursor: 'pointer'
        }}
      >
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </button>

      <iframe
        src={src ? `https://keyzas-visualizer.vercel.app/?sub=${src}` : "https://keyzas-visualizer.vercel.app/?sub=None"}
        title="Keyzas Visualizer"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isFullscreen ? '100vw' : '90vw',
          height: isFullscreen ? '100vh' : '80vh',
          margin: isFullscreen ? 0 : '150px auto',
          marginLeft: isFullscreen ? 0 : `calc(100vw / 2 - 90vw / 2)`,
          border: 0,
          zIndex: 9999,
          borderRadius: isFullscreen ? 0 : '12px',
        }}
      />
    </div>
  );
}
