'use client';

import React, { useState } from 'react';

export default function RequestFeature() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [featureDescription, setFeatureDescription] = useState('');
  const [useCase, setUseCase] = useState('');

  function submitFeature() {
    const subject = encodeURIComponent('KeyZas Feature Request from ' + (name || ''));
    const bodyLines = [
      'Name: ' + name,
      'Email: ' + email,
      '',
      'Feature Description:',
      featureDescription,
      '',
      'Use Case / Additional Details:',
      useCase
    ];

    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:silicon_project@stanford.edu?subject=${subject}&body=${body}`;
  }

  const labelStyle = {
    display: 'block',
    marginTop: 16,
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'left'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: 6,
    marginTop: 4,
    boxSizing: 'border-box',
    border: '1px solid #ccc',
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical'
  };

  const buttonStyle = {
    marginTop: 24,
    padding: '14px 24px',
    borderRadius: 6,
    background: '#000',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    display: 'inline-block',
    textAlign: 'center'
  };

  return (
    <div
      className="container"
      style={{
        padding: '40px 24px',
        maxWidth: 600,
        margin: '70px auto 0 auto',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'left'
      }}
    >
      <h1 style={{ fontSize: '32px', marginBottom: '16px', textAlign: 'left' }}>Request a Feature</h1>
      <p style={{ fontSize: '16px', marginBottom: '24px', textAlign: 'left' }}>
        Have an idea or feature request? Please fill out the form below with as much detail as possible, or email us directly at{' '}
        <a href="mailto:silicon_project@stanford.edu" style={{ color: '#000', textDecoration: 'underline' }}>
          silicon_project@stanford.edu.
        </a>.
      </p>

      <label style={labelStyle}>Name:</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ ...inputStyle, outline: 'none' }}
      />

      <label style={labelStyle}>Email:</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ ...inputStyle, outline: 'none' }}
      />

      <label style={labelStyle}>Feature Description:</label>
      <textarea
        value={featureDescription}
        onChange={(e) => setFeatureDescription(e.target.value)}
        rows={5}
        style={textareaStyle}
      />

      <label style={labelStyle}>Use Case / Additional Details:</label>
      <textarea
        value={useCase}
        onChange={(e) => setUseCase(e.target.value)}
        rows={4}
        style={textareaStyle}
      />

      <button onClick={submitFeature} style={buttonStyle}>
        Submit Feature Request
      </button>
    </div>
  );
}
