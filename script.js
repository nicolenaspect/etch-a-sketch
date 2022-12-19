// const jsColor = document.querySelector(".colorpicker");
// let defaultColor = jsColor;
let grid = document.querySelector(".gridHolder");
let gridElements = document.querySelector(".grid-element");
let btn = document.getElementsByClassName("settingsbutton");

gameInit();

function randomRGB() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return (RGBColor = "rgb(" + x + "," + y + "," + z + ")");
}

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    grid.appendChild(gridElement);
  }
}

function makeGrids() {
  let output = document.getElementById("myRange").value;
  if (output == 0) {
    deleteGrids(".grid-element", document.body);
    setupGrid(16);
    displayGridSize("16x16");
  } else if (output == 50) {
    deleteGrids(".grid-element", document.body);
    setupGrid(32);
    displayGridSize("32x32");
  } else if (output == 100) {
    deleteGrids(".grid-element", document.body);
    setupGrid(64);
    displayGridSize("64x64");
  }
}

function displayGridSize(input) {
  document.getElementById("p").innerText = input;
}

function deleteGrids(selector, parentNode) {
  let elements = parentNode.querySelectorAll(selector);
  let fragment = document.createDocumentFragment();
  fragment.textContent = " ";
  fragment.firstChild.replaceWith(...elements);
}

function mouseOverColorful() {
  grid.addEventListener("mouseover", (event) => {
    return (event.target.style.background = randomRGB());
  });
}

function mouseOverBlack() {
  grid.addEventListener("mouseover", (event) => {
    return (event.target.style.background = "black");
  });
}

function gameInit() {
  makeGrids(16);
  mouseOverBlack();
}

btn[2].addEventListener("click", () => {
  grid.innerHTML = "";
  grid.style.background = "white";
  makeGrids();
});

btn[0].addEventListener("click", (event) => {
  mouseOverBlack();
});

btn[1].addEventListener("click", (event) => {
  mouseOverColorful();
});
