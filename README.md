[![Coverage Status](https://coveralls.io/repos/github/uw-it-aca/uxdesign-guides/badge.svg?branch=develop)](https://coveralls.io/github/uw-it-aca/uxdesign-guides?branch=develop)

# uxdesign-guides

Solstice Design System

## Development

### Cloning

Clone the repository and change into the project directory:

```bash
git clone git@github.com:uw-it-aca/solstice-docs.git
cd solstice-docs
```

### Setup

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

### Testing

Run the test suite with [Vitest](https://vitest.dev/):

```bash
# Run tests in watch mode
npm test

# Run tests once with a coverage report
npm run coverage
```

### Linting

Lint the codebase with [oxlint](https://oxc.rs/docs/guide/usage/linter):

```bash
# Report lint issues
npm run oxlint

# Automatically fix fixable lint issues
npm run oxlint:fix
```

### Formatting

Format the codebase with [oxfmt](https://oxc.rs/docs/guide/usage/formatter):

```bash
# Format files in place
npm run oxfmt

# Check formatting without writing changes
npm run oxfmt:check
```

## Deployment

Pushes to `main` trigger GitHub Actions, which build with Vite and deploy to `depts.washington.edu/ux/` via SCP.

### SSH Key Setup (one-time)

**Generate a deploy key on your local machine (no passphrase):**

```bash
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_deploy -N ""
```

**Copy the public key to the remote server:**

```bash
ssh-copy-id -i ~/.ssh/id_ed25519_deploy.pub ux@ovid.u.washington.edu
```

**Add to GitHub Secrets** (repo → Settings → Secrets and variables → Actions):

| Secret            | Value                                    |
| ----------------- | ---------------------------------------- |
| `SSH_HOST`        | `ovid.u.washington.edu`                  |
| `SSH_USER`        | `ux`                                     |
| `SSH_PRIVATE_KEY` | Output of `cat ~/.ssh/id_ed25519_deploy` |

**Verify locally:**

```bash
ssh -T ux@ovid.u.washington.edu
```

Should connect without a password prompt.

### Remote Server

- Web root: `~/public_html` → `/rc00/d87/ux/public_html`, a symlink to `/hw00/d87/ux`
  (`/rc00/d87/ux` is the account home and is not served)
- Site URL: https://depts.washington.edu/ux/
- Vanity URL: https://uxdesign.uw.edu/

### Vite Base Path

The `base` option in `vite.config.js` is set to `/ux/` to match the subpath on
the server, so asset URLs are baked as `/ux/assets/…` at build time. It is
applied to builds only (`command === "build"`); the dev server stays at `/`, so
`npm run dev` serves plain `http://localhost:5173/` URLs. `npm run preview`
serves the real build and therefore does use `/ux/`.

The same directory is served at **two mount points**:

| URL                              | Mount                              |
| -------------------------------- | ---------------------------------- |
| https://depts.washington.edu/ux/ | canonical, matches `base`          |
| https://uxdesign.uw.edu/         | UW URL masking, at the host's root |

On the masked vanity host there is no `/ux/` prefix, so two things bridge the
gap. The generated `.htaccess` strips the prefix when `HTTP_HOST` is a masked
host, which lets the baked-in asset URLs resolve; and `src/router/base.js`
resolves the router base against the current path, so generated links stay
clean on both (`/ux/xd-team` on depts, `/xd-team` on the vanity domain).

Masked hostnames are declared via the plugin's `maskedHosts` option in
`vite.config.js`.

### Status Codes

Because this is a single-page app served as static files, Apache needs rules to
resolve deep links. `dist/.htaccess` is generated during `npm run build` by
`vite-plugin-htaccess.js` from the actual `vue-router` route table:

| Request                           | Response                            |
| --------------------------------- | ----------------------------------- |
| `/ux/assets/…`, `/ux/images/…`    | the file itself                     |
| a known route, e.g. `/ux/xd-team` | `index.html` with **200**           |
| anything else                     | `index.html` with a genuine **404** |

Unknown URLs are handled by `ErrorDocument 404 /ux/index.html`, so the app shell
still loads and renders the 404 page while the response carries a real 404
status. Adding a page under `src/pages/` updates the rules on the next build.

Legacy files from the previous static site still live in the web root and are
served as-is by the file/directory passthrough rule, since SCP merges rather
than replaces. Check for collisions before adding a page whose route matches an
existing file or directory name.

Verify after a deploy:

```bash
# canonical host
curl -sI https://depts.washington.edu/ux/xd-team | head -1   # expect 200
curl -sI https://depts.washington.edu/ux/nope    | head -1   # expect 404

# masked vanity host
curl -sI https://uxdesign.uw.edu/xd-team | head -1           # expect 200
curl -sI https://uxdesign.uw.edu/nope    | head -1           # expect 404
```

This relies on `AllowOverride` permitting `mod_rewrite` and `ErrorDocument` in
`.htaccess` on the server. The rules avoid `<If>` blocks, which would also
require `AllowOverride All`.
