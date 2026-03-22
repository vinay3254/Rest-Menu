# Repository Guidelines

## Project Structure & Module Organization
- `frontend/` contains the primary React app built with Vite. Entry point: `frontend/src/main.jsx`; top-level composition lives in `frontend/src/App.jsx`; UI sections are in `frontend/src/components/`.
- `backend/` contains the Express + Mongoose API. Routes live in `backend/routes/`, schemas/models in `backend/models/`, and seed data in `backend/seed.js`.
- `index.html` at the repository root is a standalone static version of the restaurant site. Keep it aligned with the React app when updating content or pricing.
- `frontend/dist/` is generated output from `npm run build`; do not hand-edit it.

## Build, Test, and Development Commands
- Frontend dev server: `cd frontend && npm run dev`
  Runs Vite on `http://localhost:3000` with `/api` proxied to the backend.
- Frontend production build: `cd frontend && npm run build`
  Verifies the React app compiles and writes assets to `frontend/dist/`.
- Frontend preview: `cd frontend && npm run preview`
  Serves the built frontend locally.
- Backend dev server: `cd backend && npm run dev`
  Starts Express with `nodemon`.
- Backend production start: `cd backend && npm start`
- Seed menu data: `cd backend && npm run seed`

## Coding Style & Naming Conventions
- Follow the existing style: 2-space indentation, single quotes, and no semicolons in JS/JSX unless required.
- React components use `PascalCase` filenames and exports, e.g. `Booking.jsx`.
- Utility functions use `camelCase`, e.g. `formatPrice`.
- Backend route files are lowercase plural (`menu.js`, `orders.js`); Mongoose models are singular `PascalCase` (`MenuItem.js`).
- No formatter or linter is configured, so match surrounding code exactly.

## Testing Guidelines
- There is no repository-owned automated test suite yet.
- Before submitting changes, run `cd frontend && npm run build`.
- For backend changes, run syntax checks such as `node --check backend/server.js` and manually verify `/api/menu`, `/api/orders`, and `/api/bookings`.
- For UI changes, manually test menu filtering, cart totals, booking submission, and responsive layout in both `index.html` and the React app.

## Commit & Pull Request Guidelines
- This workspace snapshot does not include Git history, so use short imperative commit messages, e.g. `frontend: update INR pricing` or `backend: sync seeded menu prices`.
- Keep commits scoped to one change area when possible.
- PRs should include: a brief summary, affected surfaces (`index.html`, `frontend`, `backend`), linked issue if available, and screenshots for visible UI changes.

## Security & Configuration Tips
- Backend settings come from `backend/.env`; expected keys are `PORT` and `MONGODB_URI`.
- Do not commit real secrets or production database URIs.
