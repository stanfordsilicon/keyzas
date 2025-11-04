'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);

  const fileInputRef = useRef(null);

  const handleAnalyze = async () => {
    if (!text && !file) {
      alert('Please provide text.');
      return;
    }

    const formData = new FormData();
    if (file) formData.append('file', file);
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

  const handleNewAnalysis = () => {
    setText('');
    setFile(null);
    setResults(null);
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  return (
    <div className="container">
      <h1>KeyZas</h1>

      <div className="instruction">
        Enter your text — KeyZas will automatically extract unique characters
        and find the best keyboard matches.
      </div>

      <textarea
        placeholder="Paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="analyze-button" onClick={handleAnalyze}>
        Analyze
      </button>

      {results && (
        <>
          <div className="results">
            {/* Top Keyboards by Coverage */}
            <h2>Top Keyboards by Coverage</h2>
            {results.top10ByCoverage?.length > 0 ? (
              <ol style={{ paddingLeft: '20px' }}>
                {results.top10ByCoverage.map((kb, i) => {
                  const simulatorSrc = encodeURIComponent(kb.keyboard_id.toLowerCase());
                  return (
                    <li
                      key={i}
                      style={{
                        marginBottom: '15px',
                        padding: '10px',
                        borderBottom: '1px solid #ccc',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <strong>{i + 1}. {kb.keyboard_name}</strong> ({kb.locale})<br />
                        Coverage: <b>{kb.coverage_percentage.toFixed(1)}%</b> | 
                        Overlap: <b>{kb.overlap_percentage.toFixed(1)}%</b>
                      </div>
                      <div>
                        <Link
                          href={`/visualizer?src=${simulatorSrc}`}
                          passHref
                        >
                          <span className="keyboard-button">Try Keyboard</span>
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ol>
            ) : (
              <div>No keyboards found by coverage.</div>
            )}

            {/* Top Keyboards by Overlap */}
            <h2 style={{ marginTop: '30px' }}>Top Keyboards by Overlap</h2>
            {results.top10ByOverlap?.length > 0 ? (
              <ol style={{ paddingLeft: '20px' }}>
                {results.top10ByOverlap.map((kb, i) => {
                  const simulatorSrc = encodeURIComponent(kb.keyboard_id.toLowerCase());
                  return (
                    <li
                      key={i}
                      style={{
                        marginBottom: '15px',
                        padding: '10px',
                        borderBottom: '1px solid #ccc',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <strong>{i + 1}. {kb.keyboard_name}</strong> ({kb.locale})<br />
                        Coverage: <b>{kb.coverage_percentage.toFixed(1)}%</b> | 
                        Overlap: <b>{kb.overlap_percentage.toFixed(1)}%</b>
                      </div>
                      <div>
                        <Link
                          href={`/visualizer?src=${simulatorSrc}`}
                          passHref
                        >
                          <span className="keyboard-button">Try Keyboard</span>
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ol>
            ) : (
              <div>No keyboards found by overlap.</div>
            )}
          </div>

          {/* Bottom Buttons */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button onClick={handleDownload} className="download-button">
              Download JSON
            </button>
            <button
              onClick={handleNewAnalysis}
              className="download-button"
              style={{ backgroundColor: '#642e2eff', color: '#fff' }}
            >
              Run New Analysis
            </button>
          </div>
        </>
      )}
    </div>
  );
}
