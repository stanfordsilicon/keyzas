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

  // iframe dimensions when not fullscreen
  const iframeWidth = '90vw';
  const iframeHeight = '80vh';
  const iframeMarginTop = 150;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Fullscreen Button */}
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

      {/* Credit line above iframe, aligned left */}
      {!isFullscreen && (
        <div
          style={{
            position: 'fixed',
            top: iframeMarginTop - 30, // 30px above the iframe
            left: `calc(50% - ${parseInt(iframeWidth) / 2}vw)`, // left edge of iframe
            fontSize: '14px',
            color: '#555',
            backgroundColor: '#faf4e2',
            padding: '4px 8px',
            borderRadius: '6px',
            border: '1px solid #ddd',
            zIndex: 10001
          }}
        >
          Visualizer adapted from {' '}
          <a
            href="https://github.com/crsnbrt/keysim"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#000', textDecoration: 'underline' }}
          >
            KeySim
          </a>{' '}
          by Carson Britt and other contributors, with minor modifications to support KeyZas.
        </div>
      )}

      {/* Visualizer iframe */}
      <iframe
        src={src ? `https://keyzas-visualizer.vercel.app/?sub=${src}` : "https://keyzas-visualizer.vercel.app/?sub=None"}
        title="Keyzas Visualizer"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isFullscreen ? '100vw' : iframeWidth,
          height: isFullscreen ? '100vh' : iframeHeight,
          margin: isFullscreen ? 0 : `${iframeMarginTop}px auto`,
          marginLeft: isFullscreen ? 0 : `calc(50% - 45vw)`, // center iframe when not fullscreen
          border: 0,
          zIndex: 9999,
          borderRadius: isFullscreen ? 0 : '12px',
        }}
      />
    </div>
  );
}
