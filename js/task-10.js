function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input[type='number']");
const createEl = document.querySelector("button[data-create]");
const destroyEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function createBoxesWithDivs(amount) {
  const arrDivs = [];
  let size = 20;

  for (let i = 0; i < amount; i++) {
    size += 10;
    const divEl = document.createElement("div");
    divEl.style.width = size + "px";
    divEl.style.height = size + "px";
    divEl.style.marginBottom = "10px";
    divEl.style.backgroundColor = getRandomHexColor();

    arrDivs.push(divEl);
  }

  boxesEl.append(...arrDivs);
}

createEl.addEventListener("click", () => {
  createBoxesWithDivs(parseInt(inputEl.value));
});

destroyEl.addEventListener("click", () => {
  boxesEl.innerHTML = "";
  inputEl.value = "";
});
