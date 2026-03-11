# MERN Frontend

Frontend for a MERN-style product listing app built with React and Vite.
The app fetches products from a backend API and renders them in the UI.

## Tech Stack

- React 19
- Vite 7
- Axios
- ESLint 9

## Prerequisites

- Node.js 20 or newer
- npm (comes with Node.js)
- Running backend API at `http://localhost:8080`

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser:

`http://localhost:5173`

## Available Scripts

- `npm run dev` - start the Vite dev server.
- `npm run build` - create a production build in `dist/`.
- `npm run lint` - run ESLint checks.
- `npm run preview` - preview the production build locally.

## API Dependency

The frontend currently requests products from:

`GET http://localhost:8080/api/products`

Make sure your backend server is running and allows requests from your frontend origin.

## Project Structure

```text
src/
	App.jsx
	App.css
	index.css
	main.jsx
```

## Continuous Integration

GitHub Actions workflow is available at `.github/workflows/ci.yml`.
It runs on pushes and pull requests, installs dependencies with `npm ci`, then executes:

- `npm run lint`
- `npm run build`
