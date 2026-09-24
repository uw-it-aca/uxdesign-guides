# Design System

## Overview

This document defines conventions for building and maintaining the `uxdesign-guides`
documentation site itself (layouts, pages, and shared components under `src/`). It
covers typography, vertical spacing, and component usage patterns for the site's own
UI — the site also *documents* the Solstice Design System's components (under
`src/pages/solstice/`), but this file is about how this codebase is built, not the
full Solstice component API (see the Solstice pages themselves, and
`solstice-theme`/`solstice-vue`, for that).

## Stack Recap

- Vue 3 (`<script setup>` or options API SFCs), file-based routing via `vue-router/vite`
- `bootstrap-vue-next` + `bootstrap` + `bootstrap-icons` for base UI primitives
- `solstice-theme` (SCSS) and `solstice-vue` (components like `STopbarNeo`, `SSidebar`, `SHeading`) for the UW brand layer
- `vue3-mq` (Bootstrap 5 preset) for responsive breakpoints, injected as `mq`

`solstice-theme/dist/solstice.scss` and `solstice-vue/dist/style.css` are imported once
in `src/main.js`. Component-level Sass lives in `src/assets/css/styles.scss` (currently
minimal/unused).

## Typography

Bootstrap 5's predefined type scale is used, layered with `solstice-theme` font
utilities (`ff-encode-sans`, `ff-open-sans`).

| Element | Class                               | Notes                                    |
| ------- | ----------------------------------- | ----------------------------------------- |
| h1      | `display-5 fw-bold ff-encode-sans`  | Page title, set by `DefaultLayout`'s `#lead` slot |
| h2      | `display-6 ff-encode-sans`          | Top-level section heading                 |
| h3      | `fw-medium ff-encode-sans`          | Sub-section heading                       |
| h4–h6   | `fw-bold`                           |                                            |
| p       | (default) or `lead`                 | See below                                 |

### Paragraphs: `lead` vs. default

`.lead` is a Bootstrap utility class, applied directly to the `<p>` it belongs to —
never wrap a plain `<p>` in a `<div class="lead">`. `DefaultLayout`'s `#lead` slot uses
it for the single intro/summary paragraph under the `h1`. Every other paragraph on a
page uses default `<p>` styling; don't stack multiple `.lead` paragraphs on one page.

Paragraphs are capped at a readable max width (see `DefaultLayout`'s lead paragraph,
`max-width: 85ch`).

## Vertical Spacing Scale

A margin-bottom-only convention built on Bootstrap's default spacer utilities
(`mb-*`) — no custom spacer values. Every element carries `margin-bottom` only; no
element sets `margin-top`. This keeps spacing predictable without relying on margin
collapsing.

### Bootstrap's default spacer scale

| Utility suffix | rem value | px (at 16px root) |
| --------------- | --------- | ------------------ |
| `0`             | 0         | 0px                 |
| `1`             | 0.25rem   | 4px                 |
| `2`             | 0.5rem    | 8px                 |
| `3`             | 1rem      | 16px                |
| `4`             | 1.5rem    | 24px                |
| `5`             | 3rem      | 48px                |

Available as `mt-{0-5}`, `mb-{0-5}`, `my-{0-5}` (and `m-*` shorthand).

### Spacing scale for content

| Element                      | margin-top    | margin-bottom     | Utility class needed?                                                                                                                                                          |
| ----------------------------- | ------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `h1`                          | none          | `mb-3` (1rem)      | Yes — Reboot's default `h1` margin-bottom is `0.5rem`, so `mb-3` overrides it up to `1rem`.                                                                                       |
| `h2`                          | none          | `mb-3` (1rem)      | Yes — same as `h1`, default is `0.5rem`.                                                                                                                                          |
| `h3`                          | none          | `mb-2` (0.5rem)    | Technically matches Reboot's default already, but kept explicit for clarity/consistency with the scale.                                                                          |
| `p`                           | none          | `mb-3` (1rem)      | No — Reboot already sets `margin-bottom: 1rem` on `p`. Don't add `mb-3`.                                                                                                          |
| `ul` / `ol`                   | none          | `mb-3` (1rem)      | No — Reboot already sets `margin-bottom: 1rem` on `ul`/`ol`. Don't add `mb-3`.                                                                                                    |
| `li`                          | none          | `mb-1` (0.25rem)   | Yes — Reboot sets no default bottom margin on `li`; only add this if items need extra breathing room.                                                                            |
| `hr`                          | `my-5` (3rem) | `my-5` (3rem)      | Yes — exception to the margin-bottom-only rule. An `hr` sits between two content blocks rather than "belonging" to the one above it, so it always carries `my-5 w-50` (see `DefaultLayout`'s lead/content divider). |
| `section` (h2-level)          | none          | `mb-4` (1.5rem)    | Yes — `section` has no default margin. Separates top-level `h2` sections from one another.                                                                                       |
| `section` (h3-level, nested)  | none          | `mb-3` (1rem)      | Yes — for `<section>`s nested inside an `h2` section to group an `h3` with its content. One step smaller than the `h2`-level gap.                                                |

Because nothing carries `margin-top`, the visual gap before any element is simply the
previous sibling's `margin-bottom` — no collapsing math needed.

#### `hr` is the one exception

`hr` always uses `my-5 w-50`, not `mb-5` alone. Don't "fix" an `hr`'s classes to match
the margin-bottom-only pattern used everywhere else.

#### Sectioning content

When an `h2` and its related content are grouped in a `<section>`, apply `mb-4` to the
`section` itself rather than to its last child:

```html
<section class="mb-4">
  <h2 class="mb-3">Section Heading</h2>
  <p>Body paragraph...</p>
</section>

<section class="mb-4">
  <h2 class="mb-3">Next Section Heading</h2>
  <p>Body paragraph...</p>
</section>
```

The last `section` on a page should omit `mb-4` — there's no following sibling to
create space before.

#### Nested sub-sections (h3-level)

When an `h2` section contains multiple `h3` sub-topics, wrap each in a nested
`<section class="mb-3">`:

```html
<section class="mb-4">
  <h2 class="mb-3">Section Heading</h2>
  <p>Intro paragraph for the section...</p>

  <section class="mb-3">
    <h3 class="mb-2">Sub-topic One</h3>
    <p>Sub-topic content...</p>
  </section>

  <section>
    <h3 class="mb-2">Sub-topic Two (last child — no mb-3)</h3>
    <p>Sub-topic content...</p>
  </section>
</section>
```

The last nested `section`'s `mb-3` should **not** stack with its parent's `mb-4` —
omit `mb-3` on the last nested `section` in a group. Double-check this whenever
sub-sections are added, removed, or reordered.

### Usage with Bootstrap utility classes

Apply `mb-*` only, never `mt-*`. Only add a utility class where it actually changes
the result — skip it if Reboot's default already matches (e.g. `p`, `ul`, `ol` default
to `1rem`/`mb-3`'s value already).

```html
<h1 class="mb-3">Page Title</h1>
<p>Intro paragraph...</p>

<h2 class="mb-3">Section Heading</h2>
<p>Body paragraph...</p>
<ul>
  <li>List item one</li>
  <li>List item two</li>
</ul>

<h3 class="mb-2">Sub-section Heading</h3>
<p>More body copy...</p>
```

### A note on margin collapsing

Adjacent vertical margins between block-level siblings collapse (the browser uses the
larger of the two touching margins, not the sum) whenever two margins actually touch.
Because this scale only ever sets `margin-bottom`, there's no second margin to
collapse against at the sibling boundary — the gap is just that single
`margin-bottom` value. This is the main reason for the top-margin-free approach.

### Margin vs. padding

This scale only uses `margin` utilities (`mb-*`) on content elements — headings,
paragraphs, and lists. `padding` utilities (`p-*`, `px-*`, `py-*`) are reserved for
block-level containers (`<div>`s, `BCard`, and other wrapping components). Text-level
elements should never carry `p-*` classes; wrapping/container elements may use `p-*`
freely, independent of this scale.

## Layouts

- **`src/layouts/default.vue`** — `STopbarNeo`-based shell used by general (non-Solstice)
  guide pages. Provides `#navigation`, `#lead`, `#breadcrumb`, `#content`, `#toc`, and
  `#author` slots. The top nav bar uses `BNav`/`BNavItemDropdown` and sits on the UW
  brand purple, so nav links need a light foreground (`text-white`/`link-light`) for
  contrast.
- **`src/layouts/solstice.vue`** — `SSidebar`-based shell used by all `/solstice/**`
  pages (the Solstice Design System documentation itself).

## Page Templates

`src/pages/_templates/` has starting points for new pages: `_page.vue`, `_section.vue`,
`_guide.vue`, `_component.vue`. Use these rather than starting a page from scratch —
they already wire up the correct layout and slot structure.

## Components

Reusable, non-Solstice components live in `src/components/` (colocated tests in
`src/components/__tests__/`):

- **NavMenu.vue** — Left-hand navigation used within `solstice.vue` pages.
- **NavCollapse.vue** / **NavCollapseSub.vue** — Collapsible nav groupings for `NavMenu`.
- **PageContents.vue** / **PageContentsItem.vue** — Table-of-contents (`#toc` slot) list.
- **CodeBlock.vue** — Syntax-highlighted code sample block (uses `prismjs`).
- **PreviewBlock.vue** — Live component preview wrapper for Solstice component pages.
- **UsageBlock.vue** / **UsageBlockRow.vue** — Do/don't or usage guidance rows.
- **DescriptionBlock.vue** — Linked card/summary block used on index pages.
- **PageCallout.vue** — Inline callout/notice box.
- **VersionBadge.vue** — Displays a package version badge (e.g. `solstice-theme: 1.0.7`).

### Third-Party Component Libraries

- **bootstrap-vue-next** — `BNav`, `BCard`, `BTable`, `BCollapse`, `BButton`, etc.
- **solstice-vue** — UW brand components: `STopbarNeo`, `SSidebar`, `SHeading`,
  `SColorMode`, `SUser`, `SProfile`, `STabsDisplay`/`STabsPanel`/`STabsList`/`STabsItem`.

`bootstrap-vue-next` components are not registered globally — `createBootstrap()` is
currently commented out in `src/main.js`, with only its CSS imported. Each
`bootstrap-vue-next` component must be imported and registered locally where used:

```javascript
import { BNav, BNavItem, BNavItemDropdown } from "bootstrap-vue-next";

export default {
  components: { BNav, BNavItem, BNavItemDropdown },
};
```

Directives (e.g. `v-b-toggle`) are likewise not globally registered — register them
locally, or drive the interaction with plain state/`v-model` on `BCollapse` instead.

### Kitchen Sink Reference (`src/pages/solstice/secret.vue`)

`secret.vue` (route `/solstice/secret`) is a living reference page combining
bootstrap-vue-next and solstice-vue components with the UW brand theme, including
custom utilities from `solstice.scss`. Use it as the go-to example when building new
Solstice documentation pages.

## Grid

Bootstrap 5's 12-column grid with default breakpoints:

- `xs` (≥ 0px), `sm` (≥ 576px), `md` (≥ 768px), `lg` (≥ 992px), `xl` (≥ 1200px), `xxl` (≥ 1400px)

`vue3-mq` (Bootstrap 5 preset) is injected as `mq` for responsive logic in components:

```javascript
inject: ["mq"],
// then access: this.mq.md, this.mq.xlMinus, etc.
```

## Icons

Bootstrap Icons (`bootstrap-icons`) via the `bi` class:

```html
<i class="bi bi-box-fill"></i>
```

See the [Bootstrap Icons docs](https://icons.getbootstrap.com/) for available icons.

## Accessibility

- All interactive elements must have proper ARIA labels.
- Color is not the only means of conveying information.
- Keyboard navigation must be fully supported.
- Nav links on brand-colored surfaces (e.g. the top nav bar in `DefaultLayout`) must
  meet contrast requirements — use `text-white`/`link-light` rather than default link
  colors.
