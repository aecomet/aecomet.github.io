---
applyTo: '**'
---

## Response

- Always respond in Japanese.

## Coding Conventions

- Use meaningful names for variables and functions.
- Keep comments concise and specific.
- Avoid magic numbers; define them as named constants.
- Prioritize code readability.

## Code Review

Always perform a code review before committing.

### Review Checklist

#### Vue
- Use Composition API (`<script setup>`).
- Ensure `defineProps` / `defineEmits` are properly typed.
- Always specify `:key` on `v-for` directives.
- Do not use `v-if` and `v-for` on the same element.
- Component names must be in PascalCase.
- Avoid unnecessary `watch` or `computed` usage.

#### Vuetify
- Prefer Vuetify components over custom implementations.
- Use Vuetify's theme and color system (e.g., `color` prop) consistently.
- Use the grid system (`v-row` / `v-col`) for responsive layouts.
- Use Vuetify's icon component (`v-icon`) for icons.

#### Vue Router
- Set a `name` for every route definition.
- Use `<RouterLink>` or `router.push()` for navigation; avoid raw `<a>` tags.
- Use `<RouterView>` with a `key` where appropriate to prevent unintended component reuse.
- Apply navigation guards (`beforeEach`, etc.) for authentication and authorization when needed.

### Lint / Format

Verify there are no ESLint errors or warnings:
```sh
pnpm lint
```

Verify code conforms to Prettier formatting:
```sh
pnpm format
```

### Build Verification

Confirm the build completes successfully before committing:
```sh
pnpm build
```

## Package Updates

- Use npm-check-updates listed in package.json and run the following command:
  - `npx ncu`
- For packages that have pending updates, analyze and report the release notes only for packages with major version bumps.
