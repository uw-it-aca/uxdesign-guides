# Placeholder content

Pages that still contain "lorem ipsum" placeholder text and need real content.
They are published, pre-rendered and listed in `sitemap.xml`, so search and
answer engines can index the placeholder text until it is replaced.

Last checked: 2026-10-28. 56 pages, 43 of them with a placeholder lead.

## How to read this list

- **Lead** is the `#lead` slot at the top of the page. Its text becomes the
  page's meta description (see `src/utils/head.js`), which is what search
  results and answer engines show for the page. Pages marked **yes** publish
  a lorem ipsum description; fix these first.
- **No lead section** means the page has no `#lead` slot, so it has no meta
  description at all. Add one along with the content.
- **Count** is the number of "lorem ipsum" passages in the page's template.
  Some are sample text inside component previews (for example the link and
  card examples), which may be fine to keep as demo content.

Remove a row once its page is updated. To re-check the whole site:

```bash
grep -ril "lorem ipsum" src/pages --include=*.vue | grep -vE "_templates|secret"
```

## `/solstice`

| Page              | URL                           | Source                                     | Lead    | Count |
| ----------------- | ----------------------------- | ------------------------------------------ | ------- | ----- |
| Design Principles | `/solstice/design-principles` | `src/pages/solstice/design-principles.vue` | no      | 1     |
| Developer Guide   | `/solstice/developer-guide`   | `src/pages/solstice/developer-guide.vue`   | no      | 1     |
| Getting Started   | `/solstice`                   | `src/pages/solstice/index.vue`             | **yes** | 1     |

## `/solstice/components`

| Page            | URL                                          | Source                                                    | Lead    | Count |
| --------------- | -------------------------------------------- | --------------------------------------------------------- | ------- | ----- |
| Button          | `/solstice/components/actions/button`        | `src/pages/solstice/components/actions/button.vue`        | no      | 1     |
| Link            | `/solstice/components/actions/link`          | `src/pages/solstice/components/actions/link.vue`          | no      | 9     |
| Actions         | `/solstice/components/actions`               | `src/pages/solstice/components/actions/index.vue`         | **yes** | 1     |
| Chart           | `/solstice/components/data/chart`            | `src/pages/solstice/components/data/chart.vue`            | **yes** | 2     |
| Table           | `/solstice/components/data/table`            | `src/pages/solstice/components/data/table.vue`            | **yes** | 2     |
| Data Display    | `/solstice/components/data`                  | `src/pages/solstice/components/data/index.vue`            | **yes** | 1     |
| Accordian       | `/solstice/components/disclosures/accordian` | `src/pages/solstice/components/disclosures/accordian.vue` | **yes** | 7     |
| Collapse        | `/solstice/components/disclosures/collapse`  | `src/pages/solstice/components/disclosures/collapse.vue`  | **yes** | 8     |
| Modal           | `/solstice/components/disclosures/modal`     | `src/pages/solstice/components/disclosures/modal.vue`     | **yes** | 6     |
| Offcanvas       | `/solstice/components/disclosures/offcanvas` | `src/pages/solstice/components/disclosures/offcanvas.vue` | **yes** | 2     |
| Disclosures     | `/solstice/components/disclosures`           | `src/pages/solstice/components/disclosures/index.vue`     | **yes** | 5     |
| Checkbox        | `/solstice/components/forms/checkbox`        | `src/pages/solstice/components/forms/checkbox.vue`        | **yes** | 2     |
| Fieldset        | `/solstice/components/forms/fieldset`        | `src/pages/solstice/components/forms/fieldset.vue`        | **yes** | 2     |
| Radio           | `/solstice/components/forms/radio`           | `src/pages/solstice/components/forms/radio.vue`           | **yes** | 2     |
| Range           | `/solstice/components/forms/range`           | `src/pages/solstice/components/forms/range.vue`           | **yes** | 2     |
| Select          | `/solstice/components/forms/select`          | `src/pages/solstice/components/forms/select.vue`          | **yes** | 2     |
| Submit          | `/solstice/components/forms/submit`          | `src/pages/solstice/components/forms/submit.vue`          | **yes** | 2     |
| Textarea        | `/solstice/components/forms/textarea`        | `src/pages/solstice/components/forms/textarea.vue`        | **yes** | 2     |
| Forms           | `/solstice/components/forms`                 | `src/pages/solstice/components/forms/index.vue`           | **yes** | 3     |
| Sidebar         | `/solstice/components/layouts/sidebar`       | `src/pages/solstice/components/layouts/sidebar.vue`       | no      | 3     |
| Topbar          | `/solstice/components/layouts/topbar`        | `src/pages/solstice/components/layouts/topbar.vue`        | no      | 4     |
| Alert           | `/solstice/components/messaging/alert`       | `src/pages/solstice/components/messaging/alert.vue`       | no      | 1     |
| Badge           | `/solstice/components/messaging/badge`       | `src/pages/solstice/components/messaging/badge.vue`       | **yes** | 6     |
| Banner          | `/solstice/components/messaging/banner`      | `src/pages/solstice/components/messaging/banner.vue`      | **yes** | 4     |
| Messaging       | `/solstice/components/messaging`             | `src/pages/solstice/components/messaging/index.vue`       | **yes** | 1     |
| Menu            | `/solstice/components/navigation/menu`       | `src/pages/solstice/components/navigation/menu.vue`       | **yes** | 2     |
| Tabs            | `/solstice/components/navigation/tabs`       | `src/pages/solstice/components/navigation/tabs.vue`       | **yes** | 5     |
| Navigation      | `/solstice/components/navigation`            | `src/pages/solstice/components/navigation/index.vue`      | **yes** | 1     |
| Filter          | `/solstice/components/search/filter`         | `src/pages/solstice/components/search/filter.vue`         | **yes** | 2     |
| Input           | `/solstice/components/search/input`          | `src/pages/solstice/components/search/input.vue`          | **yes** | 2     |
| Modal           | `/solstice/components/search/modal`          | `src/pages/solstice/components/search/modal.vue`          | **yes** | 2     |
| Search & Filter | `/solstice/components/search`                | `src/pages/solstice/components/search/index.vue`          | **yes** | 1     |
| Card            | `/solstice/components/surfaces/card`         | `src/pages/solstice/components/surfaces/card.vue`         | **yes** | 5     |
| Tile            | `/solstice/components/surfaces/tile`         | `src/pages/solstice/components/surfaces/tile.vue`         | **yes** | 1     |
| Surfaces        | `/solstice/components/surfaces`              | `src/pages/solstice/components/surfaces/index.vue`        | **yes** | 1     |
| Heading         | `/solstice/components/text/heading`          | `src/pages/solstice/components/text/heading.vue`          | no      | 1     |
| Paragraph       | `/solstice/components/text/paragraph`        | `src/pages/solstice/components/text/paragraph.vue`        | **yes** | 4     |
| Text            | `/solstice/components/text`                  | `src/pages/solstice/components/text/index.vue`            | **yes** | 1     |
| Chatbot         | `/solstice/components/utilities/chatbot`     | `src/pages/solstice/components/utilities/chatbot.vue`     | **yes** | 2     |
| Color Mode      | `/solstice/components/utilities/color-mode`  | `src/pages/solstice/components/utilities/color-mode.vue`  | **yes** | 2     |
| Profile         | `/solstice/components/utilities/profile`     | `src/pages/solstice/components/utilities/profile.vue`     | **yes** | 1     |
| User            | `/solstice/components/utilities/user`        | `src/pages/solstice/components/utilities/user.vue`        | **yes** | 1     |
| Utilities       | `/solstice/components/utilities`             | `src/pages/solstice/components/utilities/index.vue`       | **yes** | 1     |

## `/solstice/content`

| Page                | URL                                   | Source                                             | Lead            | Count |
| ------------------- | ------------------------------------- | -------------------------------------------------- | --------------- | ----- |
| Grammar & Mechanics | `/solstice/content/grammar-mechanics` | `src/pages/solstice/content/grammar-mechanics.vue` | **yes**         | 3     |
| Labels              | `/solstice/content/labels`            | `src/pages/solstice/content/labels.vue`            | no lead section | 2     |
| Terminology         | `/solstice/content/terminology`       | `src/pages/solstice/content/terminology.vue`       | no lead section | 2     |
| Writing for Errors  | `/solstice/content/writing-errors`    | `src/pages/solstice/content/writing-errors.vue`    | no lead section | 2     |
| Content             | `/solstice/content`                   | `src/pages/solstice/content/index.vue`             | **yes**         | 1     |

## `/solstice/foundations`

| Page        | URL                            | Source                                      | Lead    | Count |
| ----------- | ------------------------------ | ------------------------------------------- | ------- | ----- |
| Icons       | `/solstice/foundations/icons`  | `src/pages/solstice/foundations/icons.vue`  | **yes** | 2     |
| Layout      | `/solstice/foundations/layout` | `src/pages/solstice/foundations/layout.vue` | **yes** | 2     |
| Foundations | `/solstice/foundations`        | `src/pages/solstice/foundations/index.vue`  | **yes** | 1     |

## `/solstice/sandbox`

| Page | URL                         | Source                                         | Lead            | Count |
| ---- | --------------------------- | ---------------------------------------------- | --------------- | ----- |
| Home | `/solstice/sandbox/sidebar` | `src/pages/solstice/sandbox/sidebar/index.vue` | no lead section | 5     |
| Home | `/solstice/sandbox/topbar`  | `src/pages/solstice/sandbox/topbar/index.vue`  | no lead section | 1     |
