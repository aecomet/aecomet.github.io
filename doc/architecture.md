# Architecture

## Overview

This is a static portfolio site built with Vue 3 and Vuetify, pre-rendered via vite-ssg (Static Site Generation). The output is a fully static HTML/JS/CSS bundle deployed to GitHub Pages.

---

## Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| Framework | Vue 3 (Composition API) | ^3.5 |
| UI Library | Vuetify | ^4.0 |
| Router | Vue Router | ^5.0 |
| Language | TypeScript | ^5.9 |
| Build Tool | Vite | ^8.0 |
| SSG | vite-ssg | ^28.3 |
| Icons | @mdi/font | ^7.4 |
| Styling | SCSS | via sass |
| Package Manager | pnpm | 10 |
| Container Runtime | Apache httpd (Alpine) | httpd:alpine3.21 |

---

## Directory Structure

```
/
├── src/
│   ├── app.ts               # Application entry point (ViteSSG bootstrap)
│   ├── App.vue              # Root component (layout shell)
│   ├── index.html           # HTML template
│   ├── assets/
│   │   ├── style.scss       # Global styles, CSS variables, layout
│   │   └── images/          # Static images (favicon, logo, noise.svg)
│   ├── components/
│   │   ├── AppHeader.vue    # Fixed navigation bar
│   │   ├── StarfieldCanvas.vue  # Animated canvas background (all pages)
│   │   └── CursorGlow.vue   # Radial glow effect following mouse cursor
│   ├── pages/
│   │   ├── HomePage.vue     # / — Hero section
│   │   ├── UserProfile.vue  # /profile — Profile page
│   │   ├── UserCareer.vue   # /career — Career timeline
│   │   ├── UserContact.vue  # /contact — Contact info
│   │   └── NotFoundPage.vue # /* — 404 fallback
│   ├── plugins/
│   │   ├── router.ts        # Vue Router configuration
│   │   └── vuetify.ts       # Vuetify configuration (MDI icons, dark theme)
│   └── types/
│       ├── Career.ts        # Type definition for career timeline data
│       ├── json.d.ts        # Module declaration for JSON imports
│       └── vue.d.ts         # Vue SFC module declaration
├── doc/                     # Project documentation
├── .github/
│   ├── copilot-instructions.md  # GitHub Copilot coding guidelines
│   └── workflows/
│       ├── app-release.yml  # Build → Deploy to Pages → Push Docker image
│       ├── lint-runner.yml  # ESLint / Prettier checks via reviewdog
│       └── reviewdog.yml    # Reviewdog configuration
├── Dockerfile               # Multi-stage build (Node builder + httpd runtime)
├── vite.config.mjs          # Vite build configuration
├── tsconfig.json            # TypeScript configuration
├── eslint.config.mjs        # ESLint flat config
└── prettier.config.js       # Prettier configuration
```

---

## Application Bootstrap

```
src/app.ts
  └── ViteSSG(App, ({ app }) => {
        app.use(router)     // Vue Router
        app.use(MyVuetify)  // Vuetify + MDI icons
      })
```

vite-ssg pre-renders all routes at build time, producing static HTML per route for fast initial load and SEO.

---

## Routing

All routes use **lazy loading** (dynamic `import()`) to split bundles per page.

| Name | Path | Component |
|------|------|-----------|
| Home | `/` | `pages/HomePage.vue` |
| Profile | `/profile` | `pages/UserProfile.vue` |
| Career | `/career` | `pages/UserCareer.vue` |
| Contact | `/contact` | `pages/UserContact.vue` |
| NotFound | `/:pathMatch(.*)*` | `pages/NotFoundPage.vue` |

History strategy: `createWebHistory` (browser) / `createMemoryHistory` (SSR/SSG).

---

## UI & Styling

- **Vuetify 4** provides the component library and dark theme.
- **@mdi/font** is used for all icons (`mdi-*` prefix).
- Global styles are defined in `src/assets/style.scss` using CSS custom properties (`--bg`, `--accent1`, etc.).
- Font families loaded from Google Fonts: `Syne`, `Noto Sans JP`, `DM Mono` (all with `display=swap`).

---

## Visual Effects

| Component | Description |
|-----------|-------------|
| `StarfieldCanvas.vue` | Full-viewport canvas with 260 twinkling stars, 3 orbit systems, meteor showers. Rendered on all pages via `requestAnimationFrame`. |
| `CursorGlow.vue` | Radial gradient following the mouse cursor. Mouse events are throttled to 16ms intervals. |

---

## Build & Output

```
pnpm build
  └── vite-ssg build
        ├── Pre-renders all routes to static HTML
        ├── Code-splits JS per page chunk
        ├── Compresses assets: gzip (.gz) + brotli (.br)
        └── Outputs to /build/
```

Build output is served by Apache httpd in the Docker image.

---

## CI/CD Pipeline

```
push to main
  └── app-release.yml
        ├── 1. Build app      (pnpm install + pnpm build)
        ├── 2. Deploy         (Upload artifact → GitHub Pages)
        └── 3. Build image    (Docker multi-arch: amd64 + arm64 → ghcr.io)
```

Code quality is enforced on pull requests via `lint-runner.yml` (ESLint + Prettier through reviewdog).

---

## Docker

Multi-stage build:

| Stage | Base Image | Purpose |
|-------|-----------|---------|
| `builder` | `node:24.14.0-slim` | Install dependencies, run `pnpm build` |
| runtime | `httpd:alpine3.21` | Serve `/build` as static files |

Port: `8888`. Runs as `www-data` user with minimal capabilities.

---

## Path Alias

`@src/*` resolves to `src/*` in both Vite and TypeScript, covering `.ts` and `.vue` files.
