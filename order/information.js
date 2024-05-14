import "../src/components/deliver-option/customer-info.js";
import "../src/components/deliver-option/payment-method.js";

const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");
const container = document.querySelector(".content");
const customerForm = document.createElement("my-customer-form");
const paymentForm = document.createElement("my-payment-form");
const customerFormDisplay = document.querySelector("#cust-form");

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
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

  console.log(currentActive);
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
