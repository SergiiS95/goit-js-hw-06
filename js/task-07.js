const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

text.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener("input", (event) => {
  const fontSize = event.currentTarget.value;
    text.style.fontSize = `${fontSize}px`;
});




