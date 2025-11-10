'use client';

import React from 'react';
import Link from 'next/link';

const buttonStyle = {
  backgroundColor: '#f3ecd4e7',
  borderRadius: '12px',
  padding: '20px 32px',
  fontWeight: 'bold',
  color: '#000000ff',
  fontSize: '1rem',
  textShadow: '0 1px 0 rgba(255,255,255,0.6)',
  boxShadow: 'inset 6px -6px 0 #c2b49f, inset -6px 6px 0 #fffdf4, 0 8px 12px rgba(0,0,0,0.25)',
  cursor: 'pointer',
  transition: 'all 0.1s ease-in-out',
  outline: 'none'
};

const activeStyle = {
  transform: 'translateY(3px)',
  boxShadow: 'inset -4px -4px 0 #c2b49f, inset 4px 4px 0 #fffbea, 0 4px 8px rgba(0,0,0,0.25)',
  outline: 'none'
};

export default function Navbar() {
  const [activeButton, setActiveButton] = React.useState(null);

  const handleMouseDown = (btn) => setActiveButton(btn);
  const handleMouseUp = () => setActiveButton(null);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 flex justify-end px-6 py-4 bg-white shadow-md">
      <div className="flex gap-4 items-center">
        <Link href="/" passHref>
          <button
            style={activeButton === 'home' ? { ...buttonStyle, ...activeStyle } : buttonStyle}
            onMouseDown={() => handleMouseDown('home')}
            onMouseUp={handleMouseUp}
          >
            Home
          </button>
        </Link>
        <Link href="/visualizer" passHref>
          <button
            style={activeButton === 'visualizer' ? { ...buttonStyle, ...activeStyle } : buttonStyle}
            onMouseDown={() => handleMouseDown('visualizer')}
            onMouseUp={handleMouseUp}
          >
            Visualizer
          </button>
        </Link>
        <Link href="/report-bug" passHref>
          <button
            style={activeButton === 'report' ? { ...buttonStyle, ...activeStyle } : buttonStyle}
            onMouseDown={() => handleMouseDown('report')}
            onMouseUp={handleMouseUp}
          >
            Report a Bug
          </button>
        </Link>
        <Link href="/features" passHref>
          <button
            style={activeButton === 'features' ? { ...buttonStyle, ...activeStyle } : buttonStyle}
            onMouseDown={() => handleMouseDown('features')}
            onMouseUp={handleMouseUp}
          >
            Request a Feature
          </button>
        </Link>
        {/* External SILICON link */}
        <button
          style={activeButton === 'silicon' ? { ...buttonStyle, ...activeStyle } : buttonStyle}
          onMouseDown={() => handleMouseDown('silicon')}
          onMouseUp={handleMouseUp}
          onClick={() => window.open('https://silicon.stanford.edu', '_blank', 'noopener,noreferrer')}
        >
          About SILICON
        </button>
      </div>
    </nav>

  );
}
