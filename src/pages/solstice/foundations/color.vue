<template>
  <Layout :page-title="pageTitle" :author="author">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/foundations"
          >Foundations</BBreadcrumbItem
        >
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      <p class="lead" style="max-width: 80ch">
        When used appropriately, color can help guide users towards successful
        completion of their tasks and workflows. Color use on a page or in an
        interface can communicate and reinforce meaning, create moments of
        visual emphasis, and overall aid can in someone’s understanding of a
        page’s structure and hierarchy. In addition, color is used to
        communicate the UW brand.
      </p>
      <p class="lead" style="max-width: 80ch">
        The Solstice design system includes several palettes of colors, each
        with their specific intended use. The color palettes in the design
        system are: brand accent, neutrals, semantic, and decorative colors.
      </p>
    </template>
    <template #toc>
      <PageContents>
        <PageContentsItem anchor="#principles"
          >Guiding Principles</PageContentsItem
        >
        <PageContentsItem anchor="#palettes">Color Palettes</PageContentsItem>
      </PageContents>
    </template>
    <template #content>
      <h2 id="principles" class="display-6 ff-encode-sans pt-3 pb-3">
        Guiding Principles
      </h2>

      <ol>
        <li class="mb-3">
          <strong>Use color sparingly and intentionally.</strong> Using too much
          color can be counter productive, making visual emphasis harder, and
          can create unnecessary cognitive burden on users.
        </li>
        <li class="mb-3">
          <strong
            >Use color to communicate meaning, to clarify the information
            hierarchy, and for visual emphasis.</strong
          >
          <ul class="mt-3">
            <li class="mb-3">
              <strong>Reinforce meaning</strong> — Whenever possible, leverage
              the defined semantic color palettes to reinforce the meaning of a
              message or an object’s status (e.g. blue indicates an action).
              Doing this minimizes a user’s cognitive load. In general, always
              be consistent in the use of a color – only associate a single
              color with an object or state.
            </li>
            <li class="mb-3">
              <strong>Clarify information hierarchy</strong> – Similarly, subtle
              shifts in color values (darkness/lightness) create depth and
              spatial associations that can communicate distinct zones or layers
              to a user, and therefore clarify an information hierarchy. In this
              design system, this is accomplished using different values of the
              neutrals palette for panels and surfaces.
            </li>
            <li>
              <strong>Visual emphasis</strong> – For semantic colors, there are
              emphasis and subtle color groupings, that can be used to create
              different degrees of visual emphasis in surfaces.
            </li>
          </ul>
        </li>
        <li class="mb-3">
          <strong>Don’t rely on color alone.</strong> Ensure accessibility by
          ensuring color alone isn’t used to communicate meaning, hierarchy, or
          emphasis. Supplement color usage with text, icons, sizing, graphic
          patterned backgrounds (e.g. information visualizations), and
          positioning of elements to communicate these to a user.
        </li>
        <li class="">
          <strong>Maintain sufficient color contrast.</strong> Ensure colors for
          body text has a sufficient contrast ratio to meet accessibility
          guideline WCAG 2.1 AA criteria 1.4.3 (for more information on this
          requirement, see UW’s Accessible Technology
          <BLink
            to="https://www.washington.edu/accesstech/checklist/contrast/"
            target="_blank"
            class="link-primary"
            >color contrast</BLink
          >
          page). The color groupings in the design system have already been
          determined to meet this accessibility criteria.
        </li>
      </ol>

      <h2 id="palettes" class="display-6 ff-encode-sans pt-3 pb-3">
        Color Palettes
      </h2>

      <p class="fw-bold mb-0">Subdued and Prominent Color Groups</p>
      <p>
        For most color palettes, there are two different color groups: Subdued
        and Prominent. By default use the Subdued color group for most UI
        elements in most cases. Subdued colors also respect Dark Mode can change
        to provide more contrast.
      </p>
      <p>
        However, when it is important to create a moment of visual emphasis,
        such as Layout or Actionable elements, the Prominent color group should
        be used. Promint colors do not change and are unaffected by Dark Mode
        settings.
      </p>

      <h3 class="fw-bold">Brand</h3>

      <p>
        Use for communicating the UW brand. While UW has an expanded brand
        accent color palette, we recommend limiting the usage of brand colors to
        Spirit Purple and Husky Gold (beige) to maintain a sleek visual design.
      </p>

      <p><span class="fw-bold">Prominent</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col">Dark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-spirit-purple rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#4b2e83</span>
              <code class="d-inline-block text-muted">$purple2</code>
            </td>
            <td>--</td>
          </tr>

          <tr>
            <td>
              <div
                class="bg-husky-gold rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#b7a57a</span>
              <code class="d-inline-block text-muted">$beige</code>
            </td>
            <td>--</td>
          </tr>
        </tbody>
      </table>

      <p><span class="fw-bold">Subdued</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col">Dark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-spirit-purple-subtle rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#dbd5e6</span>
              <code class="d-inline-block text-muted">$purple2-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#0f091a</span>
              <code class="d-inline-block text-muted">$purple2-900</code>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-husky-gold-subtle rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#f1ede4</span>
              <code class="d-inline-block text-muted">$beige-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#252118</span>
              <code class="d-inline-block text-muted">$beige-900</code>
            </td>
          </tr>
        </tbody>
      </table>

      <p class="fw-bold">Do:</p>
      <ul>
        <li>only use the base color (no variants)</li>
        <li>
          primarily use for
          <BLink to="/patterns/boilerplate/" class="link-primary"
            >boilerplate</BLink
          >
          elements
        </li>
        <li>use sparingly</li>
        <li>
          use a subtle variation for other components outside of the boilerplate
        </li>
      </ul>

      <p class="fw-bold">Do not:</p>
      <ul>
        <li>use for actionable elements</li>
        <li>use borders for these colors</li>
        <li>
          use a second brand color, as this may be misinterpreted as having
          semantic meaning
        </li>
      </ul>

      <hr class="my-5" />

      <h3 class="fw-bold">Neutrals</h3>
      <p>
        Neutral colors are the default colors used for most
        <BLink to="/solstice/components/surfaces" class="link-primary"
          >surfaces</BLink
        >, shadows, and
        <BLink to="/solstice/foundations/typography" class="link-primary"
          >typography</BLink
        >. They don’t typically have a meaning associated with them, though they
        can imply things like disabled states.
      </p>

      <p class="fw-bold">Do:</p>
      <ul>
        <li>use for text, surfaces, borders, and dividers</li>
      </ul>

      <p class="fw-bold">Do not:</p>
      <ul>
        <li>use for actionable elements</li>
        <li>use for boilerplate backgrounds</li>
      </ul>

      <hr class="my-5" />

      <h3 class="fw-bold">Semantic</h3>
      <p>
        Semantic colors are used to denote which are
        <strong>actionable</strong> elements,
        <strong>messaging type</strong> (i.e. informational, warning, critical,
        or success), an object’s <strong>workflow state</strong> (e.g. draft,
        completed, suspended, canceled), and general system status (e.g. which
        elements have been recently updated or created). Therefore, each color
        in the semantic color palette has a distinct meaning but should have
        consistent use in all contexts.
      </p>

      <h4 class="mt-5">Actionable</h4>
      <p>
        Action colors are used to pull focus to and communicate which are
        actionable UI elements. They should be reserved for things like buttons,
        links, calls-to-action, collapse controls, tabs, etc.
      </p>

      <p class="fst-italic">
        Note: Because Bootstrap by default provides action element colors for
        various states – e.g. onclick, onhover, selected – these are not defined
        here.
      </p>

      <p><span class="fw-bold">Prominent</span> (default)</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col">Dark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="bg-primary rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#2f68cb</span>
              <code class="d-inline-block text-muted">$blue2</code>
            </td>
            <td>--</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded border bg-white"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#ffffff</span>
              <code class="d-inline-block text-muted">$white</code>
            </td>
            <td>--</td>
          </tr>
        </tbody>
      </table>

      <p><span class="fw-bold">Subdued</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col">Dark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-primary-subtle rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#cfe2ff</span>
              <code class="d-inline-block text-muted">$blue-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#031633</span>
              <code class="d-inline-block text-muted">$blue-900</code>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #052c65'
                    : 'background-color: #6ea8fe'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#052c65</span>
              <code class="d-inline-block text-muted">$blue-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#6ea8fe</span>
              <code class="d-inline-block text-muted">$blue-300</code>
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        Related components:
        <BLink to="/solstice/components/actions/button" class="link-primary"
          >Button</BLink
        >,
        <BLink to="/solstice/components/actions/link" class="link-primary"
          >Link</BLink
        >
      </p>

      <CodeBlock>
        <template #preview>
          <p>
            <button type="button" class="btn btn-primary me-2">Primary</button>

            <button type="button" class="btn btn-outline-primary me-2">
              Outline
            </button>
            <button type="button" class="btn btn-subdued-primary me-2">
              Subdued
            </button>
            <button class="btn btn-quiet-primary" type="button">Quiet</button>
          </p>
          <div>
            Hello world. This is a <a href="#" class="link-primary">link</a> to
            something.
          </div>
        </template>
      </CodeBlock>

      <h4 class="mt-5">Messaging</h4>
      <p>
        Messaging colors are used to convey the status or outcome of a user
        action or system event. They help users quickly understand what’s
        happening and what they may need to do.
      </p>

      <h5 class="fw-bold mt-5">Success</h5>
      <p>
        Success is used to confirm that an action has been completed
        successfully. Success can also be used to convey confirmation messages
        or statuses that are positive and that do not require any immediate
        action from the user.
      </p>

      <p><span class="fw-bold">Subdued</span> (default)</p>

      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col">Dark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-success-subtle rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#d1e7dd</span>
              <code class="d-inline-block text-muted">$green-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#051b11</span>
              <code class="d-inline-block text-muted">$green-900</code>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #a3cfbb'
                    : 'background-color: #0f5132'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#a3cfbb</span>
              <code class="d-inline-block text-muted">$green-200</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#0f5132</span>
              <code class="d-inline-block text-muted">$green-700</code>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #0a3622'
                    : 'background-color: #75b798'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#0a3622</span>
              <code class="d-inline-block text-muted">$green-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#75b798</span>
              <code class="d-inline-block text-muted">$green-300</code>
            </td>
          </tr>
        </tbody>
      </table>

      <p><span class="fw-bold">Prominent</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col">Dark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="bg-success rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#198754</span>
              <code class="d-inline-block text-muted">$green</code>
            </td>
            <td>--</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded border bg-white"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#ffffff</span>
              <code class="d-inline-block text-muted">$white</code>
            </td>
            <td>--</td>
          </tr>
        </tbody>
      </table>

      <p>
        Related components:
        <BLink to="/solstice/components/messaging/alert" class="link-primary"
          >Alert</BLink
        >,
        <BLink to="/solstice/components/messaging/badge" class="link-primary"
          >Badge</BLink
        >
      </p>
      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-success-subtle text-success-emphasis me-1"
            >Success</span
          >
          <span class="badge rounded-pill text-bg-success">Success</span>

          <div class="alert alert-success small mt-3" role="alert">
            A simple success alert—check it out!
          </div>
        </template>
      </CodeBlock>

      <h5 class="fw-bold mt-5">Crictical</h5>
      <p>
        Critical is used as the color of highest importance which implies that
        an item needs immediate attention, or that an action is impossible,
        blocked, or has resulted in an error.
      </p>

      <p><span class="fw-bold">Subdued</span> (default)</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col">Dark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-danger-subtle rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#f8d7da</span>
              <code class="d-inline-block text-muted">$red-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#2c0b0e</span>
              <code class="d-inline-block text-muted">$red-900</code>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #f1aeb5'
                    : 'background-color: #842029'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#f1aeb5</span>
              <code class="d-inline-block text-muted">$red-200</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#842029</span>
              <code class="d-inline-block text-muted">$red-700</code>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #58151c'
                    : 'background-color: #ea8691'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#58151c</span>
              <code class="d-inline-block text-muted">$red-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#ea868f</span>
              <code class="d-inline-block text-muted">$red-300</code>
            </td>
          </tr>
        </tbody>
      </table>

      <p><span class="fw-bold">Prominent</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col">Dark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="bg-danger rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#cb444a</span>
              <code class="d-inline-block text-muted">$red2</code>
            </td>
            <td>--</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded border bg-white"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#ffffff</span>
              <code class="d-inline-block text-muted">$white</code>
            </td>
            <td>--</td>
          </tr>
        </tbody>
      </table>

      <p>
        Related components:
        <BLink to="/solstice/components/actions/button" class="link-primary"
          >Button</BLink
        >,
        <BLink to="/solstice/components/messaging/alert" class="link-primary"
          >Alert</BLink
        >,
        <BLink to="/solstice/components/messaging/badge" class="link-primary"
          >Badge</BLink
        >
      </p>

      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-danger-subtle text-danger-emphasis me-1"
            >Danger</span
          >
          <span class="badge rounded-pill text-bg-danger">Danger</span>

          <div class="alert alert-danger small mt-3" role="alert">
            A simple danger alert—check it out!
          </div>
          <p>
            <button type="button" class="btn btn-danger me-2">
              <i class="bi bi-trash3"></i> Delete
            </button>
            <button type="button" class="btn btn-danger me-2">
              <i class="bi bi-trash3"></i>
            </button>
            <button type="button" class="btn btn-subdued-danger me-2">
              <i class="bi bi-trash3"></i>
            </button>
            <button
              class="btn btn-link link-danger link-underline link-underline-opacity-0"
              type="button"
            >
              <i class="bi bi-trash3"></i>
            </button>
          </p>
        </template>
      </CodeBlock>

      <h5 class="fw-bold mt-5">Warning</h5>
      <p>
        Warning colors are used to communicate future consequences of an action
        or statuses that are in-progress, pending, or require user intervention,
        but do not prevent a task from being completed.
      </p>

      <p><span class="fw-bold">Subdued</span> (default)</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col">Dark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-warning-subtle rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#fff3cd</span>
              <code class="d-inline-block text-muted">$yellow-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#332701</span>
              <code class="d-inline-block text-muted">$yellow-900</code>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #ffe69c'
                    : 'background-color: #997404'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#ffe69c</span>
              <code class="d-inline-block text-muted">$yellow-200</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#997404</span>
              <code class="d-inline-block text-muted">$yellow-700</code>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #664d03'
                    : 'background-color: #ffda6a'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#664d03</span>
              <code class="d-inline-block text-muted">$yellow-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#ffda6a</span>
              <code class="d-inline-block text-muted">$yellow-300</code>
            </td>
          </tr>
        </tbody>
      </table>
      <p><span class="fw-bold">Prominent</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col">Dark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="bg-warning rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#ffc107</span>
              <code class="d-inline-block text-muted">$yellow</code>
            </td>
            <td>--</td>
          </tr>
          <tr>
            <td>
              <div class="rounded bg-black" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#000000</span>
              <code class="d-inline-block text-muted">$black</code>
            </td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <p>
        Related components:
        <BLink to="/solstice/components/messaging/alert" class="link-primary"
          >Alert</BLink
        >,
        <BLink to="/solstice/components/messaging/badge" class="link-primary"
          >Badge</BLink
        >
      </p>

      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-warning-subtle text-warning-emphasis me-1"
            >Warning</span
          >
          <span class="badge rounded-pill text-bg-warning">Warning</span>

          <div class="alert alert-warning small mt-3" role="alert">
            A simple warning alert—check it out!
          </div>
        </template>
      </CodeBlock>

      <h5 class="fw-bold mt-5">Info</h5>
      <p>
        Info colors are used to highlight non-critical information that help the
        user better understand the current context, or provide benefit, like
        tips or incentives.
      </p>

      <p><span class="fw-bold">Subdued</span> (default)</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col">Dark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-info-subtle rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#cff4fc</span>
              <code class="d-inline-block text-muted">$cyan-100</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#032830</span>
              <code class="d-inline-block text-muted">$cyan-900</code>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #9eeaf9'
                    : 'background-color: #087990'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#9eeaf9</span>
              <code class="d-inline-block text-muted">$cyan-200</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#087990</span>
              <code class="d-inline-block text-muted">$cyan-700</code>
            </td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #055160'
                    : 'background-color: #6edff6'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#055160</span>
              <code class="d-inline-block text-muted">$cyan-800</code>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#6edff6</span>
              <code class="d-inline-block text-muted">$cyan-300</code>
            </td>
          </tr>
        </tbody>
      </table>
      <p><span class="fw-bold">Prominent</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col">Dark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="bg-info rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#0dcaf0</span>
              <code class="d-inline-block text-muted">$cyan</code>
            </td>
            <td>--</td>
          </tr>
          <tr>
            <td>
              <div class="rounded bg-black" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#000000</span>
              <code class="d-inline-block text-muted">$black</code>
            </td>
            <td>--</td>
          </tr>
        </tbody>
      </table>

      <p>
        Related components:
        <BLink to="/solstice/components/messaging/alert" class="link-primary"
          >Alert</BLink
        >,
        <BLink to="/solstice/components/messaging/badge" class="link-primary"
          >Badge</BLink
        >
      </p>

      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-info-subtle text-info-emphasis me-1"
            >Info</span
          >
          <span class="badge rounded-pill text-bg-info">Info</span>

          <div class="alert alert-info small mt-3" role="alert">
            A simple info alert—check it out!
          </div>
        </template>
      </CodeBlock>

      <h4 class="mt-5">Workflow States</h4>
      <p>
        For objects in a workflow, colors may be used to better communicate the
        state of an object (e.g. object colors, or badges attached to objects).
        The following color assignments offer guidance for typical workflow
        states:
      </p>

      <h5 class="fw-bold mt-5">Draft State</h5>
      <p>
        Item that is not in use or ready for review or initial state after
        creating the item.
      </p>
      <p>
        Examples:
        <span class="fst-italic"
          >Draft, In Progress, Not Started, Unscheduled</span
        >
      </p>
      <p><span class="fw-bold">Subdued</span> (default)</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col">Dark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-secondary-subtle rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#e2e3e5</td>
            <td>#161719</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded"
                style="width: 30px; height: 30px"
                :style="
                  colorMode === 'light'
                    ? 'background-color: #2b2f32'
                    : 'background-color: #a7acb1'
                "
              >
                &nbsp;
              </div>
            </td>
            <td>#2b2f32</td>
            <td>#a7acb1</td>
          </tr>
        </tbody>
      </table>
      <p><span class="fw-bold">Prominent</span></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col">Dark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-secondary rounded"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#6c757d</span>
              <code class="d-inline-block text-muted">$gray-600</code>
            </td>
            <td>--</td>
          </tr>
          <tr>
            <td>
              <div
                class="rounded border bg-white"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>
              <span class="d-inline-block" style="width: 75px">#ffffff</span>
              <code class="d-inline-block text-muted">$white</code>
            </td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <p>
        Related components:
        <BLink to="/solstice/components/messaging/badge" class="link-primary"
          >Badge</BLink
        >
      </p>

      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-secondary-subtle text-secondary-emphasis me-1"
            >Draft</span
          >
          <span class="badge rounded-pill text-bg-secondary">Draft</span>
        </template>
      </CodeBlock>

      <h5 class="fw-bold mt-5">Ready State</h5>
      <p>Item(s) created/drafted and awaiting further input or review.</p>

      <p>
        Examples:
        <span class="fst-italic"
          >Approved, Planned, Pending, Open, Final Edits</span
        >
      </p>

      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-info-subtle text-info-emphasis me-1"
            >Approved</span
          >
          <span class="badge rounded-pill text-bg-info">Approved</span>
        </template>
      </CodeBlock>

      <h5 class="fw-bold mt-5">Suspended State</h5>
      <p>Item on hold, not in use but may be used in the future.</p>

      <p>
        Examples:
        <span class="fst-italic">Suspended, Exempt, Inactive, Locked</span>
      </p>

      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-warning-subtle text-warning-emphasis me-1"
            >Inactive</span
          >
          <span class="badge rounded-pill text-bg-warning">Inactive</span>
        </template>
      </CodeBlock>

      <h5 class="fw-bold mt-5">Suspended State</h5>
      <p>Item on hold, not in use but may be used in the future.</p>
      <p>
        Examples:
        <span class="fst-italic">Suspended, Exempt, Inactive, Locked</span>
      </p>

      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-secondary-subtle text-secondary-emphasis me-1"
            >Locked</span
          >
          <span class="badge rounded-pill text-bg-secondary">Locked</span>
        </template>
      </CodeBlock>

      <h5 class="fw-bold mt-5">Completed State</h5>
      <p>Finished item now in use. No further changes expected.</p>
      <p>
        Examples:
        <span class="fst-italic"
          >Offered, Official, Completed, Scheduled, Active, Generated,
          Published</span
        >
      </p>

      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-success-subtle text-success-emphasis me-1"
            >Completed</span
          >
          <span class="badge rounded-pill text-bg-success">Completed</span>
        </template>
      </CodeBlock>

      <h5 class="fw-bold mt-5">Canceled State</h5>
      <p>Blocked or discarded item.</p>
      <p>
        Examples:
        <span class="fst-italic">Canceled, Error, Closed</span>
      </p>

      <CodeBlock>
        <template #preview>
          <span
            class="badge rounded-pill bg-danger-subtle text-danger-emphasis me-1"
            >Closed</span
          >
          <span class="badge rounded-pill text-bg-danger">Closed</span>
        </template>
      </CodeBlock>

      <hr class="my-5" />

      <h3 class="fw-bold">Academic Terms (Quarters)</h3>
      <p>
        Academic terms are differentiated using distinct colors for each term.
        Sub-terms (e.g. Summer A and B terms) should use the color associated
        with the parent term. Note that while there is some proximity to other
        semantic colors, academic term colors should only be used in context,
        and ideally in conjunction with the quarter labels so as to clearly
        indicate their meaning.
      </p>

      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col">Dark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="bg-autumn rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>#ffc8b7</td>
            <td>--</td>
          </tr>
          <tr>
            <td>
              <div class="bg-winter rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>#ccddff</td>
            <td>--</td>
          </tr>
          <tr>
            <td>
              <div class="bg-spring rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>#ccffcc</td>
            <td>--</td>
          </tr>
          <tr>
            <td>
              <div class="bg-summer rounded" style="width: 30px; height: 30px">
                &nbsp;
              </div>
            </td>
            <td>#fcf990</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>

      <p class="fw-bold">Do:</p>
      <ul>
        <li>
          use in conjunction with a quarter/term label whenever space allows
          (see Color General Principles above)
        </li>
        <li>use only black text (#000000) labels</li>
      </ul>

      <p class="fw-bold">Do not:</p>
      <ul>
        <li>
          if no label is present, do not use colors against a gray background as
          they do not provide sufficient contrast to be accessible
        </li>
      </ul>

      <hr class="my-5" />

      <h3 class="fw-bold">Decorative Colors</h3>
      <p>
        When it is not necessary to communicate semantics, decorative colors can
        be used to differentiate objects in an interface – they are primarily
        used for data visualizations or objects like courses, schedule blocks,
        etc.
      </p>

      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">Color</th>
            <th scope="col" style="width: 250px">Light</th>
            <th scope="col">Dark</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                class="bg-deco-violet small rounded p-2 text-white"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#ac4bb9</td>
            <td>--</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-deco-turquoise small rounded p-2 text-white"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#008099</td>
            <td>--</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-deco-burnt small rounded p-2 text-white"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#bd4e05</td>
            <td>--</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-deco-olive small rounded p-2 text-white"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#787a00</td>
            <td>--</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-deco-rose small rounded p-2 text-white"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#c84674</td>
            <td>--</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-deco-lavender small rounded p-2 text-white"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#735696</td>
            <td>--</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-deco-russet small rounded p-2 text-white"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#a06b22</td>
            <td>--</td>
          </tr>
          <tr>
            <td>
              <div
                class="bg-deco-ultra small rounded p-2 text-white"
                style="width: 30px; height: 30px"
              >
                &nbsp;
              </div>
            </td>
            <td>#5b6ecd</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>

      <p class="fw-bold">Do:</p>
      <ul>
        <li>
          use only the base color (no variants), when possible (exception:
          heatmap visualizations)
        </li>
        <li>
          use only black or white text overlaid on a decorative color, depending
          on which provides the most contrast
        </li>
        <li>
          use in the order listed to maximize the visual distinctions between
          objects or data sets
        </li>
      </ul>

      <p class="fw-bold">Do not:</p>
      <ul>
        <li>use borders for decorative colors</li>
      </ul>

      <hr class="my-5" />

      <h3 class="fw-bold">Color Usage in Data Visualizations</h3>
      <p>
        <span class="fw-bold fst-italic">Single Data Series:</span> Use when
        there is a single data series. For example, a bar chart, column chart,
        or a single line chart.
      </p>
      <ul>
        <li>
          Note: To highlight one piece of data from a data set, use a
          combination of one decorative color and one color from the neutral
          palette. Use the decorative color for the data you want to highlight.
        </li>
      </ul>

      <p>
        <span class="fw-bold fst-italic"
          >Multiple (Categorical) Data Sets:</span
        >
        Use multiple decorative colors when you need to differentiate two or
        more unrelated data categories from each other.
      </p>

      <p>
        Ranked or Density Data Sets: These type of data sets use steps within a
        single hue, and color lightness to indicate a range from low to high.
      </p>
    </template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import PageContents from "@/components/PageContents.vue";
  import PageContentsItem from "@/components/PageContentsItem.vue";
  import { BBreadcrumb, BBreadcrumbItem, BLink } from "bootstrap-vue-next";

  export default {
    name: "DocsColor",
    components: {
      Layout,
      CodeBlock,
      PageContents,
      PageContentsItem,
      BBreadcrumb,
      BBreadcrumbItem,
      BLink,
    },
    data() {
      return {
        pageTitle: "Color",
        author: "Charlon Palacay",
        colorMode: "light",
      };
    },
    updated() {
      this.colorMode = document.documentElement.getAttribute("data-bs-theme");
    },
  };
</script>
