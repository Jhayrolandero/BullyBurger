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
    border: 1px solid black;
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
    <img src="../public/images/burgers/burger-1.svg" alt="">
    <h4>Erix's Burger</h4>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus enim repudiandae esse fuga temporibus minus non at ratione excepturi rerum.</p>
    <button class="button1">Order Now</button>
</div>

`;

class Menu extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("my-menu", Menu);
