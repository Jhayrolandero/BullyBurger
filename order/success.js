const orderIDDisplay = document.querySelector("#orderID");
const orderDateDisplay = document.querySelector("#orderDate");
const subTotalDisplay = document.querySelector("#sub");
const shippingCostDisplay = document.querySelector("#shipping");
const taxDisplay = document.querySelector("#tax");
const totalDisplay = document.querySelector("#total");
const customerDisplay = document.querySelector("#customer");
const deliverModeDisplay = document.querySelector("#mode");
const addressDisplay = document.querySelector("#address");
const phoneDisplay = document.querySelector("#phone");
const paymentDisplay = document.querySelector("#payment");

function renderSummary(
  orderID,
  orderDate,
  subTotal,
  shipping,
  tax,
  total,
  customer,
  address,
  phone,
  deliverMode,
  payment
) {
  // if (JSON.parse(localStorage.getItem("order-summary")) == null) return;
  if (JSON.parse(localStorage.getItem("transaction")) == null) return;

  const customerInfo = JSON.parse(
    localStorage.getItem("transaction")
  ).customerInfo;
  const paymentMethod = JSON.parse(
    localStorage.getItem("transaction")
  ).paymentMethod;
  const orderSum = JSON.parse(localStorage.getItem("transaction")).orderSummary;

  orderID.innerHTML = orderSum.orderID;
  orderDate.innerHTML = orderSum.orderDate;
  subTotal.innerHTML = "₱" + orderSum.cost.toFixed(2);
  shipping.innerHTML = "₱" + orderSum.shippingCost.toFixed(2);
  tax.innerHTML = "₱" + orderSum.tax.toFixed(2);
  total.innerHTML = "₱" + orderSum.total.toFixed(2);
  customer.innerText = customerInfo.name;
  address.innerText = customerInfo.address;
  phone.innerText = customerInfo.phone;
  deliverMode.innerText = orderSum.modeDelivery;

  switch (paymentMethod.payment) {
    case "Credit":
      payment.innerText = "Credit Card";
      break;
    case "Paypal_GCash":
      payment.innerText = "Paypal/GCash";
      break;
    case "Cash":
      payment.innerText = "Cash";
      break;
  }

  // payment.innerText = paymentMethod.payment;
}

renderSummary(
  orderIDDisplay,
  orderDateDisplay,
  subTotalDisplay,
  shippingCostDisplay,
  taxDisplay,
  totalDisplay,
  customerDisplay,
  deliverModeDisplay,
  addressDisplay,
  phoneDisplay,
  paymentDisplay
);
