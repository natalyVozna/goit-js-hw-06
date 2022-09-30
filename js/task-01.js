let numberCategories = document.querySelectorAll(".item");
console.log(`Number of categories:`, numberCategories.length);
const title = numberCategories.forEach((el) => {
  console.log("Category:", el.querySelector("h2").textContent);
  console.log("Elements:", el.querySelectorAll("li").length);
});
