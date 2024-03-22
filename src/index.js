import { Nav } from "./components/nav/nav.js";

var burgerPics = ["./"];

const displayedBurger = document.getElementById("featured-burger");

const displayBurger = (name) => {
  displayedBurger.src = name;

  // displayedBurger.classList.remove("burgerAnimation");
  displayedBurger.classList.add("burgerAnimation");
  // Remove the class after the animation completes (optional)
  setTimeout(() => {
    displayedBurger.classList.remove("burgerAnimation");
  }, 3000); // Adjust timeout to match animation duration};
};

customElements.define("main-nav", Nav);
