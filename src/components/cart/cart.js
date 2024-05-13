// import "../menu/menu.js";
const template = document.createElement("template");
template.innerHTML = `
<style>
h4 {
    margin: 0
}
.cart-order {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid white;
    padding: 0.5rem;
  }
  
  .cart-contents {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .cart-meta {
    display: flex;
    flex-direction: row;
  }
  
  .item-info {
    display: flex;
    flex-direction: column;
  }
  
</style>
<div class="cart-order">
<h4></h4>
<div class="cart-contents">
  <div class="cart-meta">
    <img
      src="../public/images/burgers/burger-1.svg"
      alt=""
      width="80"
      height="80"
    />
    <div class="item-info">
      Burger ID: <span id="burger-id"></span>
    </div>
  </div>
  <div class="item-info">Each<span id="price"></span></div>
  <div class="item-info">Quantity<span id="quantity"></span></div>
  <div class="item-info">Total<span id="total"></span></div>
</div>
</div>
`;

class CartOrder extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector("h4").textContent = this.dataset.burgerName;
    this.shadowRoot.querySelector("#price").textContent =
      "₱" + this.dataset.burgerPrice;
    this.shadowRoot.querySelector("#quantity").textContent =
      this.dataset.burgerQuantity;
    this.shadowRoot.querySelector("#burger-id").textContent =
      this.dataset.burgerId;
    this.shadowRoot.querySelector("#total").textContent =
      "₱" + this.dataset.burgerTotal;
  }

  //   static get observedAttributes() {
  //     return [
  //       "data-special-burgers",
  //       "data-steak-burgers",
  //       "data-mini-burgers",
  //       "data-stacked-burgers",
  //       "data-smashes-burgers",
  //       "data-desserts",
  //       "data-sides",
  //       "data-drinks",
  //       "data-fries",
  //     ];
  //   }

  //   attributeChangedCallback(name, oldValue, newValue) {
  //     // if (name === 'data-special-burgers') {
  //     this.renderBurgers(newValue);
  //     // }
  //   }

  //   // get the burger data then render it
  //   renderBurgers(burgersString) {
  //     let burgers = JSON.parse(burgersString);
  //     // let burgerArray = burgersString.split(",")
  //     // console.log(burgerArray[0])

  //     const burgerMenuContainer = this.shadowRoot.querySelector(".burger-menu");

  //     burgers.forEach((burger) => {
  //       const menuItem = document.createElement("my-menu");
  //       menuItem.setAttribute("data-burger-title", burger.title);
  //       menuItem.setAttribute("data-burger-description", burger.desc);
  //       menuItem.setAttribute("data-burger-image", burger.image);
  //       menuItem.setAttribute("data-burger-price", burger.price);
  //       menuItem.setAttribute("data-burger-id", burger.id);
  //       burgerMenuContainer.appendChild(menuItem);
  //     });
  //   }
}

customElements.define("my-cart-order", CartOrder);
