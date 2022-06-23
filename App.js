import {
  html,
  render
} from "https://unpkg.com/htm/preact/standalone.module.js";

// Import components
import { Header } from "./Header.js";
import { FormParent } from "./FormParent.js";
import { Updates } from "./Updates.js";

// App function
function App() {
  return html`

  <div class="page-title">
      <h1>Web3 Central</h1>
    </div>

    <!-- Header component-->
    <${Header} title="Most Popular Cryptos">
      There are currently over 19,000 cryptocurrencies in circulation. Each cryptocurrency has its own very unique set of characteristics and attributes. Listed below are some of the most popular cryptos.
    </${Header}>

    <!-- Form component-->
    <${FormParent}>
    </${FormParent}>


    <!-- ETH logo div container-->
    <div class="img-div">
      <img src="/static/images/btclogo.png" alt="BTC logo" width="100" />
      <img src="/static/images/ethlogo.png" alt="ETH logo" width="100" />
      <img src="/static/images/adalogo.png" alt="ADA logo" width="100" />
      <img src="/static/images/ltclogo.png" alt="LTC logo" width="100" />
      <img src="/static/images/ripplelogo.png" alt="Ripple logo" width="100" />
      <img src="/static/images/stellarlogo.png" alt="Stellar logo" width="100" />
      <img src="/static/images/dogelogo.png" alt="Doge logo" width="100" />
      <img src="/static/images/usdclogo.png" alt="USDC logo" width="100" />
      <img src="/static/images/btccashlogo.png" alt="BCH logo" width="100" />
    </div>

    <!-- Updates component-->
    <${Updates}></${Updates}>

    <!-- Footer with contact info, could contain social media/other info later on -->
    <div class="footer">
      <p>
        <b>For additional resources, please contact us at (555)-123-4567.</b>
      </p>
    </div>
  `;
}

// Call app function
render(html` <${App} /> `, document.getElementById("app"));
