import "../src\\components\\cart\\cart.js";

let cost = 0;
let quantity = 0;
const cartCont = document.querySelector(".cart");
const totalCost = document.querySelector("#total-cost");
const saleTax = document.querySelector("#sales-tax");
const subTotal = document.querySelector("#subtotal");
const shippingTotal = document.querySelector("#shippingCost");

let modeDelivery = "pickup";

const pickUpmode = document
  .querySelector("#pickUP")
  .addEventListener("click", () => {
    modeDelivery = "pickup";
  });

const deliverymode = document
  .querySelector("#deliver")
  .addEventListener("click", () => {
    modeDelivery = "deliver";
  });

function renderCart() {
  const orders = JSON.parse(localStorage.getItem("burgers"));
  console.log(orders);
  orders.forEach((element) => {
    // Create an instance of the custom element
    const cart = document.createElement("my-cart-order");
    cart.setAttribute("data-burger-id", element[0]);
    cart.setAttribute("data-burger-price", element[1].price);
    cart.setAttribute("data-burger-quantity", element[1].quantity);
    cart.setAttribute("data-burger-total", element[1].totalPrice);
    cart.setAttribute("data-burger-name", element[1].title);
    cart.setAttribute("data-burger-img", element[1].img);

    cost += element[1].totalPrice;
    quantity += element[1].quantity;
    cartCont.appendChild(cart);
    console.log(element[1].quantity);
  });
  const tax = computeTax(cost, 0.05);
  const shippingCost = computeShippingCost(quantity);
  const total = computeTotalCost(cost, tax, shippingCost);

  subTotal.innerHTML = "₱" + cost.toFixed(2);
  saleTax.innerHTML = "₱" + tax.toFixed(2);
  shippingTotal.innerHTML = "₱" + shippingCost.toFixed(2);
  totalCost.innerHTML = "₱" + total.toFixed(2);
}

// Formula total burger sale * 0.05
function computeTax(cost, tax) {
  return cost * tax;
}

/*
Formula
total quantity * 5 + (quantity*0.0025) for over items below 5
total quantity * 2.5 + (quantity*0.001) for over items below 5 >= x =< 10
free for over 10
*/
function computeShippingCost(quantity) {
  if (quantity < 5) {
    return quantity * 2 + quantity * 0.0025;
  } else if (quantity >= 5 && quantity <= 10) {
    return quantity * 1.5 + quantity * 0.001;
  } else {
    return 0;
  }
}

function computeTotalCost(cost, tax, shipping) {
  return cost + tax + shipping;
}

renderCart();
