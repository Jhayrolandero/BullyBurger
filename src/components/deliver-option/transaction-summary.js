// import "../menu/menu.js";
const template = document.createElement("template");
template.innerHTML = `
<style>
.summary-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1.25rem;
    align-items: center;
  }
  
  .summary-info > p {
    text-align: start;
  }
  
  h4 {
    font-size: 2.5rem;
    text-align: center;
  }
  </style>
<h4>Transaction Summary</h4>
<div class="summary-info">
  <p>Customer</p>
  <span id="sub">Deliver</span>
</div>
<div class="summary-info">
  <p>Delivery Mode</p>
  <span id="sub">Deliver</span>
</div>
<div class="summary-info">
  <p>Payment Method</p>
  <span id="sub">Deliver</span>
</div>
<div class="summary-info">
  <p>Subtotal</p>
  <span id="sub">P234</span>
</div>
<div class="summary-info">
  <p>Shipping Cost</p>
  <span id="shipping"></span>
</div>
<div class="summary-info">
  <p>Estimated Sales tax</p>
  <span id="tax"></span>
</div>
<div class="summary-info">
  <p>Estimateed Total</p>
  <span id="total"></span>
</div>
`;

class TransactionSummary extends HTMLElement {
  constructor() {
    super();

    var shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
  }

  connectedCallback() {}
}

customElements.define("my-transaction-summary", TransactionSummary);
