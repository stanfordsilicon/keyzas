'use client';

import { useState, useRef } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);

  const fileInputRef = useRef(null);

  const handleAnalyze = async () => {
    if (!text && !file) {
      alert('Please provide text or upload a file.');
      return;
    }

    const formData = new FormData();
    if (file) formData.append('file', file); // file takes priority
    else formData.append('text', text);

    const res = await fetch('/api/analyze', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();

    if (res.ok) setResults(data);
    else alert(data.error || 'Error analyzing text');
  };

  const handleFileClick = () => fileInputRef.current.click();
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleDownload = () => {
    if (!results) return;
    const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'keyzas_results.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <h1>Keyzas</h1>
      <div className="instruction">
        Paste your characters below or upload a file. <br />
        <strong>Each character should be on its own line.</strong>
      </div>

      <textarea
        placeholder="Paste your characters here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="or-text">or</div>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden-file-input"
        onChange={handleFileChange}
      />
      <button className="upload-button" onClick={handleFileClick}>
        {file ? `File: ${file.name}` : 'Upload File'}
      </button>

      <button className="analyze-button" onClick={handleAnalyze}>
        Analyze
      </button>

      {results && (
        <div className="results">
          <h2>Top 10 by Coverage</h2>
          <pre>{JSON.stringify(results.top10ByCoverage, null, 2)}</pre>

          <h2>Top 10 by Overlap</h2>
          <pre>{JSON.stringify(results.top10ByOverlap, null, 2)}</pre>

          <button className="download-button" onClick={handleDownload}>
            Download Results
          </button>
        </div>
      )}
    </div>
  );
}
