# AGENTS.md

Instructions for AI agents working in this repository.

## Project

UX Design Guides and Solstice Design System documentation site (`uxdesign-guides` / `solstice-docs`).
Vue 3 + Vite, using file-based routing (`vue-router/vite`) under `src/pages/`.
Built on `solstice-theme` / `solstice-vue` and `bootstrap-vue-next`.

## Stack

- Framework: Vue 3 (`<script setup>` SFCs)
- Build: Vite
- Routing: `vue-router/vite` — routes are generated from the file structure in `src/pages/`
- UI: `bootstrap-vue-next`, `bootstrap`, `bootstrap-icons`, `solstice-theme`, `solstice-vue`
- Testing: Vitest + `@vue/test-utils` + jsdom
- Linting: oxlint (`.oxlintrc.json`)
- Formatting: oxfmt (`.oxfmtrc.json`)

## Commands

```bash
npm run dev            # start dev server
npm run build          # production build (output: dist/)
npm run preview         # preview production build on port 5050

npm test               # vitest in watch mode
npm run coverage       # vitest run --coverage (single run + coverage report)

npm run oxlint         # lint
npm run oxlint:fix     # lint with autofix
npm run oxfmt          # format in place
npm run oxfmt:check    # check formatting without writing
```

When verifying a change, prefer `npm run coverage` over `npm test` for a single non-interactive run.

## Conventions

- New pages go under `src/pages/`; the file path determines the route. Check `src/pages/_templates/` for starting points (`_page.vue`, `_section.vue`, `_guide.vue`, `_component.vue`).
- Components live in `src/components/`; tests are colocated in `src/components/__tests__/<Component>.spec.js`.
- When adding or changing a component, add/update its corresponding spec file.
- Run `npm run oxlint` and `npm run oxfmt:check` before considering a change complete.
- Typography, vertical spacing, layouts, and component usage conventions for this site are documented in `docs/design-system.md` — consult it before adding new pages or components.

## Testing

- Test runner: Vitest, with `@vue/test-utils` and jsdom environment (see `vitest.config.js`).
- Specs are colocated in `src/components/__tests__/<Component>.spec.js`, one file per component.
- When adding or modifying a component in `src/components/`, add or update its matching spec file in the same PR.
- `npm test` runs Vitest in watch mode — do not use it for one-shot verification.
- Use `npm run coverage` (`vitest run --coverage`) for a single non-interactive run when verifying changes; CI runs both `npm test` and `npm run coverage` in the `test` job.
- Coverage is reported to Coveralls via the `test` job in `.github/workflows/cicd.yml`.

## Deployment

- CI/CD pipeline: `.github/workflows/cicd.yml`, triggered on push to `main` or `develop`.
- Pipeline stages: `build` (npm run build, uploads `dist/` as artifact) → `test` (npm test, npm run coverage, Coveralls upload) → `deploy` (main branch only).
- Deploy step uses `appleboy/scp-action` to copy `dist/*` to `ovid.u.washington.edu:/rc00/d87/ux` (web root, symlinked from `~/public_html`).
- Deploy uses SSH key secrets (`SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY`) — never print or log these values.
- Vite `base` path: `vite.config.js` currently has no `base` set. If one is ever added, it must be `/ux/` to match the server subpath — otherwise built asset URLs will break on the live site.
- Site: https://depts.washington.edu/ux/ (vanity: https://uxdesign.uw.edu/)

## Safety notes

- Do not modify `.github/workflows/cicd.yml` or deployment configuration without explicit confirmation — it affects the live production site.
- Do not commit secrets (SSH keys, tokens). `.env.sample` is a template only; real `.env` values are gitignored.
