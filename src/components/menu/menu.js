const template = document.createElement("template");
template.innerHTML = `
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Luckiest Guy", cursive;
}
.burger-menu {
    background-color: white;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    gap: 0.5rem;
    padding: 0.5em;
    border-radius: 8px;
    height: 100%
  }
  
  
  .burger-menu img {
    align-self: center;
    width: 100%;
    aspect-ratio: 16/9;

  }
  
  
  .burger-menu h4 {
    font-size: 1.5rem;
    font-weight: 400;
  }
  .burger-menu > p {
    width: 100%;
    max-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
    font-size: 0.8rem;
  }
  .orderBTN {
    width: 100%;
    border: none;
    background-color: #D07026;
    color: #FFCF4E;
    font-size: 1rem;
    padding: 0.5em;
    border-radius: 8px;
    cursor: pointer;
  }

</style>
<div class="burger-menu">
    <img src="../public/images/burgers/burger-1.svg" alt="burgar">
    <h4></h4>
    <p></p>
    <button class="orderBTN">Order Now</button>
</div>

`;

class Menu extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return [
      "data-burger-title",
      "data-burger-description",
      "data-burger-image",
      "data-burger-price",
      "data-burger-id",
    ];
  }

  connectedCallback() {
    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      const modal = document.getElementById("modal");
      const overlay = document.getElementById("overlay");
      this.openModal(modal, overlay);
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name);

    const burgerMenu = this.shadowRoot.querySelector(".burger-menu");
    switch (name) {
      case "data-burger-title":
        burgerMenu.setAttribute("data-menu-title", newValue);
        this.shadowRoot.querySelector("h4").textContent = newValue;
        break;
      case "data-burger-description":
        burgerMenu.setAttribute("data-menu-desc", newValue);
        this.shadowRoot.querySelector("p").textContent = newValue;
        break;
      case "data-burger-image":
        burgerMenu.setAttribute("data-menu-img", newValue);
        this.shadowRoot.querySelector("img").src = newValue;
      case "data-burger-price":
        burgerMenu.setAttribute("data-menu-price", newValue);
        break;
      case "data-burger-id":
        burgerMenu.setAttribute("id", newValue);
        burgerMenu.setAttribute("data-menu-id", newValue);
        break;
    }
  }

  openModal(modal, overlay) {
    if (modal == null) return;

    const burgerMenu = this.shadowRoot.querySelector(".burger-menu");

    const burgerMenuID = burgerMenu.dataset.menuId;
    modal.querySelector(".burger-title").textContent =
      this.shadowRoot.querySelector("h4").innerHTML;
    modal.querySelector(".burger-desc").textContent =
      this.shadowRoot.querySelector("p").innerHTML;
    modal.querySelector(".burger-img").src =
      this.shadowRoot.querySelector("img").src;
    modal.querySelector(".order-price").innerHTML =
      this.shadowRoot.querySelector(".burger-menu").dataset.menuPrice;
    modal.setAttribute("data-modal-id", burgerMenuID);

    modal.setAttribute("data-modal-title", burgerMenu.dataset.menuTitle);
    modal.setAttribute("data-modal-price", burgerMenu.dataset.menuPrice);

    modal.classList.add("active");
    modal.classList.add(burgerMenuID);
    overlay.classList.add("active");
  }
}

customElements.define("my-menu", Menu);
