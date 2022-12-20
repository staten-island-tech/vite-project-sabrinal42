import "../styles/style.css";
import { menu } from "./array.js";
function makecard(arg) {
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

setupCounter(document.querySelector("#counter"));
