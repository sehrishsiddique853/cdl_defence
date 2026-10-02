# CDL Defense

CDL Defense is organized as a React/Vite client and a Node.js/Express server.

## Client

```sh
cd client
npm install
npm run dev
```

Set `VITE_API_URL` in the client environment to point the API client at a different base URL. It defaults to `/api`.

## Server

```sh
cd server
npm install
npm run dev
```

The API listens on port `3000` by default. Configure `PORT` and `CLIENT_ORIGIN` as needed. Database connection settings are read from `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, and `DB_NAME`.
