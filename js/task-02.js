const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const newListIng = document.querySelector("#ingredients");

const newItems = ingredients.map((ing) => {
  const createItem = document.createElement("li");
  createItem.classList.add("item");
  createItem.textContent = ing;
  return createItem;
});

newListIng.append(...newItems);

console.log(newItems);
