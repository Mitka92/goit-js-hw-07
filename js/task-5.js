function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const BODY = document.querySelector("body");
const btnChangeColorElem = document.querySelector(".change-color");
const spanColorElem = document.querySelector(".color");
btnChangeColorElem.addEventListener("click", () => {
  BODY.style.backgroundColor = getRandomHexColor();
  spanColorElem.textContent = BODY.style.backgroundColor;
});
