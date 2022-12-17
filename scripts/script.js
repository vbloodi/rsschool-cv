const rotate = document.querySelector(".main-right__page");
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");

add.addEventListener("click", () => {
  rotate.classList.add("rotate180");
});

remove.addEventListener("click", () => {
  rotate.classList.remove("rotate180");
});

const avaImg = document.querySelector(".main-left__img");
const infoCircle = document.querySelector(".info__circle");

avaImg.addEventListener("click", function () {
  avaImg.classList.add("ava-anim");
  infoCircle.classList.add("circle-anim");
  setTimeout(function () {
    avaImg.classList.remove("ava-anim");
    infoCircle.classList.remove("circle-anim");
  }, 1500);
});

avaImg.onclick = function () {
  document.body.classList.toggle("invert-theme");
};

function underDevelopment() {
  alert("Currently under development! ツ");
}
