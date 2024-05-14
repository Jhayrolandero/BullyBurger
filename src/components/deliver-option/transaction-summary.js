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
  <span id="customer"></span>
</div>
<div class="summary-info">
  <p>Delivery Mode</p>
  <span id="mode">Deliver</span>
</div>
<div class="summary-info">
  <p>Customer Address</p>
  <span id="address"></span>
</div>
<div class="summary-info">
  <p>Contact Info</p>
  <span id="phone"></span>
</div>
<div class="summary-info">
  <p>Payment Method</p>
  <span id="payment"></span>
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

  connectedCallback() {
    const customer = this.shadowRoot.querySelector("#customer");
    const deliverMode = this.shadowRoot.querySelector("#mode");
    const payment = this.shadowRoot.querySelector("#payment");
    const subTotal = this.shadowRoot.querySelector("#sub");
    const shippingCost = this.shadowRoot.querySelector("#shipping");
    const tax = this.shadowRoot.querySelector("#tax");
    const total = this.shadowRoot.querySelector("#total");
    const address = this.shadowRoot.querySelector("#address");
    const phone = this.shadowRoot.querySelector("#phone");

    const { customerInfo, paymentMethod, orderSummary } =
      this.renderTransaction();

    customer.innerText = customerInfo.name;
    address.innerText = customerInfo.address;
    payment.innerText = paymentMethod.payment;
    subTotal.innerText = "₱" + orderSummary.cost.toFixed(2);
    shippingCost.innerText = "₱" + orderSummary.shippingCost.toFixed(2);
    tax.innerText = "₱" + orderSummary.tax.toFixed(2);
    total.innerText = "₱" + orderSummary.total.toFixed(2);
    phone.innerText = customerInfo.phone;
    deliverMode.innerText = orderSummary.modeDelivery;
  }

  renderTransaction() {
    const customerInfo = JSON.parse(localStorage.getItem("customer-info"));
    const paymentMethod = JSON.parse(localStorage.getItem("payment-info"));
    const orderSummary = JSON.parse(localStorage.getItem("order-summary"));

    return { customerInfo, paymentMethod, orderSummary };
  }
}

customElements.define("my-transaction-summary", TransactionSummary);
