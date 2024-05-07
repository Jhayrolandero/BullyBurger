import "../menu/menu.js";
const template = document.createElement("template");
template.innerHTML = `
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Luckiest Guy", cursive;
}

.burger-section {
    background-color: white;
    padding: 1em;
    border-radius: 16px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.burger-section h4 {
    font-size: 2rem;
    font-weight: 400;
}
  
.burger-menu {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    display: grid;
    gap: 0.5rem;
}
  
</style>
<section class="burger-section">
    <h4>Special Burger</h4>
    <div class="burger-menu">
    </div>
</section>
`;

class BurgerSection extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector("h4").textContent =
      this.getAttribute("title");
  }

  static get observedAttributes() {
    return [
      "data-special-burgers",
      "data-steak-burgers",
      "data-mini-burgers",
      "data-stacked-burgers",
      "data-smashes-burgers",
      "data-desserts",
      "data-sides",
      "data-drinks",
      "data-fries",
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // if (name === 'data-special-burgers') {
    this.renderBurgers(newValue);
    // }
  }

  // get the burger data then render it
  renderBurgers(burgersString) {
    let burgers = JSON.parse(burgersString);
    // let burgerArray = burgersString.split(",")
    // console.log(burgerArray[0])

    const burgerMenuContainer = this.shadowRoot.querySelector(".burger-menu");

    burgers.forEach((burger) => {
      const menuItem = document.createElement("my-menu");
      menuItem.setAttribute("data-burger-title", burger.title);
      menuItem.setAttribute("data-burger-description", burger.desc);
      menuItem.setAttribute("data-burger-image", burger.image);
      burgerMenuContainer.appendChild(menuItem);
    });
  }
}

customElements.define("my-burger-section", BurgerSection);
