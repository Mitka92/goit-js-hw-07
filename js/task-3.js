const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");
inputElem.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim() !== "") {
    outputElem.textContent = event.currentTarget.value;
  } else {
    outputElem.textContent = "Anonymous";
  }
});
