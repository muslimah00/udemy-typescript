# Web Project Setup

This `web` folder is a small frontend project built with TypeScript and bundled using `esbuild`.

## Prerequisites

- Node.js installed
- npm available from the command line

## Install dependencies

Open a terminal in `/Users/oceaanblu/Documents/my-project/udemy-typescript/web` and run:

```bash
npm install
```

## Run the development server

```bash
npm run dev
```

Then open the local URL shown in the terminal, typically:

- `http://127.0.0.1:8000/`

## Build for production

```bash
npm run build
```

The bundled output will be written to:

- `dist/bundle.js`

## Notes

- The app entry point is `src/index.ts`.
- The HTML file is `index.html` and loads `./dist/bundle.js`.
- If you see a permission error on `node_modules/.bin/esbuild`, run:

```bash
chmod +x node_modules/.bin/esbuild
```

- If the install is corrupted, remove `node_modules` and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```
