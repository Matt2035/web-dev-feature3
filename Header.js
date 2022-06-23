// import statements
import {
  html,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";
import Child from "./Child.js";

export function Header({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return html`
    <header class="header">
      <h1>${title}</h1>
      ${children}
    </header>

    <${Child} />
  `;
}
