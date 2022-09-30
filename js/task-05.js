const inputNameEl = document.querySelector("input#name-input");
const outputEl = document.querySelector("#name-output");
outputEl.textContent = "Anonymous";

inputNameEl.addEventListener("input", (event) => {
  outputEl.textContent =
    event.currentTarget.value.length > 0
      ? event.currentTarget.value
      : "Anonymous";
});
