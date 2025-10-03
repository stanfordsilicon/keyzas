'use client';

import { useState, useRef } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);

  const fileInputRef = useRef(null);

  // Handle Analyze
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

  // Handle file input
  const handleFileClick = () => fileInputRef.current.click();
  const handleFileChange = (e) => setFile(e.target.files[0]);

  // Handle download
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

  // Handle clearing everything
  const handleNewAnalysis = () => {
    setText('');
    setFile(null);
    setResults(null);
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  return (
    <div className="container">
      <h1>Keyzas</h1>

      <div className="instruction">
        Enter your characters below or upload a text file, ensuring that each character appears on a separate line.
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
          {/* Download and New Analysis buttons */}
          <div className="results-buttons" style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <button
              onClick={handleDownload}
              className="download-button"
            >
              Download Results
            </button>
            <button
              onClick={handleNewAnalysis}
              className="download-button"
              style={{ backgroundColor: '#c07a35ff', color: '#fff' }}
            >
              Run New Analysis
            </button>
          </div>

          {/* Results box with border */}
          <div
            className="results-box"
            style={{
              border: '2px solid #d6c9b8',
              padding: '16px',
              borderRadius: '10px',
              backgroundColor: '#f8f8f0',
              overflowX: 'auto'
            }}
          >
            <h2>Analysis Results</h2>
            <pre>{JSON.stringify(results, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
