const Game = document.querySelector(".Game");
Game.style.height = "100vh";
Game.style.width = "100vw";

// Image object
const images = {
  mushroom: "",
  mushroomBad: "",
  game: "",
  nintendo: "",
};

// Loop for create and append img elements
for (let key in images) {
  // Div for img elements
  const containerImg = document.createElement("div");
  containerImg.classList.add("img");
  // Images
  const image = document.createElement("img");
  image.src = `/Images/${key}.png`;
  image.classList.add("element");
  image.style.height = "5rem";
  image.style.width = "5rem";

  //Append
  containerImg.append(image);
  Game.append(containerImg);
}

// Select and style Mario element

const Mario = document.querySelector("#Mario");
Mario.style.position = "absolute";

// Handle Mario's movement with arrow keys

let positionX = 0;
let positionY = 0;

window.addEventListener("keydown", (e) => {
  const move = 10;

  if (e.key === "ArrowUp") {
    positionY = Math.max(0, positionY - move);
  }

  if (e.key === "ArrowRight") {
    positionX = Math.min((positionX += move), 1200);
  }

  if (e.key === "ArrowDown") {
    positionY = Math.min((positionY += move), 500);
  }

  if (e.key === "ArrowLeft") {
    positionX = Math.max(0, positionX - move);
  }

  Mario.style.top = `${positionY}px`;
  Mario.style.left = `${positionX}px`;
});

// Drag Mario with mouse interaction
let positionStartX = 0;
let positionStartY = 0;

// Start tracking mouse position on click
Game.addEventListener("mousedown", (e) => {
  positionStartX = e.clientX;
  positionStartY = e.clientY;

  Game.addEventListener("mousemove", mouseMove);
  Game.addEventListener("mouseup", mouseUp);
});

function mouseMove(e) {
  positionX = positionStartX - e.clientX;
  positionY = positionStartY - e.clientY;

  positionStartX = e.clientX;
  positionStartY = e.clientY;

  Mario.style.top = `${Mario.offsetTop - positionY}px`;
  Mario.style.left = `${Mario.offsetLeft - positionX}px`;
}

function mouseUp(e) {
  Game.removeEventListener("mousemove", mouseMove);
}
