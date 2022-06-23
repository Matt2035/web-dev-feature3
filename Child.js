import {
  html,
  useState,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";

// import child component
import { getCryptos } from "./cryptos.js";

export default function Child() {
  const [cryptos, setCryptos] = useState([]);

  // use effect to get json data
  useEffect(() => {
    console.log("render");
    getCryptos().then((data) => {
      setCryptos(data);
    });
  }, []);

  // return html elements with data
  return html`
    <div class="cryptos">
      <ul class="crypto-list">
        ${cryptos.map(
          (crypto) =>
            html` <li key="${crypto}" class="test">
              ${crypto.ticker} | ${crypto.name} founded in -
              ${crypto.date_founded}-
            </li>`
        )}
      </ul>
    </div>
  `;
}
