const refs = {
  valueNumber: document.querySelector("#value"),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="decrement"]'),
  counterValue: 0,
};

const removeNum = () => {
  refs.counterValue -= 1;
  return (refs.valueNumber.textContent = refs.counterValue);
};

const addNum = () => {
  refs.counterValue += 1;
  return (refs.valueNumber.textContent = refs.counterValue);
};

refs.decrementBtn.addEvenListener("click", removeNum);
refs.incrementBtn.addEvenListener("click", addNum);
