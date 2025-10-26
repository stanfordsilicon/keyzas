// src/utils/analyzeKeyboardFromText.js
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

/**
 * Check if a character is Cyrillic
 */
export function isCyrillic(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 0x0400 && code <= 0x04FF) ||   // Cyrillic
    (code >= 0x0500 && code <= 0x052F) ||   // Cyrillic Supplement
    (code >= 0x2DE0 && code <= 0x2DFF) ||   // Cyrillic Extended-A
    (code >= 0xA640 && code <= 0xA69F) ||   // Cyrillic Extended-B
    (code >= 0x1C80 && code <= 0x1C8F) ||   // Cyrillic Extended-C
    (code >= 0x1E030 && code <= 0x1E08F)    // Cyrillic Extended-D
  );
}

/**
 * Extract unique non-Cyrillic characters from a string
 */
export function extractUniqueCharacters(text) {
  const normalized = text.normalize('NFC');
  const uniqueSet = new Set();

  for (const char of normalized) {
    if (!isCyrillic(char)) uniqueSet.add(char);
  }

  return Array.from(uniqueSet).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
}

/**
 * Load all keyboard metadata from CSV
 */
export function loadAllKeyboards() {
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

/**
 * Compare a set of language characters against a keyboard definition
 */
function analyzeKeyboardMatch(languageChars, keyboard) {
  const keyboardChars = new Set();
  if (keyboard.all_characters) {
    keyboard.all_characters
      .split(',')
      .map(c => c.trim())
      .filter(Boolean)
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

/**
 * Full pipeline: take text → extract characters → match keyboards
 */
export async function analyzeText(text) {
  if (typeof text !== 'string') text = String(text);

  const uniqueChars = extractUniqueCharacters(text);
  if (uniqueChars.length === 0) {
    console.error('No characters found in the input text.');
    return { top10ByCoverage: [], top10ByOverlap: [] };
  }

  const languageChars = new Set(uniqueChars);
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
    uniqueCharacters: uniqueChars,
  };
}

// CLI support
if (import.meta.url === `file://${process.argv[1]}`) {
  const sampleText = process.argv[2];
  if (!sampleText) {
    console.error('Usage: node analyzeKeyboardFromText.js "your text here"');
    process.exit(1);
  }

  analyzeText(sampleText).then(result => {
    console.log('Top 10 by coverage:');
    console.table(result.top10ByCoverage);
    console.log('Unique characters:', result.uniqueCharacters.join(' '));
  });
}
