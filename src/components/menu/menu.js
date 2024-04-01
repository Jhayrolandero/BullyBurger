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
    justify-content: center;
    align-items: start;
    gap: 0.5rem;
    padding: 0.5em;
    border-radius: 8px;
  }
  
  
  .burger-menu img {
    align-self: center;
    width: 280px;
    aspect-ratio: 16/9;
    object-fit: contain;
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
  }
  .button1 {
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
    <button class="button1">Order Now</button>
</div>

`;

class Menu extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['data-burger-title', 'data-burger-description', 'data-burger-image'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name)

    switch(name) {
      case 'data-burger-title':
        this.shadowRoot.querySelector("h4").textContent = newValue
        break
      case 'data-burger-description':
        this.shadowRoot.querySelector("p").textContent = newValue
        break
      case 'data-burger-image':
        this.shadowRoot.querySelector("img").src = newValue
        break;  
      }
  }

}

customElements.define("my-menu", Menu);
