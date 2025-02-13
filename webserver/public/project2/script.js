// const shapeKey = {
//   0: { type: "circle", color: "black" },
//   1: { type: "triangle", color: "black" },
//   2: { type: "square", color: "orange" },
//   3: { type: "circle", color: "orange" },
//   4: { type: "triangle", color: "green" },
//   5: { type: "square", color: "green" },
//   6: { type: "circle", color: "lightblue" },
//   7: { type: "triangle", color: "lightblue" },
//   8: { type: "square", color: "purple" },
//   9: { type: "circle", color: "purple" },
// };

// function updateClock() {
//   const now = new Date();
//   const timeString =
//     now.getHours().toString().padStart(2, "0") +
//     now.getMinutes().toString().padStart(2, "0") +
//     now.getSeconds().toString().padStart(2, "0");

//   const clockContainer = document.getElementById("shapeClock");
//   clockContainer.innerHTML = "";

//   timeString.split("").forEach((digit) => {
//     const shapeData = shapeKey[digit];
//     const shape = document.createElement("div");
//     shape.classList.add("shape", shapeData.type);
//     shape.style.backgroundColor =
//       shapeData.type === "triangle" ? "transparent" : shapeData.color;
//     if (shapeData.type === "triangle") {
//       shape.style.borderBottomColor = shapeData.color;
//     }
//     clockContainer.appendChild(shape);
//   });
// }
// setInterval(updateClock, 1000);
// updateClock();
const shapeKey = {
  0: "circle",
  1: "triangle",
  2: "square",
  3: "circle",
  4: "triangle",
  5: "square",
  6: "circle",
  7: "triangle",
  8: "square",
  9: "circle"
};

const colors = [
  "rgb(237, 27, 118)", "rgb(36, 159, 156)", "rgb(184, 221, 179)", "rgb(61, 133, 198)", "black"
];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function updateClock() {
  const now = new Date();
  const timeString = now.getHours().toString().padStart(2, '0') +
                    now.getMinutes().toString().padStart(2, '0') +
                    now.getSeconds().toString().padStart(2, '0');

  const clockDiv = document.getElementById("clock");
  clockDiv.innerHTML = ""; // Clear previous shapes

  for (let digit of timeString) {
      const shape = document.createElement("div");
      shape.classList.add("shape", shapeKey[digit]); // Assign shape class
      shape.style.backgroundColor = getRandomColor();
      clockDiv.appendChild(shape);
  }
}

function changeColors() {
  const shapes = document.querySelectorAll(".shape"); // Select all shapes
  shapes.forEach(shape => {
      shape.style.backgroundColor = getRandomColor();
  });
}

// document.body.addEventListener("click", changeColors);

// setInterval(updateClock, 1000);
// updateClock();
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", changeColors);
  setInterval(updateClock, 1000);
  updateClock(); // Initialize on page load
});