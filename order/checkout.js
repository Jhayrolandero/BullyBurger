import "../src\\components\\cart\\cart.js";

let cost = 0;
let quantity = 0;
let tax = 0;
let shippingCost = 0;
let total = 0;
const cartCont = document.querySelector(".cart");
const totalCost = document.querySelector("#total-cost");
const saleTax = document.querySelector("#sales-tax");
const subTotal = document.querySelector("#subtotal");
const shippingTotal = document.querySelector("#shippingCost");

let modeDelivery = "pickup";

const pickUpmode = document
  .querySelector("#pick")
  .addEventListener("click", () => {
    modeDelivery = "pickup";

    console.log(modeDelivery);
  });

const deliverymode = document
  .querySelector("#deliver")
  .addEventListener("click", () => {
    modeDelivery = "deliver";
    console.log(modeDelivery);
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
  tax = computeTax(cost, 0.05);
  shippingCost = computeShippingCost(quantity);
  total = computeTotalCost(cost, tax, shippingCost);

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
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");

const checkoutBTN = document
  .querySelector(".checkout-btn")
  .addEventListener("click", () => {
    openModal(modal, overlay);
  });
renderCart();

document.querySelector(".close-btn").addEventListener("click", () => {
  closeModal(modal, overlay);
});

overlay.addEventListener("click", () => {
  closeModal(modal, overlay);
});

document.querySelector("#confirm-btn-no").addEventListener("click", () => {
  closeModal(modal, overlay);
});

document.querySelector("#confirm-btn-yes").addEventListener("click", () => {
  closeModal(modal, overlay);

  const randomID = generateRandomID(8);

  const date = formattedDate();
  const orderJSON = {
    cost,
    tax,
    shippingCost,
    total,
    orderID: randomID,
    orderDate: date,
  };

  if (JSON.parse(localStorage.getItem("order-summary")) != null) {
    localStorage.removeItem("order-summary");
  }

  localStorage.setItem("order-summary", JSON.stringify(orderJSON));
  localStorage.removeItem("burgers");
  // console.log(JSON.parse(localStorage.getItem("order-summary")));
});

function closeModal(modal, overlay) {
  if (modal == null || overlay == null) return;

  modal.classList.remove("active");
  overlay.classList.remove("active");
}

function openModal(modal, overlay) {
  if (modal == null || overlay == null) return;

  modal.classList.add("active");
  overlay.classList.add("active");
}

function generateRandomID(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function formattedDate() {
  // Create a new Date object representing the current date and time
  const currentDate = new Date();

  // Get the current year
  const year = currentDate.getFullYear(); // e.g., 2023

  // Get the current month (0-based index, where 0 = January, 1 = February, ..., 11 = December)
  const month = currentDate.getMonth(); // e.g., 4 (represents May, because months are zero-based)

  // Get the current day of the month (1-31)
  const day = currentDate.getDate(); // e.g., 1 (represents the 1st day of the month)

  // Format the date as "MM/DD/YYYY"
  const formattedDate = `${month + 1}/${day}/${year}`;

  return formattedDate;
}
