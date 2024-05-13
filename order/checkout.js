import "../src\\components\\cart\\cart.js";

const cartCont = document.querySelector(".cart");

function renderCart() {
  const orders = JSON.parse(localStorage.getItem("burgers"));

  orders.forEach((element) => {
    // Create an instance of the custom element
    const cart = document.createElement("my-cart-order");
    cart.setAttribute("data-burger-id", element[0]);
    cart.setAttribute("data-burger-price", element[1].price);
    cart.setAttribute("data-burger-quantity", element[1].quantity);
    cart.setAttribute("data-burger-total", element[1].price);
    cart.setAttribute("data-burger-name", element[1].title);

    cartCont.appendChild(cart);
  });
}

renderCart();
