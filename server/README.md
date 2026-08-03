# Express + TypeScript Decorator Router

A small Express server written in TypeScript that uses custom decorators (`@controller`, `@get`, `@post`, `@use`, `@bodyValidator`) to define routes declaratively, plus a simple cookie-based login/session system.

## Requirements

- **Node.js** 16 LTS or newer
- **npm** (comes with Node.js)

Check your versions:
```bash
node -v
npm -v
```

## 1. Clone the repository

```bash
git clone <your-repo-url>
cd server
```

## 2. Install dependencies

```bash
npm install
```

> **Note:** `typescript` must be present as a `devDependency` for the build step below to work. If `tsc` is not found after `npm install`, add it explicitly:
> ```bash
> npm install -D typescript
> ```

This installs:

| Package | Purpose |
|---|---|
| `express` | Web framework (routing, middleware, requests/responses) |
| `body-parser` | Parses incoming request bodies (e.g. login form) into `req.body` |
| `cookie-session` | Stores login/session state in a signed cookie, no session DB needed |
| `reflect-metadata` | Polyfill required for the `@controller`/`@get`/`@post`/etc. decorators to work |
| `nodemon` *(dev)* | Auto-restarts the server on file changes |
| `concurrently` *(dev)* | Runs the TypeScript compiler and the server together |
| `typescript` *(dev)* | Compiles `.ts` source to JavaScript |
| `@types/*` *(dev)* | TypeScript type definitions for the packages above |

## 3. Run in development mode

```bash
npm start
```

This runs two things in parallel (via `concurrently`):

- `tsc -w` — watches `src/` and compiles TypeScript into `build/` on every save
- `nodemon build/index.js` — restarts the running server whenever `build/` changes

The server starts at:

```
http://localhost:3000
```

## Available scripts

| Command | What it does |
|---|---|
| `npm start` | Runs the compiler in watch mode + the server together (recommended for development) |
| `npm run start:build` | Runs only the TypeScript compiler in watch mode |
| `npm run start:run` | Runs only the compiled server with `nodemon` (requires `build/` to already exist) |

## Routes

| Route | Method | Description |
|---|---|---|
| `/` | GET | Home page, shows login status |
| `/protected` | GET | Requires login, returns 403 otherwise |
| `/auth/login` | GET | Login form |
| `/auth/login` | POST | Submits `email` + `password` |
| `/auth/logout` | GET | Clears session, redirects to `/` |

**Demo login credentials** (hardcoded for local testing only — see [Known limitations](#known-limitations)):
```
email: hi@hi.com
password: password
```

## Project structure

```
server/
├── src/
│   ├── routes/
│   │   └── loginRoutes.ts        # legacy non-decorator routes (may be unused, see below)
│   ├── controllers/
│   │   ├── LoginController.ts    # /auth routes
│   │   ├── RootController.ts     # / and /protected routes
│   │   └── decorators/           # @controller, @get/@post/etc., @use, @bodyValidator
│   ├── AppRouter.ts               # singleton Express Router shared by all controllers
│   └── index.ts                   # app entry point
├── tsconfig.json
├── package.json
└── package-lock.json
```

## Known limitations

- Login credentials in `LoginController.ts` are hardcoded — replace with real credential/database checks before using this beyond local testing.
- The cookie-session signing key in the entry point is a placeholder — replace it with a secret value (ideally from an environment variable) before deploying anywhere.
- `src/routes/loginRoutes.ts` duplicates functionality already covered by the decorator-based controllers and does not appear to be imported anywhere; confirm whether it's still needed before relying on it.

## License

ISC
