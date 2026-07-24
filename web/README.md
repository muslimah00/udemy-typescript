# Web Project

This folder contains the frontend app for the TypeScript course project.

## Requirements

- Node.js
- npm

## Install dependencies

```bash
npm install
```

## Run the project

You need to start two servers:

1. Start the mock API server:

```bash
npm run start:db
```

This runs `json-server` with `db.json` and serves the mock API on:

- http://localhost:3000

2. In a second terminal, start the frontend dev server:

```bash
npm run start:parcel
```

This runs Parcel and serves the app locally, typically at:

- http://localhost:1234

## Notes

- The frontend expects the mock API to be running before using the app.
- If you want to stop the servers, press `Ctrl + C` in each terminal.
