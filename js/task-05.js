const refsAn = {
  inputText: document.querySelector("#name-input"),
  outputText: document.querySelector("#name-input"),
};

refsAn.inputText.addEventListener("input", (event) => {
  refsAn.inputText.value === ""
    ? (refsAn.outputText.textContent = "Anonymous")
    : (refsAn.outputText.textContent = event.currentTarget.value);
});
