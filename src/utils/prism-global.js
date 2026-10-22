// Prism's language components and plugins are plain scripts that reference a
// global `Prism`. The core is CommonJS, which Rolldown wraps in a lazy
// initializer, so in production builds the components could run before the
// core and throw "ReferenceError: Prism is not defined". Initializing the core
// and exposing it globally in its own module guarantees, via ESM evaluation
// order, that it runs before anything imported after this module.
import Prism from "prismjs";

globalThis.Prism = Prism;

export default Prism;
