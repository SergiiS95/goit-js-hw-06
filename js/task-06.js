const inputEl = document.querySelector("#validation-input");
const lengthValue = Number(inputEl.getAttribute("data-length"));

console.log(inputEl);
console.log(lengthValue);

inputEl.addEventListener("blur", onCheckInput);

function onCheckInput(event) {
  if (event.currentTarget.value.length === lengthValue) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
