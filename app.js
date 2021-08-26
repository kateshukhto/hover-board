const board = document.querySelector("#board");
const colors = [
  "#ff355e",
  "#fd5b78",
  "#ff6037",
  "#ff9966",
  "#ff9933",
  "#ffcc33",
  "#ffff66",
  "	#ccff00",
  "#66ff66",
  "	#aaf0d1",
  "#50bfe6",
  "	#ff6eff",
  "#ee34d2",
  "	#ff00cc",
];
const SQUARE_NUMBER = 3000;

for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(elem) {
  const color = getRandomColor();
  elem.style.backgroundColor = color;
  elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elem) {
  elem.style.backgroundColor = "#74828F";
  elem.style.boxShadow = "0 0 2px #1d1d1d";
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
