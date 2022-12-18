const rotate = document.querySelector(".main-right__page");
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");

add.addEventListener("click", () => {
  rotate.classList.add("rotate180");
});

remove.addEventListener("click", () => {
  rotate.classList.remove("rotate180");
});

let isActive = false;
const avaImg = document.querySelector(".main-left__img");
const infoCircle = document.querySelector(".info__circle");

avaImg.addEventListener("click", function () {
  if (!isActive) {
    avaImg.classList.add("ava-anim");
    infoCircle.classList.add("circle-anim");
    document.body.classList.toggle("invert-theme");
    isActive = true;
    setTimeout(function () {
      avaImg.classList.remove("ava-anim");
      infoCircle.classList.remove("circle-anim");
      isActive = false;
    }, 2000);
  }
});

function underDevelopment() {
  alert("Currently under development! ツ");
}
