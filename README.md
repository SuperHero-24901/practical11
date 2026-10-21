# RouteFlow — React Router Navigation

## Aim
Routeflow — a React practical built with Vite, React, React Router DOM where relevant, and Tailwind CSS v4.

## Concepts used
- React functional components and JSX
- Component-based UI and responsive utility-first styling
- React Router DOM
- Form state, validation, and interactive feedback where relevant

## Requirements
- Node.js 20.19+ or 22.12+ recommended
- npm

## Run the project
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```

Each practical is independent. Open its folder in VS Code and run the commands from that folder.


## How client-side navigation works
`BrowserRouter` listens to browser history changes. `Link` and `NavLink` update the URL and render the matching `Route` without requesting a full new HTML page. `NavLink` exposes an active state, which is used to highlight the current page.
