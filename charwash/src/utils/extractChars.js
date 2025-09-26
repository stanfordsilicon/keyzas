/**
 * Check if a character is Cyrillic
 * Covers Cyrillic, Cyrillic Supplement, Extended-A/B/C/D
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
 * @param {string} text - input text
 * @returns {string[]} sorted array of unique non-Cyrillic characters
 */
export function extractUniqueCharacters(text) {
  // Normalize text to NFC (like unicodedata.normalize('NFC', text))
  const normalized = text.normalize('NFC');

  const uniqueSet = new Set();

  for (const char of normalized) {
    if (!isCyrillic(char)) {
      uniqueSet.add(char);
    }
  }

  // Return sorted array by Unicode code point
  return Array.from(uniqueSet).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
}

/**
 * Prepare a downloadable text file in the browser
 * @param {string[]} characters - array of characters to save
 * @param {string} language - used in filename
 */
export function saveCharactersToFile(characters, language = 'output') {
  const filename = `${language}_unique_characters.txt`;
  const blob = new Blob([characters.join('\n')], { type: 'text/plain;charset=utf-8' });

  // Create a temporary link to download
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
