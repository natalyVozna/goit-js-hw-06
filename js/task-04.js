const counterEl = document.querySelector("#value");
let counterValue = parseInt(counterEl.innerHTML);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", () => {
  counterValue--;
  counterEl.innerHTML = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue++;
  counterEl.innerHTML = counterValue;
});
