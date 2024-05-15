import "../src\\global.js";
// Modal Close button

const closeModalBtn = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const orderlistDisplay = document.querySelector(".order-list");

closeModalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest("#modal");
    closeModal(modal);
  });
});

const burgerOrderDisplay = document.querySelector("#burger-order-list");
const addOrder = document.querySelector("#add-order");

// maker for delete order in order list
function factoryRemoveButton(burgerList, _burgers, burger_ID) {
  // Create a new Map to hold the updated burger list
  const newBurgerList = new Map(_burgers);

  // Create a button element for removing the burger item
  const removeButton = document.createElement("button");
  removeButton.classList.add("delete-order");

  // Trash can icon
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa-solid");
  trashIcon.classList.add("fa-trash-can");

  removeButton.appendChild(trashIcon);

  // Add a click event listener to the remove button
  removeButton.addEventListener("click", () => {
    // Remove the burger item from the display
    burgerList.parentNode.removeChild(burgerList);

    // Remove the burger item from the new burger list map
    newBurgerList.delete(burger_ID);
    setLocalOrder(newBurgerList);
  });

  return { removeButton, newBurgerList };
}

// Factory for making order list
function factoryOrderList(
  burgerID,
  burgerQuantity,
  burgerName,
  burgerPrice,
  parentID
) {
  const parent = document.getElementById(parentID);
  const child = document.getElementById(burgerID);

  // Check if the list exist then remove it
  if (child) {
    parent.removeChild(child);
  }

  const burgerList = document.createElement("li");
  // Create a list element

  // set ID
  burgerList.setAttribute("id", burgerID);
  burgerList.classList.add("order-list-item");
  // Create DIV within list
  const burgerDiv = document.createElement("div");
  burgerDiv.classList.add("order-list-div");

  const burgerText = document.createElement("p");
  burgerText.innerHTML = `${burgerQuantity}X `;

  const titleSpan = document.createElement("span");
  titleSpan.innerHTML = burgerName;
  titleSpan.classList.add("order-list-title");

  burgerText.appendChild(titleSpan);
  const burgerPriceSpan = document.createElement("span");
  burgerPriceSpan.innerHTML = `₱${burgerPrice}`;

  burgerDiv.appendChild(burgerText);
  burgerDiv.appendChild(burgerPriceSpan);

  burgerList.appendChild(burgerDiv);

  return burgerList;
}

function burger() {
  let _burgers = new Map();

  return {
    get burgers() {
      return _burgers;
    },

    set burgers(value) {
      // const burgerMap = _burgers
      const burgerName = value.title;
      const burgerPrice = Number(value.totalPrice);
      const burgerOrigPrice = Number(value.price);
      const burgerQuantity = Number(value.quantity);
      const burgerID = value.ID;
      const burgerImg = value.img;
      console.log(value);
      // const burgerID = value.title.replace(/\W/g, "");

      if (_burgers.has(burgerID)) {
        // Get the existing burger details
        const existingBurger = _burgers.get(burgerID);

        // Increment the quantity by 1
        existingBurger.quantity += burgerQuantity;

        // Calculate the new total price by adding the burgerPrice to the existing total price
        existingBurger.price += burgerPrice;

        // Set the new list of burger
        _burgers.set(burgerID, existingBurger);

        const burgerList = factoryOrderList(
          burgerID,
          existingBurger.quantity,
          burgerName,
          existingBurger.totalPrice.toFixed(2),
          "burger-order-list"
        );

        const { removeButton, newBurgerList } = factoryRemoveButton(
          burgerList,
          _burgers,
          burgerID
        );

        // // Update the _burgers map with the newBurgerList returned from factoryRemoveButton
        _burgers = newBurgerList;
        setLocalOrder(_burgers);

        burgerList.appendChild(removeButton);
        burgerOrderDisplay.appendChild(burgerList);
      } else {
        // Set the burger into hashmap
        _burgers.set(burgerID, {
          title: burgerName,
          quantity: burgerQuantity,
          totalPrice: burgerPrice,
          price: burgerOrigPrice,
          img: burgerImg,
        });

        const burgerList = factoryOrderList(
          burgerID,
          burgerQuantity,
          burgerName,
          burgerPrice.toFixed(2),
          "burger-order-list"
        );

        const { removeButton, newBurgerList } = factoryRemoveButton(
          burgerList,
          _burgers,
          burgerID
        );

        _burgers = newBurgerList;

        setLocalOrder(_burgers);
        burgerList.appendChild(removeButton);
        burgerOrderDisplay.appendChild(burgerList);

        removeEmptyCart(orderlistDisplay, "empty-cart");
      }
    },
  };
}
const orderState = new burger();

const quantityDisplay = document.querySelector("#quantityDisplay");
const priceDisplay = document.querySelector(".order-price");

// In modal order
function orderQuantity() {
  let _burgerPrice = 0;
  let _burgerQuantity = 1;
  return {
    get order() {
      return { _burgerPrice, _burgerQuantity };
    },
    // Increment the order quan and price
    increment(price) {
      if (_burgerPrice == 0) {
        _burgerPrice = Number(price);
      }
      _burgerPrice += Number(price);

      _burgerQuantity += 1;
      quantityDisplay.innerHTML = _burgerQuantity;
      priceDisplay.innerHTML = _burgerPrice.toFixed(2);
    },
    // Dec the order quan and price
    decrement(price) {
      if (_burgerQuantity <= 1) {
        return;
      }

      if (_burgerPrice == 0) {
        _burgerPrice = Number(price);
      } else {
        _burgerPrice -= Number(price);
      }

      _burgerQuantity -= 1;
      quantityDisplay.innerHTML = _burgerQuantity;
      priceDisplay.innerHTML = _burgerPrice.toFixed(2);
    },
    // Reset the order state everytime the modal close
    reset() {
      _burgerPrice = 0;
      _burgerQuantity = 1;
      quantityDisplay.innerHTML = _burgerQuantity;
      priceDisplay.innerHTML = _burgerPrice.toFixed(2);
    },
  };
}
const orderQuantityState = new orderQuantity();

function closeModal(modal) {
  if (modal == null) return;

  // reset
  orderQuantityState.reset();
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

overlay.addEventListener("click", () => closeOverlay(overlay));

function closeOverlay(overlay) {
  const modal = document.querySelector("#modal");

  orderQuantityState.reset();
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
const decrementQuantity = document.querySelector("#quantityDecrement");
const incrementQuantity = document.querySelector("#quantityIncrement");

function burgerObj() {
  // Get the data from order modal
  const burgerMenu = document.querySelector("#modal");
  const burgerID = burgerMenu.dataset.modalId;
  const burgerOBJ = document.querySelector(`.${burgerID}`);

  const burgerTitle = burgerOBJ.dataset.modalTitle;
  const burgerPrice = burgerOBJ.dataset.modalPrice;

  return { burgerTitle, burgerPrice };
}

decrementQuantity.addEventListener("click", () => {
  const { burgerTitle, burgerPrice } = burgerObj();
  orderQuantityState.decrement(burgerPrice);
});

incrementQuantity.addEventListener("click", () => {
  const { burgerTitle, burgerPrice } = burgerObj();
  orderQuantityState.increment(burgerPrice);
});

// add to cart
addOrder.addEventListener("click", () => {
  const burgerMenu = document.querySelector("#modal");

  const burgerID = burgerMenu.dataset.modalId;
  const burgerOBJ = document.querySelector(`.${burgerID}`);

  const burgerTitle = burgerOBJ.dataset.modalTitle;
  const burgerPrice = Number(burgerOBJ.dataset.modalPrice);

  const burgerImg = burgerOBJ.dataset.modalImg;
  let { _burgerPrice, _burgerQuantity } = orderQuantityState.order;

  // Initially the order modal state is 0 when ordering 1 only so get the initial price where the price is set
  _burgerPrice = _burgerPrice == 0 ? burgerPrice : _burgerPrice;

  console.log(_burgerPrice, burgerPrice);

  orderState.burgers = {
    ID: burgerID,
    title: burgerTitle,
    price: burgerPrice,
    totalPrice: _burgerPrice,
    quantity: _burgerQuantity,
    img: burgerImg,
  };

  const burgerOrder = orderState.burgers;
  // Save the burger order

  console.log(burgerOrder);
  // convert it into array
  const mapEntriesArray = Array.from(burgerOrder);

  // Save to local storage
  if (JSON.parse(localStorage.getItem("burgers")) != null) {
    localStorage.removeItem("burgers");
  }

  localStorage.setItem("burgers", JSON.stringify(mapEntriesArray));

  closeModal(burgerMenu);
  closeOverlay(burgerMenu);
});

//  Initial rendering
function getLocalStorage() {
  if (
    JSON.parse(localStorage.getItem("burgers")) == null ||
    JSON.parse(localStorage.getItem("burgers")).length <= 0
  ) {
    const emptyDisplay = makeEmptyCart();
    setEmptyCart(orderlistDisplay, emptyDisplay);
    return;
  }

  console.log(localStorage.getItem("burgers"));
  const localOrder = JSON.parse(localStorage.getItem("burgers"));

  localOrder.forEach((element) => {
    orderState.burgers = {
      ID: element[0],
      title: element[1].title,
      price: element[1].price,
      totalPrice: element[1].totalPrice,
      quantity: element[1].quantity,
      img: element[1].img,
    };
  });
}

// set new order storage
function setLocalOrder(burgers) {
  const mapEntriesArray = Array.from(burgers);
  localStorage.removeItem("burgers");
  localStorage.setItem("burgers", JSON.stringify(mapEntriesArray));
  console.log(JSON.parse(localStorage.getItem("burgers")));
  return;
}

function makeEmptyCart() {
  const emptyCartDisplay = document.createElement("div");
  emptyCartDisplay.setAttribute("id", "empty-cart");
  const emptyCartSVG = document.createElement("i");
  emptyCartSVG.classList.add("fa-duotone");
  emptyCartSVG.classList.add("fa-cart-shopping");

  emptyCartDisplay.appendChild(emptyCartSVG);

  return emptyCartDisplay;
  // <i class="fa-duotone fa-cart-shopping"></i>
}

function setEmptyCart(orderList, emptyCart) {
  console.log(orderList);
  orderList.prepend(emptyCart);
}

function removeEmptyCart(orderList, emptyCartID) {
  const emptyCart = document.querySelector(`#${emptyCartID}`);

  if (emptyCart == null) return;
  orderList.removeChild(emptyCart);
}

getLocalStorage(0);
