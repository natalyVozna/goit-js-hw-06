const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const containerLi = [];
ingredients.map((el) => {
  const liEl = document.createElement("li");
  liEl.textContent = el;
  liEl.classList.add("item");
  containerLi.push(liEl);
});

ulEl.append(...containerLi);
