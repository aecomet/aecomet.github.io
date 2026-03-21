# Comet Portfolio

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A personal portfolio site built with Vue 3 + Vuetify, pre-rendered as a static site via vite-ssg and deployed to GitHub Pages.

**Live site:** https://aecomet.github.io/

---

## Tech Stack

- **Vue 3** (Composition API / `<script setup>`)
- **Vuetify 4** — UI components + dark theme
- **Vue Router 5** — client-side routing with lazy loading
- **TypeScript** — strict type checking
- **Vite 8** + **vite-ssg** — static site generation
- **SCSS** — global styles via CSS custom properties
- **pnpm** — package manager

---

## Getting Started

### Prerequisites

- Node.js `24.14.0` (see `.node-version`)
- pnpm `10`

```sh
npm i -g pnpm
```

### Install & Run

```sh
pnpm install
pnpm dev
# => http://localhost:8888/
```

### Build

```sh
pnpm build
# Output: ./build/
```

---

## Docker

```sh
# Run the pre-built image
docker run -p 8888:80 --rm ghcr.io/aecomet/portfolio
# => http://localhost:8888/
```

---

## Project Structure

```
src/
├── app.ts              # Entry point
├── App.vue             # Root layout
├── components/         # AppHeader, StarfieldCanvas, CursorGlow
├── pages/              # HomePage, UserProfile, UserCareer, UserContact, NotFoundPage
├── plugins/            # router.ts, vuetify.ts
├── types/              # TypeScript type definitions
└── assets/             # Global styles, images
```

For full architecture details, see [doc/architecture.md](doc/architecture.md).

---

## CI/CD

| Trigger | Workflow | Description |
|---------|----------|-------------|
| push to `main` | `app-release.yml` | Build → Deploy to GitHub Pages → Push Docker image |
| Pull Request | `lint-runner.yml` | ESLint + Prettier via reviewdog |

