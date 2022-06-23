// import statements
import {
  useState,
  html
} from "https://unpkg.com/htm/preact/standalone.module.js";

// single component to allow user to say how many cryptos they want updates on

// they can have the ability to choose which ones later on when forms can be submitted and processed
export function Updates() {
  const [age, getFeed] = useState([0]);

  // add function
  const add = () => {
    getFeed(Number(age) + 1);
  };

  // subtract function
  const subtract = () => {
    getFeed(Number(age) - 1);
  };

  return html`
    <div class="updates">
      <h2>How many cryptos would you like to receive updates for?</h2>
      <button onClick="${subtract}">Less</button>
      <button onClick="${add}">More</button>
      <p>${age}</p>
    </div>
  `;
}
