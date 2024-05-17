const ulCategoriesElem = document.querySelector("#categories");
const allCategoriesElem = ulCategoriesElem.querySelectorAll(".item");
console.log(`Number of categories: ${allCategoriesElem.length}`);
const allTitleElem = ulCategoriesElem.querySelectorAll("h2");
allTitleElem.forEach((elem, i) => {
  console.log(`Category: ${elem.textContent}`);
  console.log(
    `Elements: ${allCategoriesElem[i].querySelectorAll("li").length}`
  );
});
