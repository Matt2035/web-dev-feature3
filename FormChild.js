// import
import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

// Form element with click ability
export default function Child({ data, onChildClick }) {
  return html`
    <div class="form-container">
      <form action="/action_page.php">
        <div class="container">
          <label for="email"><b>Enter Email:</b></label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />
          <br />
          <label for="psw"><b>Enter Password:</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />
          <br />
          <label for="psw-confrim"><b>Confirm Password:</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw-confirm"
            id="psw-confirm"
            required
          />
          <br />
          <button type="submit" onClick=${onChildClick}>${data}</button>
        </div>
      </form>
    </div>
  `;
}
