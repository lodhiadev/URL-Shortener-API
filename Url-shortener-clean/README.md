# URL Shortener API (Cleaned)

This is a cleaned version of the URL Shortener API using Node.js + TypeScript + Express + MongoDB.
All Vercel-specific files and markers were removed to make the project a normal Node project suitable for local development or any Node host.

## Quick start

1. Install dependencies:
```bash
npm install
```

2. Create `.env` from `.env.example` and set your MongoDB URI and JWT secret.

3. Run in development:
```bash
npm run dev
```

4. Build:
```bash
npm run build
npm start
```

## Endpoints (basic)
- `POST /auth/signup`
- `POST /auth/login`
- `POST /url/shorten`
- `GET /:shortCode` → Redirects to original URL and records analytics
- `GET /analytics/:shortCode` → Analytics for a short code (protected)

