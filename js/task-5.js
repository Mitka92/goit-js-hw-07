function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyElem = document.querySelector("body");
const btnChangeColorElem = document.querySelector(".change-color");
const spanColorElem = document.querySelector(".color");
btnChangeColorElem.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  bodyElem.style.backgroundColor = randomColor;
  spanColorElem.textContent = randomColor;
});
