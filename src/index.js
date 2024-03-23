import { Nav } from "./components/nav/nav.js";

var burgerPics = ["./"];

const displayedBurger = document.getElementById("featured-burger");

const displayBurger = (name) => {
  console.log("WOrking here");
  displayedBurger.src = name;

  // displayedBurger.classList.remove("burgerAnimation");
  displayedBurger.classList.add("burgerAnimation");
  // Remove the class after the animation completes (optional)
  setTimeout(() => {
    displayedBurger.classList.remove("burgerAnimation");
  }, 3000); // Adjust timeout to match animation duration};
};

const chooseBurger1 = document.getElementById("burger-1");

chooseBurger1.addEventListener("click", () => {
  displayBurger("./public/images/burgers/burger-1.svg");
});

const chooseBurger2 = document.getElementById("burger-2");
chooseBurger2.addEventListener("click", () => {
  displayBurger("./public/images/burgers/burger-2.svg");
});
const chooseBurger3 = document.getElementById("burger-3");
chooseBurger3.addEventListener("click", () => {
  displayBurger("./public/images/burgers/burger-3.svg");
});
