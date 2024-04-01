import '../menu/menu.js'
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
    gap: 1rem;
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
        <my-menu></my-menu>
        <my-menu></my-menu>
        <my-menu></my-menu>
        <my-menu></my-menu>
        <my-menu></my-menu>
        <my-menu></my-menu>
        <my-menu></my-menu>
    </div>
</section>
`;

class BurgerSection extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h4').innerText = this.getAttribute('title')
  }
}

customElements.define("my-burger-section", BurgerSection);
