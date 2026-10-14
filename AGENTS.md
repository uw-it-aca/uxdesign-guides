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
- Typography, vertical spacing, layouts, and component usage conventions for this site are documented in `docs/design-system.md` — consult it before adding new pages or components. `DESIGN.md` at the repo root is a pointer to that file for agents that look for design rules there.

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
- Deploy step uses `appleboy/scp-action` to copy `dist/*` plus `dist/.htaccess` to `ovid.u.washington.edu:/rc00/d87/ux/public_html`. That path is a symlink to the real web root (`/hw00/d87/ux`); `/rc00/d87/ux` itself is the account home and is **not** served, so do not use it as the deploy target.
- Deploy uses SSH key secrets (`SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY`) — never print or log these values.
- Vite `base` path: `vite.config.js` sets `base: "/ux/"` **for builds only** (`command === "build"`), matching the server subpath; dev stays at `/` so local URLs are clean. Do not change the build value — built asset URLs will break on the live site. `src/router/base.js` resolves the router base from `import.meta.env.BASE_URL` against the current path, so the app works at both mount points (see below).
- The site is served at **two mount points** from one directory: `https://depts.washington.edu/ux/` (canonical, matches `base`) and `https://uxdesign.uw.edu/` (UW URL masking serves the same directory at the vanity host's root, with no `/ux/` prefix — verified via `HTTP_HOST`/`REQUEST_URI` on the server). The generated `.htaccess` strips the `/ux/` prefix when `HTTP_HOST` is a masked host, so the baked-in asset URLs resolve there too. Masked hosts are configured via the plugin's `maskedHosts` option.
- The generated rules deliberately avoid `<If>` blocks, which need `AllowOverride All`; a single `ErrorDocument 404 /ux/index.html` works on both mounts because the internal redirect re-enters the rewrite rules and gets the prefix stripped.
- `dist/.htaccess` is generated at build time by `vite-plugin-htaccess.js` from the real `vue-router` route table. Known routes are rewritten to `index.html` (HTTP 200); everything else falls through to `ErrorDocument 404 /ux/index.html`, which serves the SPA shell with a genuine 404. Routes listed in the plugin's `exclude` option (`/_templates`, `/solstice/secret`) still render client-side but respond 404, keeping them out of search indexes.
- The `.htaccess` is a dotfile, which globs do not match: the artifact step needs `include-hidden-files: true` and the SCP step lists `dist/.htaccess` explicitly. Any change to either step must keep hidden files included, otherwise deep links break on deploy.
- SCP merges into the web root rather than replacing it, so legacy files from the previous static site survive alongside the build and keep resolving via the file/directory passthrough rule. This is intentional; check for name collisions with new routes before adding pages.
- Site: https://depts.washington.edu/ux/ (vanity: https://uxdesign.uw.edu/)

## Safety notes

- Do not modify `.github/workflows/cicd.yml` or deployment configuration without explicit confirmation — it affects the live production site.
- Do not commit secrets (SSH keys, tokens). `.env.sample` is a template only; real `.env` values are gitignored.
