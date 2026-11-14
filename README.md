# Shortly — React URL Shortener

A responsive React landing page that shortens URLs using the Bitly API through a small Express backend.

## Features
- Responsive landing page and navigation
- URL validation and error messages
- Bitly shortening API integration
- Copy shortened URLs to clipboard
- Save recent links in localStorage
- Semantic HTML and accessible form labels

## Requirements
- Node.js 18 or later (Node.js 20+ recommended)
- A Bitly account and access token

## Setup
1. Run `npm install`.
2. Copy `.env.example` to `.env`.
3. Replace `replace_with_your_bitly_token` with your Bitly access token.
4. In terminal 1, run `npm run server`.
5. In terminal 2, run `npm run dev`.
6. Open the local URL shown by Vite (usually http://localhost:5173).

The Vite development server forwards `/api` requests to Express on port 3001. The token stays server-side. Never commit `.env`.

## Build
Run `npm run build` to create a production frontend in `dist/`. Production deployment must also host the Express API and route `/api/shorten` to it.

## Git
```bash
git init
git add .
git commit -m "Initial React URL shortener project"
```

## Project layout
- `src/components/`: React UI components
- `src/services/bitlyService.js`: API helper
- `server/index.js`: Express Bitly proxy
- `src/App.css`: responsive styles

## API details
The server sends POST requests to `https://api-ssl.bitly.com/v4/shorten` with `long_url` in the request body and a bearer token. Bitly rate limits and plan restrictions may apply.

## Notes
The course starter ZIP could not be retrieved in this environment, so this is an original implementation rather than an exact recreation of the starter assets. Replace placeholder artwork with licensed starter assets if your course requires pixel-accurate matching.
