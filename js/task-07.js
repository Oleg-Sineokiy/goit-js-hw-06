const rangeInput = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

rangeInput.addEventListener("input", (event) => {
   textSize.getElementsByClassName.fontSize = `${event.currentTarget.value}px`;
});
