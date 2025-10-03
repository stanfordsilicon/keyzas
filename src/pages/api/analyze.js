// src/pages/api/analyze.js
import formidable from 'formidable';
import fs from 'fs';
import { analyzeText } from '../../utils/getKeyboard.js';

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { fields, files } = await new Promise((resolve, reject) => {
      const form = formidable({
        multiples: false,
        keepExtensions: true, // keep file extensions
      });
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    let text = '';

    if (files.file) {
      // In formidable v4+, the file object is like: files.file = { filepath, originalFilename, mimetype }
      const file = Array.isArray(files.file) ? files.file[0] : files.file;
      if (!file.filepath) throw new Error('Uploaded file path is missing');
      text = fs.readFileSync(file.filepath, 'utf-8');
      fs.unlinkSync(file.filepath); // clean up temp file
    } else if (fields.text) {
      text = fields.text;
    } else {
      return res.status(400).json({ error: 'No text or file provided.' });
    }

    const result = await analyzeText(text);
    return res.status(200).json(result);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
