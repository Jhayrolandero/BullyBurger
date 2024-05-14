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
    border-bottom: 1px solid black;
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
    gap: 0.5rem
  }
  
  .item-info {
    display: flex;
    flex-direction: column;
  }
  
  .header {
    display: flex;
    justify-content: space-between;

    
  }
</style>
<div class="cart-order">
<div class="header">
  <h4></h4><button id="deleteOrder">
  
  </button>
</div>
<div class="cart-contents">
  <div class="cart-meta">
    <img
    id="burger-img"
      src=""
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
      "₱" + Number(this.dataset.burgerPrice).toFixed(2);
    this.shadowRoot.querySelector("#quantity").textContent =
      this.dataset.burgerQuantity;
    this.shadowRoot.querySelector("#burger-id").textContent =
      this.dataset.burgerId;
    this.shadowRoot.querySelector("#total").textContent =
      "₱" + Number(this.dataset.burgerTotal).toFixed(2);
    this.shadowRoot.querySelector("#burger-img").src = this.dataset.burgerImg;

    const deleteBTNIcon = this.shadowRoot.createElement("i");
    deleteBTNIcon.classList.add("fa-solid");
    deleteBTNIcon.classList.add("fa-trash-can");

    this.shadowRoot.querySelector("#deleteOrder").appendChild(deleteBTNIcon);
    this.shadowRoot
      .querySelector("#deleteOrder")
      .addEventListener("click", () => {
        console.log(this.dataset.burgerId);
        const orderStorage = JSON.parse(localStorage.getItem("burgers"));
        let newOrderStorage = this.deleteOrder(
          orderStorage,
          this.dataset.burgerId
        );

        // Set new item
        localStorage.removeItem("burgers");
        localStorage.setItem("burgers", JSON.stringify(newOrderStorage));

        // reload
        location.reload();
      });
  }

  deleteOrder(orderStorage, id) {
    return orderStorage.filter((item) => item[0] !== id);
  }
}

customElements.define("my-cart-order", CartOrder);
