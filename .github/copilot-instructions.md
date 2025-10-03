<!-- .github/copilot-instructions.md -->
# Copilot / AI agent instructions for Keyzas (CharWash)

Short, focused notes for an AI making code changes in this repository. Read these before editing files.

- Purpose: this repo is a small React frontend + a minimal Express backend used to analyze character lists against keyboard metadata (CSV). Frontend lives in `src/` and a production build is in `build/` / `public/`.
- Major files to inspect first:
  - `server.js` — Express server (serves static build and exposes analysis endpoint).
  - `src/utils/getKeyboard.js` — core analysis logic (CSV loader, compare algorithm, CLI entrypoint). Key functions: `analyzeText`, `loadAllKeyboards`, `analyzeKeyboardMatch`.
  - `src/pages/Home.js` — simple React UI that uploads files and shows results.
  - `src/keyboard_metadata.csv` — the keyboard metadata CSV used by `loadAllKeyboards()` (expected columns: `id,name,locale,source_file,all_characters`).
  - `package.json` — contains the React scripts (no server start script).

Immediate architecture summary (big picture):
- The analysis logic is centralized in `src/utils/getKeyboard.js` and is written using CommonJS exports (module.exports). The backend should `require()` that module and call `analyzeText()` to produce results.
- The Express app (`server.js`) exposes a file-upload/JSON endpoint and serves frontend static assets from `frontend/build` (note: current build dir in repo is `build/`).
- The React app in `src/` is a Create-React-App style project (uses `react-scripts`). The UI posts files to an analyze endpoint and renders JSON results.

Important, discoverable mismatches and gotchas (fix or be careful):
- server.js expects `require('./getKeyboard')` but the actual module is at `src/utils/getKeyboard.js`. Agents should either fix the require path or add a small wrapper `getKeyboard.js` at the repo root.
- server.js registers POST at `/api/analyze` but `src/pages/Home.js` posts to `/analyze` (no `/api` prefix). Align these when editing both client and server.
- `server.js` serves static files from `path.join(__dirname, 'frontend/build')` but the repo contains `build/` at the repo root. Adjust the static path or move/rename build output accordingly.
- `package.json` only has React scripts (`start`, `build`, `test`). There is no `npm run start:server` — running the backend is done with `node server.js` (or create an npm script). Be explicit when modifying run instructions.
- Port collisions: CRA default dev server and `server.js` both target port 3000. When running both locally, prefer changing one (common choices: run frontend `npm start` on 3000 and backend on 3001, or use CRA proxy).

API contract & examples (what agents should expect when wiring client/server)
- Backend (server.js) expected behavior:
  - POST /api/analyze
    - Accepts multipart form field `file` (text file with one character per line) OR JSON body `{ "text": "...lines..." }`.
    - Calls `analyzeText(text)` and responds with the plain result object: { top10ByCoverage, top10ByOverlap }.
  - Serves frontend static build from the configured build directory.
- Frontend expectations (current code in `src/pages/Home.js`):
  - Performs a POST (fetch) to `/analyze` with form-data `file` and expects JSON; currently reads `data.results` — but backend actually returns root object with `top10ByCoverage` / `top10ByOverlap`. If you edit, either change client to consume returned keys, or have server wrap results in `{ results: ... }`.

CSV and data shapes to respect
- `src/keyboard_metadata.csv` rows are read with `csv-parser` and the code expects fields: `id`, `name`, `locale`, `source_file`, `all_characters`.
- `all_characters` is a comma-separated list in the CSV. `analyzeKeyboardMatch()` splits on commas and trims entries.

Coding conventions and patterns to follow
- Analysis module uses synchronous reads for small files and streams for the CSV; preserve intent (simplicity over premature optimization).
- `src/utils/getKeyboard.js` uses CommonJS (module.exports). The frontend is ESM (import/export). When adding or moving files, keep module system consistent with their runtimes (Node backend → CommonJS, React frontend → ESM).
- CLI: `src/utils/getKeyboard.js` has a `main()` entry and is runnable via `node src/utils/getKeyboard.js input.txt`. Keep that behavior if refactoring.

Developer workflows (explicit commands discovered here)
- Start frontend dev server (CRA):
  - npm install
  - npm start   # runs react-scripts start (CRA dev server)
- Run backend directly:
  - node server.js
  - (Or add package.json script: "start:server": "node server.js")
- Build frontend for production:
  - npm run build   # produces `build/` (this repo already contains a built artifact)

When making changes, be conservative and validate these quality gates locally:
- Lint / quick check: run the app build (`npm run build`) and then start the server (`node server.js`) to ensure static assets serve.
- Test API: POST a small file with curl or use the React UI to upload a file with one character per line.

If anything is unclear or you'd like me to implement automatic fixes for the mismatches above (route path, module path, static folder path, npm script), tell me which fixes you want and I will make them and run quick validations.

End of file.
