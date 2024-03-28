const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));

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

// Image Track
const track = document.getElementById("image-track");

const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

const handleOnMove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained =
      parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;

  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      {
        objectPosition: `${100 + nextPercentage}% center`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};

/* -- Had to add extra lines for touch events -- */

window.onmousedown = (e) => handleOnDown(e);

window.ontouchstart = (e) => handleOnDown(e.touches[0]);

window.onmouseup = (e) => handleOnUp(e);

window.ontouchend = (e) => handleOnUp(e.touches[0]);

window.onmousemove = (e) => handleOnMove(e);

window.ontouchmove = (e) => handleOnMove(e.touches[0]);
