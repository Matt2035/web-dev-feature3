// import statements
import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import FormChild from "./FormChild.js";

export function FormParent() {
  // function for click alert
  function clickAlert() {
    alert("Thank you for registering!");
  }

  // html return with click ability
  return html`
    <div class="App">
      <${FormChild} data="Register" onChildClick="${clickAlert}" />
    </div>
  `;
}
