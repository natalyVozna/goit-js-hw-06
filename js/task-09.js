function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");

buttonEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
});
