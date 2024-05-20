function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    return;
  }
  let markup = "";
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i++) {
    const backgroundColor = getRandomHexColor();
    markup += `<div style="width: ${width}px; height: ${height}px; background-color:${backgroundColor};"></div>\n`;
    width += 10;
    height += 10;
  }
  boxesElem.innerHTML = markup;
}
function destroyBoxes() {
  boxesElem.innerHTML = "";
}
function clearInput(input) {
  input.value = "";
}
const inputNumberElem = document.querySelector("input");
const btnCreateElem = document.querySelector("[data-create]");
const btnDestroyElem = document.querySelector("[data-destroy]");
const boxesElem = document.querySelector("#boxes");
btnCreateElem.addEventListener("click", () => {
  createBoxes(inputNumberElem.value);
  clearInput(inputNumberElem);
});

btnDestroyElem.addEventListener("click", () => {
  destroyBoxes();
});
