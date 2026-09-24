# Design

The **Solstice** look and feel for `uxdesign-guides` (`solstice-docs`). This is a
concise entry point so an agent or contributor can orient quickly; the
authoritative, detailed rules live in
[`docs/design-system.md`](docs/design-system.md) and should be read before making
any UI change. When this document and `docs/design-system.md` disagree, treat
`docs/design-system.md` as authoritative and update this file to match.

## Overview

`uxdesign-guides` documents the Solstice Design System and UX design guides for a
university design team — a content-centric documentation site, not a marketing
site or a task-centric application.

The Solstice look and feel is restrained, typographic, and brand-led: University of
Washington brand color applied sparingly over a mostly neutral surface, generous
vertical rhythm, flat surfaces by default, and Bootstrap 5 primitives everywhere.
Nothing here is bespoke. Almost every visual decision should resolve to an existing
Bootstrap utility, a `solstice-theme` variant, or a documented pattern in
`docs/design-system.md` — not a new ad hoc class, color, or spacing value.

Design ethos, in the words of the system's own color guidance: use color sparingly
and intentionally, use it to communicate meaning and clarify hierarchy, never rely
on color alone, and always maintain sufficient contrast (WCAG 2.1 AA).

**Stack:** Vue 3 SFCs, file-based routing (`vue-router/vite`), `bootstrap` +
`bootstrap-vue-next` primitives, `solstice-theme` (SCSS) and `solstice-vue` for the
UW brand layer, `vue3-mq` (Bootstrap 5 preset) injected as `mq` for responsive
logic. `solstice-theme/dist/solstice.scss` and `solstice-vue/dist/style.css` are
imported once in `src/main.js`.

## Colors

Two groupings exist for most palettes: **Subdued** (the default for most UI, and
dark-mode aware) and **Prominent** (reserved for moments of visual emphasis such as
layout boilerplate or actionable elements; unaffected by dark mode). Default to
Subdued.

**Brand** — for UW brand expression only. Limited to Spirit Purple and Husky Gold
to keep the design sleek.

| Name                  | Token          | Light     | Dark      |
| --------------------- | -------------- | --------- | --------- |
| Spirit Purple         | `$purple2`     | `#4b2e83` | —         |
| Husky Gold (beige)    | `$beige`       | `#b7a57a` | —         |
| Spirit Purple, subtle | `$purple2-100` | `#dbd5e6` | `#0f091a` |
| Husky Gold, subtle    | `$beige-100`   | `#f1ede4` | `#252118` |

**Semantic — actionable.** `$blue2` `#2f68cb` (`bg-primary`, prominent default) on
`$white`; subdued `$blue-100` `#cfe2ff` / `$blue-800` `#052c65` (dark:
`$blue-900` `#031633` / `$blue-300` `#6ea8fe`). Reserved for buttons, links,
calls-to-action, collapse controls, and tabs.

**Semantic — messaging.** Subdued is the default; prominent variants exist for each.

| Meaning  | Prominent                    | Subdued surface / emphasis                        |
| -------- | ---------------------------- | ------------------------------------------------- |
| Success  | `$green` `#198754` on white  | `$green-100` `#d1e7dd` / `$green-800` `#0a3622`   |
| Critical | `$red2` `#cb444a` on white   | `$red-100` `#f8d7da` / `$red-800` `#58151c`       |
| Warning  | `$yellow` `#ffc107` on black | `$yellow-100` `#fff3cd` / `$yellow-800` `#664d03` |
| Info     | `$cyan` `#0dcaf0` on black   | `$cyan-100` `#cff4fc` / `$cyan-800` `#055160`     |

**Neutrals** — the default for surfaces, shadows, borders, dividers, and type. No
inherent meaning, though they can imply disabled states. Draft/inactive workflow
states use `$gray-600` `#6c757d` / `bg-secondary-subtle` `#e2e3e5`.

**Workflow states** map onto the semantic palette: draft → secondary, ready →
info, suspended → warning/secondary, completed → success, canceled → danger.

**Academic terms** — autumn `#ffc8b7`, winter `#ccddff`, spring `#ccffcc`, summer
`#fcf990`. Black text only, and always paired with the term label.

**Decorative** — for differentiating objects or data series where no semantics are
implied. Use in listed order to maximize distinction: violet `#ac4bb9`, turquoise
`#008099`, burnt `#bd4e05`, olive `#787a00`, rose `#c84674`, lavender `#735696`,
russet `#a06b22`, ultra `#5b6ecd`. Black or white text only, whichever contrasts
better.

Full palette with previews and dark-mode values:
`src/pages/solstice/foundations/color.vue` (`/solstice/foundations/color`).

## Typography

Body copy uses `ff-open-sans`; headings use `ff-encode-sans` — both
`solstice-theme` utilities layered over Bootstrap 5's predefined type scale.

| Element | Class                              | Notes                                             |
| ------- | ---------------------------------- | ------------------------------------------------- |
| h1      | `display-5 fw-bold ff-encode-sans` | Page title, set by `DefaultLayout`'s `#lead` slot |
| h2      | `display-6 ff-encode-sans`         | Top-level section heading                         |
| h3      | `fw-medium ff-encode-sans`         | Sub-section heading                               |
| h4–h6   | `fw-bold`                          |                                                   |
| p       | (default) or `lead`                | `.lead` once per page, on the intro paragraph     |

`.lead` is a Bootstrap utility applied directly to the `<p>` it belongs to — never
wrap a plain `<p>` in a `<div class="lead">`, and never stack multiple `.lead`
paragraphs on one page. Paragraphs are capped at a readable max width (`max-width:
85ch` on `DefaultLayout`'s lead paragraph).

## Layout

**Vertical spacing.** One rule drives everything: **every element sets
`margin-bottom` only — never `margin-top`.** Because nothing carries a top margin,
the gap before any element is simply the previous sibling's `margin-bottom`, with no
collapsing math. Built entirely on Bootstrap's default spacer scale (`0`, `1`
0.25rem, `2` 0.5rem, `3` 1rem, `4` 1.5rem, `5` 3rem) — no custom spacer values.

| Element                     | margin-bottom | Utility needed?                                 |
| --------------------------- | ------------- | ----------------------------------------------- |
| `h1`, `h2`                  | 1rem          | Yes — `mb-3` (Reboot defaults to 0.5rem)        |
| `h3`                        | 0.5rem        | Yes — `mb-2`, explicit for consistency          |
| `p`, `ul`, `ol`             | 1rem          | No — Reboot already sets this; don't add `mb-3` |
| `li`                        | 0.25rem       | Yes — `mb-1`, only if items need breathing room |
| `section` (h2-level)        | 1.5rem        | Yes — `mb-4`                                    |
| `section` (h3-level nested) | 1rem          | Yes — `mb-3`                                    |
| `hr`                        | —             | Yes — `my-5 w-50` (the one exception)           |

`hr` is the sole element that carries a top margin: it sits _between_ two blocks
rather than belonging to the one above it, so it always uses `my-5 w-50`. The last
`section` or nested sub-section in a group omits its margin class — there's no
following sibling to space against. Re-check this whenever sections are added,
removed, or reordered.

`margin` utilities (`mb-*`) apply to content elements — headings, paragraphs,
lists. `padding` utilities (`p-*`, `px-*`, `py-*`) are reserved for block-level
containers (`<div>`, `BCard`, wrapping components) and may be used freely there,
independent of this scale.

**Grid.** Bootstrap 5's 12-column grid with default breakpoints: `xs` ≥ 0, `sm` ≥
576px, `md` ≥ 768px, `lg` ≥ 992px, `xl` ≥ 1200px, `xxl` ≥ 1400px. Components
needing breakpoint-aware behavior in script use `vue3-mq` injected as `mq`
(`this.mq.md`, `this.mq.xlMinus`) rather than CSS-only responsive tricks.

**Shells.** `src/layouts/default.vue` (`STopbarNeo`-based) for general guide pages;
`src/layouts/solstice.vue` (`SSidebar`-based) for all `/solstice/**` pages. Both
provide `#navigation`, `#lead`, `#breadcrumb`, `#content`, `#toc`, and `#author`
slots, and both pin the table of contents with `sticky-top`.

## Elevation

Elevation is used sparingly and only to signal genuine prominence:

- **Flat by default.** Tiles and most content blocks stay on the flat surface of
  the page. A tile may take a background color (e.g. `text-bg-light-beige`) to show
  slight prominence — that is not the same as elevating it.
- **`shadow` is reserved for cards.** `BCard` has a raised profile and carries
  `shadow`, marking it as visually prominent over flat items. Pair an elevated card
  with `border-0` — use a shadow _or_ a border, not both.
- **Brand-tinted/subtle surfaces do not get shadows.** Pair those with `border-0`
  and leave them flat.
- **No custom z-index.** Bootstrap's own stacking layers handle overlays, dropdowns,
  and sticky elements. Don't introduce new z-index values.

## Shapes

- Border radius comes from Bootstrap's `rounded` utilities only — `rounded`,
  `rounded-1`, `rounded-3`, and `rounded-pill` are the variants in use. No custom
  radius values.
- `rounded-pill` is the convention for badges (`badge rounded-pill
bg-*-subtle text-*-emphasis`).
- Brand and decorative colors must not use borders. When an element needs
  definition, rely on the surface color or a shadow instead.
- No custom shapes, clip paths, or bespoke geometry.

## Components

Components must be imported and locally registered where used — **neither
`bootstrap-vue-next` nor `solstice-vue` auto-registers globally.** `createBootstrap()`
is commented out in `src/main.js` with only its CSS imported. Directives (e.g.
`v-b-toggle`) likewise need local registration, or drive the interaction with plain
state/`v-model` on `BCollapse` instead.

```javascript
import { BNav, BNavItem, BNavItemDropdown } from "bootstrap-vue-next";

export default {
  components: { BNav, BNavItem, BNavItemDropdown },
};
```

**Buttons.** Four action treatments, in descending emphasis: `btn-primary`,
`btn-outline-primary`, `btn-subdued-primary`, `btn-quiet-primary` (the latter two
are `solstice-theme` variants). Destructive actions use the matching `danger`
treatments, typically with a `bi-trash3` icon.

**Surfaces.** `Card` — raised, `border-0 shadow`, body padding via `body-class="p-4"`.
`Tile` — flat, `border-variant="0"`, optional tinted background. Pick based on
whether the content genuinely needs prominence.

**Badges & alerts.** Subdued is the default: `badge rounded-pill bg-*-subtle
text-*-emphasis`. Prominent uses `text-bg-*`. Alerts use `alert alert-*` with
`role="alert"`.

**Local components** (`src/components/`, tests colocated in
`src/components/__tests__/`): `NavMenu`, `NavCollapse`/`NavCollapseSub`,
`PageContents`/`PageContentsItem`, `CodeBlock` (prismjs), `PreviewBlock`,
`UsageBlock`/`UsageBlockRow`, `DescriptionBlock`, `PageCallout`, `VersionBadge`.

**solstice-vue:** `STopbarNeo`, `SSidebar`, `SHeading`, `SColorMode`, `SUser`,
`SProfile`, `STabsDisplay`/`STabsPanel`/`STabsList`/`STabsItem`.

**References.** `src/pages/solstice/secret.vue` (`/solstice/secret`) is the living
kitchen-sink page combining both libraries with the brand theme and custom
`solstice.scss` utilities — check it first when building anything new.
`src/pages/_templates/` (`_page.vue`, `_section.vue`, `_guide.vue`,
`_component.vue`) are the starting points for new pages; use them rather than
starting from scratch.

**Icons.** Bootstrap Icons via the `bi` class: `<i class="bi bi-box-fill"></i>`.
See the [Bootstrap Icons library](https://icons.getbootstrap.com/).

## Do's and Don'ts

**Do**

- Start new pages from `src/pages/_templates/`, and check `secret.vue` for
  component usage before inventing a pattern.
- Use Subdued color groups by default; reserve Prominent for real emphasis.
- Set `margin-bottom` only, and omit the margin class on the last section in a group.
- Skip a utility class when Reboot's default already matches (`p`, `ul`, `ol`
  already have `1rem` bottom margin).
- Apply `.lead` directly to the single intro `<p>`.
- Give every interactive element a proper accessible name / ARIA label.
- Pair color with text, icons, sizing, or position so color is never the only signal.
- Use `text-white`/`link-light` for nav links on brand-purple surfaces to meet
  contrast requirements.
- Add or update the colocated spec in `src/components/__tests__/` whenever a
  component changes.
- Run `npm run oxlint` and `npm run oxfmt:check` before considering a change done.

**Don't**

- Don't add `margin-top` to content elements, and don't "fix" `hr`'s `my-5 w-50` to
  match the margin-bottom-only pattern — it's a deliberate exception.
- Don't stack the last nested section's `mb-3` with its parent's `mb-4`.
- Don't put `p-*` padding utilities on text-level elements; padding is for containers.
- Don't wrap a plain `<p>` in `<div class="lead">`, or use more than one `.lead` per page.
- Don't introduce custom colors, spacer values, border radii, or z-index values.
- Don't use brand colors for actionable elements, and don't add borders to brand or
  decorative colors.
- Don't use a second brand color — it reads as semantic meaning that isn't there.
- Don't combine `shadow` with a visible border, and don't elevate tiles or subtle
  surfaces.
- Don't assume `bootstrap-vue-next` components or directives are globally
  registered — that's the source of `Failed to resolve component` errors.
- Don't rely on color alone for meaning, hierarchy, or emphasis.
