const template = document.createElement("template");
template.innerHTML = `
<style>
.cart-empty {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .cart-empty > svg {
    font-size: 10rem;
    height: 208px;
}

.cart-empty > h4 {
      line-height: 0;
    font-size: 3rem;
    text-align: center;
  }

  .button1 {
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
    font-size: 1.5rem;
  
  }
    
</style>
<div class="cart-empty">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg><h4>Your Cart is currently empty!</h4>
<a href="./order.html">
<button class="button1">Go Back</button>
</a>

</div>
`;

class EmptyCart extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }

  connectedCallback() {}
}

customElements.define("my-cart-empty", EmptyCart);
