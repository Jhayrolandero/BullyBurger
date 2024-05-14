// import "../menu/menu.js";
const template = document.createElement("template");
template.innerHTML = `
<style>

.checkout-btn {
    width: 100%;
  }

  .checkout-btn {
    width: auto;
    border: none;
    background-color: #d07026;
    color: #ffcf4e;
    font-size: 1rem;
    padding: 0.5em;
    border-radius: 8px;
    cursor: pointer;
    min-width: 5rem;
    font-weight: bold;
  }

  a {
    width: 100%
  }
  
  
</style>
<a href="./information.html"
><button class="checkout-btn">Checkout</button></a
>
`;

class CheckoutBTN extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }

  connectedCallback() {}
}

customElements.define("my-checkout-btn", CheckoutBTN);
