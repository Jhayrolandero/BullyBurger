import "../src/components/deliver-option/customer-info.js";
import "../src/components/deliver-option/payment-method.js";
import "../src/components/deliver-option/transaction-summary.js";
import "../src/components/proceed/proceed.js";

const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");
const container = document.querySelector(".content");
const customerForm = document.createElement("my-customer-form");
const paymentForm = document.createElement("my-payment-form");
const transactionSum = document.createElement("my-transaction-summary");

const proceedBtnDisplay = document.querySelector("#proceed");

proceedBtnDisplay.addEventListener("click", () => {
  const customerInfo = JSON.parse(localStorage.getItem("customer-info"));
  const paymentMethod = JSON.parse(localStorage.getItem("payment-info"));
  const orderSummary = JSON.parse(localStorage.getItem("order-summary"));

  const copyTransac = { customerInfo, paymentMethod, orderSummary };

  document.location = "./success.html";

  localStorage.setItem("transaction", JSON.stringify(copyTransac));
  localStorage.removeItem("customer-info");
  localStorage.removeItem("payment-info");
  localStorage.removeItem("order-summary");
  localStorage.removeItem("burgers");
});
let isCustomerFormComplete = false;
let isPaymentFormComplete = false;
let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
    next.disabled = true;
    next.classList.remove("hide");
  } else if (currentActive === circles.length) {
    document.querySelector("#proceed").classList.add("ok");
    next.classList.add("hide");
  } else {
    document.querySelector("#proceed").classList.remove("ok");
    next.classList.remove("hide");
    prev.disabled = false;
    next.disabled = false;
  }

  if (currentActive === 1 && isCustomerFormComplete) {
    next.disabled = true;
  }

  switch (currentActive) {
    case 1:
      removeElement(container);
      renderForm(container, customerForm);
      break;
    case 2:
      removeElement(container);
      renderPayment(container, paymentForm);
      break;
    case 3:
      removeElement(container);
      renderPayment(container, transactionSum);
      break;
  }
}

function renderForm(container, form) {
  //   form.setAttribute("id", "cust-form");
  container.appendChild(form);
}
function renderPayment(container, form) {
  container.appendChild(form);
}

function renderTransaction(container, form) {
  container.appendChild(form);
}

function removeElement(container) {
  container.innerHTML = "";
}

update();

const radios = document.querySelectorAll('input[name="expandable"]');
const panels = document.querySelectorAll(".panel");

radios.forEach((radio) => {
  radio.addEventListener("change", function () {
    panels.forEach((panel) => {
      panel.classList.remove("show");
    });
    const selectedPanel = document.getElementById(this.value);
    if (selectedPanel) {
      selectedPanel.classList.add("show");
    }
  });
});

document.addEventListener("formCompleted", () => {
  console.log("Complete");
  isCustomerFormComplete = true;

  if (currentActive === 1 && isCustomerFormComplete) {
    next.disabled = false;
  }
});

document.addEventListener("notCompleteForm", () => {
  console.log("Not");
  isCustomerFormComplete = false;
  if (currentActive === 1 && !isCustomerFormComplete) {
    next.disabled = true;
  }
});

document.addEventListener("paymentCompleted", () => {
  console.log("Complete");
  isPaymentFormComplete = true;

  if (currentActive === 2 && isPaymentFormComplete) {
    next.disabled = false;
  }
});

document.addEventListener("notCompletePayment", () => {
  console.log("Not");
  isPaymentFormComplete = false;
  if (currentActive === 2 && !isPaymentFormComplete) {
    next.disabled = true;
  }
});

function checkCart() {
  console.log(JSON.parse(localStorage.getItem("burgers")));
  if (
    JSON.parse(localStorage.getItem("burgers")) == null ||
    JSON.parse(localStorage.getItem("burgers").length <= 0)
  ) {
    alert("Order First");
    document.location = "./order.html";
  }
}

checkCart();
