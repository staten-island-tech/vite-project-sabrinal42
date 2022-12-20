const trader = [
  {
    name: "bagel",
    image: "/bagel.PNG",
    type: ["food"],
    price: "2",
  },
  {
    name: "oat",
    image: "/oat.PNG",
    type: ["drink"],
    price: "4",
  },
  {
    name: "oatmeal",
    image: "/oatmeal.PNG",
    type: ["food"],
    price: "4",
  },
  {
    name: "pasta",
    image: "/pasta.PNG",
    type: ["food"],
    price: "2",
  },
  {
    name: "peanut",
    image: "/peanut.PNG",
    type: ["food"],
    price: "1",
  },
  {
    name: "lemonade",
    image: "/lemonade.png",
    type: ["drink"],
    price: "3",
  },
  {
    name: "bacon",
    image: "/bacon.PNG",
    type: ["food"],
    price: "5",
  },
  {
    name: "shot",
    image: "/shot.png",
    type: ["drink"],
    price: "3",
  },
  {
    name: "tuna",
    image: "/tuna.PNG",
    type: ["food"],
    price: "2",
  },
  {
    name: "pineapple",
    image: "/pineapple.PNG",
    type: ["food"],
    price: "2",
  },
  {
    name: "soup",
    image: "/soup.PNG",
    type: ["food"],
    price: "5",
  },
  {
    name: "tea",
    image: "/tea.png",
    type: ["drink"],
    price: "2",
  },
];

export let menu = trader;

document
  .querySelector(".drinksbtn")
  .addEventListener("click", function makecard() {
    trader
      .filter((trader) => trader.type.includes("drink"))
      .forEach(
        (trader) =>
          function makecard(arg) {
            menu.forEach((trader) => {
              document.getElementById("drink").insertAdjacentHTML(
                "beforeend",
                `<div class="product" id=${food.name}>
        <img class="w-image" src="${food.image}"  />
        <div class="title"><h3 class="foodname">${food.name}</h3></div>
        <div class="info"><p>$${food.price}</p></div>
      </div>`
              );
            });
          }
      );
  });
