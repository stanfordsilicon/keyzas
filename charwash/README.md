# CharWash

A simple tool for extracting characters from pasted text.

This project includes:  
**Backend**: Handles character extraction logic.  
**Frontend**: A lightweight UI for pasting text, viewing, and optionally downloading extracted characters.

CharWash is a subproject within a larger folder containing the Keyzas program.

## Features

- Paste text into the interface.

- Extracts all unique characters, including letters, numbers, punctuation, and symbols.

- Displays results instantly in the browser.

- No external server or database required.

## Tech Stack

- JavaScript (character extraction logic)

- HTML/CSS (frontend interface)

## Installation

### Prerequisites

- Node.js (v16 or later recommended)
- npm (comes with Node.js)

### Setup

1. **Clone the repository**

```bash
   git clone https://github.com/stanfordsilicon/charwash.git
   cd charwash/charwash
```

2. **Install Dependencies**

```bash
   npm install
```

3. **Run in development mode**

```bash
    npm run dev
```

This will start a local dev server (usually on http://localhost:5173 if you’re using Vite, or http://localhost:3000 for other setups).
The terminal will tell you the exact address.

4. **Build for production (optional)**

```bash
npm run build
```

This will output an optimized version of the app into the dist/ folder, which you can deploy to any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

## Usage

1. Open the app in your browser.

2. Paste a text segment.

3. Click "Extract Characters."

4. See the list of unique characters displayed.

5. (Optional) Download the unique characters into a file.

## Project Structure

```bash
charwash/
├── public/ # Static assets (favicon, images, etc.)
├── src/ # Application source code
│ ├── app/ # App-level setup and config
│ │ ├── App.js
│ ├── pages/ # Page components (UI screens)
│ │ ├── About.js
│ │ └── Home.js
│ ├── styles/ # CSS / styling files
│ │ ├── globals.css
│ ├── utils/ # Utility/helper functions
│ │ ├── extractChars.js #Main extraction functions
│ └── index.js # Application entry point
├── package.json # npm configuration & scripts
└── LICENSE #MIT License
└── README.md # Documentation
```

## Example

Input: Hello, World!

Output: H e l o , W r d !

## License

[MIT](https://mit-license.org/)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
