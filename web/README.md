# Web Project Setup

This folder is a small frontend project built with TypeScript and Vite. It also uses JSON Server to serve the mock database from db.json.

## Prerequisites

Make sure these are installed on the other device:

- Node.js 18 or newer
- npm

## 1. Install dependencies

Open a terminal in this folder and run:

```bash
npm install
```

## 2. Start the mock API

In one terminal, start the JSON server:

```bash
npm run start:db
```

This will serve the data from db.json, usually at:

- http://localhost:3000

## 3. Start the frontend

Open a second terminal in the same folder and run:

```bash
npm run dev
```

Vite will print a local URL such as:

- http://localhost:5173/

Open that address in your browser.

## 4. Build for production

To create a production build:

```bash
npm run build
```

The output will be generated in the dist folder.

## 5. Preview the production build

```bash
npm run preview
```

## Notes

- The app entry point is src/index.ts.
- The HTML file is index.html.
- If the dev server port is busy, Vite will automatically choose another port and show it in the terminal.
- If dependencies become corrupted, you can reinstall them with:

```bash
rm -rf node_modules package-lock.json
npm install
```
