// src/pages/Home.js
import React, { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = async () => {
    if (!file) return alert('Please select a file.');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/analyze', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setResults(JSON.stringify(data.results, null, 2));
      } else {
        setResults('Error analyzing file.');
      }
    } catch (err) {
      setResults('Error connecting to server.');
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Keyzas</h1>
      <p>Upload a character file to analyze the best matching keyboards. Characters should all be on seperate lines.</p>

      <input type="file" onChange={handleFileChange} />
      <button onClick={handleAnalyze}>Analyze</button>

      {results && (
        <div className="result">
          <h2>Analysis Results:</h2>
          <pre>{results}</pre>
        </div>
      )}
    </div>
  );
}