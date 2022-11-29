const catalogList = document.querySelectorAll(".item");
console.log("Number of categories:", catalogList.length);

console.log("");

for (const el of catalogList) {
  console.log("Category:", el.firstElementChild.textContent);

  const lastElItem = el.lastElementChild;
  console.log("Elements:", lastElItem.childElementCount);
  console.log("");
}
