const orderIDDisplay = document.querySelector("#orderID");
const orderDateDisplay = document.querySelector("#orderDate");
const subTotalDisplay = document.querySelector("#sub");
const shippingCostDisplay = document.querySelector("#shipping");
const taxDisplay = document.querySelector("#tax");
const totalDisplay = document.querySelector("#total");

function renderSummary(orderID, orderDate, subTotal, shipping, tax, total) {
  if (JSON.parse(localStorage.getItem("order-summary")) == null) return;

  const orderSum = JSON.parse(localStorage.getItem("order-summary"));

  orderID.innerHTML = orderSum.orderID;
  orderDate.innerHTML = orderSum.orderDate;
  subTotal.innerHTML = "₱" + orderSum.cost.toFixed(2);
  shipping.innerHTML = "₱" + orderSum.shippingCost.toFixed(2);
  tax.innerHTML = "₱" + orderSum.tax.toFixed(2);
  total.innerHTML = "₱" + orderSum.total.toFixed(2);
}

renderSummary(
  orderIDDisplay,
  orderDateDisplay,
  subTotalDisplay,
  shippingCostDisplay,
  taxDisplay,
  totalDisplay
);
