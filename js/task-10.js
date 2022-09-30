function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input[type='number']");
const createEl = document.querySelector("button[data-create]");
const destroyEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  const arrSizes = [];
  for (let i = 0; i < amount; i++) {
    let size = 20;
    arrSizes.push({ size: (size += 10), color: getRandomHexColor() });
  }

  const markup = arrSizes
    .map(
      ({ size, color }) =>
        `<div style="background-color: ${color}; width:${size}px; height:${size}px; margin-bottom:10px"></div>`
    )
    .join("");

  console.log(markup);
  boxesEl.innerHTML = markup;
}

createEl.addEventListener("click", () => {
  console.log("inputEl.value", inputEl.value);
  createBoxes(parseInt(inputEl.value));
});

destroyEl.addEventListener("click", () => {
  boxesEl.innerHTML = "";
  inputEl.value = "";
});
