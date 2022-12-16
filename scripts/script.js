const rotate = document.querySelector(".main-right__page");
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");

add.addEventListener("click", () => {
  rotate.classList.add("rotate180");
});

remove.addEventListener("click", () => {
  rotate.classList.remove("rotate180");
});
