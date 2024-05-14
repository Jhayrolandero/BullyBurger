// import "../menu/menu.js";
const template = document.createElement("template");
template.innerHTML = `
<style>

:root {
    --line-border-fill: #d07026;
    --line-border-empty: #e0e0e0;
    --progress-zIndex: -1;
  }
  
.btn {
    background-color: var(--line-border-fill);
    border: 0;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    margin: 5px;
    padding: 8px 30px;
  }
  
  .btn:active {
    transform: scale(0.98);
  }
  
  .btn:focus {
    outline: 0;
  }
  
  .btn:disabled {
    background-color: var(--line-border-empty);
    cursor: not-allowed;
  }
  
</style>
<a href="./success.html">
<button class="btn" id="next">Proceed</button>
</a>

`;

class ProceedBtn extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }

  connectedCallback() {}
}

customElements.define("my-proceed-btn", ProceedBtn);
