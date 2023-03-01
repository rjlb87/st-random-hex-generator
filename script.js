
function getRandomHexColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateColors() {
  let colorsDiv = document.getElementById("colors");
  colorsDiv.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    let color = getRandomHexColor();
    let colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    colorBox.style.backgroundColor = color;
    colorBox.innerHTML = `<div class="color-label">${color}</div>`;
    colorsDiv.appendChild(colorBox);
  }
}

let generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", generateColors);