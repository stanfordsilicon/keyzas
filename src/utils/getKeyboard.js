// src/utils/getKeyboard.js
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

// Load characters from a file
function loadCharactersFromFile(filePath) {
  const chars = new Set();
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    for (const line of data.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (trimmed) chars.add(trimmed);
    }
  } catch (err) {
    console.error(`Error reading file: ${filePath}\n`, err.message);
  }
  return chars;
}

// Load keyboard metadata from CSV
function loadAllKeyboards() {
  return new Promise((resolve) => {
    const keyboards = [];
    const keyboardFile = path.join(process.cwd(), 'keyboard_metadata.csv');

    if (!fs.existsSync(keyboardFile)) {
      console.error(`Keyboard metadata file not found: ${keyboardFile}`);
      resolve([]);
      return;
    }

    fs.createReadStream(keyboardFile)
      .pipe(csv())
      .on('data', (row) => {
        keyboards.push({
          id: row['id'],
          name: row['name'],
          locale: row['locale'],
          source_file: row['source_file'],
          all_characters: row['all_characters'],
        });
      })
      .on('end', () => resolve(keyboards))
      .on('error', (err) => {
        console.error('Error reading keyboard metadata:', err.message);
        resolve([]);
      });
  });
}

// Analyze a keyboard against the language characters
function analyzeKeyboardMatch(languageChars, keyboard) {
  const keyboardChars = new Set();
  if (keyboard.all_characters) {
    keyboard.all_characters
      .split(',')
      .map(c => c.trim())
      .filter(c => c)
      .forEach(c => keyboardChars.add(c));
  }

  const overlap = new Set([...languageChars].filter(c => keyboardChars.has(c)));
  const missing = new Set([...languageChars].filter(c => !keyboardChars.has(c)));
  const excess = new Set([...keyboardChars].filter(c => !languageChars.has(c)));

  return {
    keyboard_id: keyboard.id,
    keyboard_name: keyboard.name,
    locale: keyboard.locale,
    source_file: keyboard.source_file,
    language_char_count: languageChars.size,
    keyboard_char_count: keyboardChars.size,
    overlap_count: overlap.size,
    missing_count: missing.size,
    excess_count: excess.size,
    coverage_percentage: languageChars.size ? (overlap.size / languageChars.size) * 100 : 0,
    overlap_percentage: keyboardChars.size ? (overlap.size / keyboardChars.size) * 100 : 0,
    overlap_chars: [...overlap].sort().join(','),
    missing_chars: [...missing].sort().join(','),
    excess_chars: [...excess].sort().join(','),
  };
}

// Analyze characters given as a string
async function analyzeText(text) {
  const languageChars = new Set();
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (trimmed) languageChars.add(trimmed);
  }

  if (languageChars.size === 0) return [];

  const keyboards = await loadAllKeyboards();
  const results = keyboards.map(kb => analyzeKeyboardMatch(languageChars, kb));

  const coverageSorted = [...results].sort(
    (a, b) => b.coverage_percentage - a.coverage_percentage || b.overlap_percentage - a.overlap_percentage
  );

  const overlapSorted = [...results].sort(
    (a, b) => b.overlap_percentage - a.overlap_percentage || b.coverage_percentage - a.coverage_percentage
  );

  return {
    top10ByCoverage: coverageSorted.slice(0, 10),
    top10ByOverlap: overlapSorted.slice(0, 10),
  };
}

export { loadCharactersFromFile, loadAllKeyboards, analyzeKeyboardMatch, analyzeText };
