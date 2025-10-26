const express = require('express');
const multer = require('multer');
const path = require('path');
const { analyzeText } = require('./getKeyboard'); // updated filename

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// File upload setup
const upload = multer({ dest: 'uploads/' });

app.post('/api/analyze', upload.single('file'), async (req, res) => {
  try {
    let text = '';

    if (req.file) {
      const fs = require('fs');
      text = fs.readFileSync(req.file.path, 'utf-8');
      fs.unlinkSync(req.file.path); // clean up
    } else if (req.body.text) {
      text = req.body.text;
    } else {
      return res.status(400).json({ error: 'No text or file provided.' });
    }

    const result = await analyzeText(text);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});