import "../styles/style.css";
import { menu } from "./array.js";
function makecard(arg) {
  document.getElementById("food").innerHTML = "";
  menu.forEach((food) => {
    document.getElementById("food").insertAdjacentHTML(
      "beforeend",
      `<div class="product" id=${food.name}>
    <img class="w-image" src="${food.image}"  />
    <div class="title"><h3 class="foodname">${food.name}</h3></div>
    <div class="info"><p>$${food.price}</p></div>
  </div>`
    );
  });
}

function makedrink(arg) {
  document.getElementById("food").innerHTML = "";
  menu
    .filter((food) => food.type.includes("drink"))
    .forEach((food) => {
      document.getElementById("food").insertAdjacentHTML(
        "beforeend",
        `<div class="product" id=${food.name}>
    <img class="w-image" src="${food.image}"  />
    <div class="title"><h3 class="foodname">${food.name}</h3></div>
    <div class="info"><p>$${food.price}</p></div>
  </div>`
      );
    });
}

function makefood(arg) {
  document.getElementById("food").innerHTML = "";
  menu
    .filter((food) => food.type.includes("food"))
    .forEach((food) => {
      document.getElementById("food").insertAdjacentHTML(
        "beforeend",
        `<div class="product" id=${food.name}>
    <img class="w-image" src="${food.image}"  />
    <div class="title"><h3 class="foodname">${food.name}</h3></div>
    <div class="info"><p>$${food.price}</p></div>
  </div>`
      );
    });
}

function makecheap(arg) {
  document.getElementById("food").innerHTML = "";
  menu
    .filter((food) => food.price <= "3")
    .forEach((food) => {
      document.getElementById("food").insertAdjacentHTML(
        "beforeend",
        `<div class="product" id=${food.name}>
    <img class="w-image" src="${food.image}"  />
    <div class="title"><h3 class="foodname">${food.name}</h3></div>
    <div class="info"><p>$${food.price}</p></div>
  </div>`
      );
    });
}

makecard();
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

document.querySelector(".drinksbtn").addEventListener("click", makedrink);

document.querySelector(".allbtn").addEventListener("click", makecard);

document.querySelector(".foodbtn").addEventListener("click", makefood);

document.querySelector(".cheapbtn").addEventListener("click", makecheap);
