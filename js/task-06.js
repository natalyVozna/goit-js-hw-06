const inputEl = document.querySelector("#validation-input");
console.log("oo", inputEl.dataset.length);

// inputEl.addEventListener();

inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === parseInt(inputEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else if (event.currentTarget.value.length === 0) {
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
