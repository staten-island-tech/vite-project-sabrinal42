import "../styles/style.css";

document.querySelector("#app").innerHTML = `
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <script src="script.js" type="module"></script>
  <title>vite</title>
</head>
<body class="light">
  <h1>Trader José</h1>
  <section id="buttons">
    <button class="btn">theme</button>
    <button class="btn">drinks</button>
    <button class="btn">food</button>
    <button class="btn">$3 and under</button>
    <button class="btn">sab favs</button>
  </section>
  <section id="food">
    <div class="product" id="bagel">
      <img class="w-image" src="assets/bagel.PNG" alt="bagel" />
      <div class="title"><h3 class="foodname">bagel seasoning</h3></div>
      <div class="info"><p>$2</p></div>
    </div>
    <div class="product" id="oat">
      <img class="w-image" src="assets/oat.PNG" alt="oat milk" />
      <div class="title"><h3 class="foodname">oat milk</h3></div>
      <div class="info"><p>$4</p></div>
    </div>
    <div class="product" id="oatmeal">
      <img class="w-image" src="assets/oatmeal.PNG" alt="oatmeal" />
      <div class="title"><h3 class="foodname">oatmeal</h3></div>
      <div class="info"><p>$4</p></div>
    </div>
    <div class="product" id="pasta">
      <img class="w-image" src="assets/pasta.PNG" alt="pasta" />
      <div class="title"><h3 class="foodname">pasta</h3></div>
      <div class="info"><p>$2</p></div>
    </div>
    <div class="product" id="peanut">
      <img class="w-image" src="assets/peanut.PNG" alt="peanut" />
      <div class="title"><h3 class="foodname">peanuts</h3></div>
      <div class="info"><p>$1</p></div>
    </div>
    <div class="product" id="lemonade">
      
        <img  class="w-image" src="assets/lemonade.PNG" alt="lemonade" />
      
      <div class="title"><h3 class="foodname">lemonade</h3></div>
      <div class="info"><p>$3</p></div>
    </div>
    <div class="product" id="bacon">
      <img  class="w-image" src="assets/bacon.PNG" alt="bacon" />
      <div class="title"><h3 class="foodname">bacon</h3></div>
      <div class="info"><p>$5</p></div>
    </div>
    <div class="product" id="shot">
      <img class="w-image" src="assets/shot.PNG" alt="juice shot" />
      <div class="title"><h3 class="foodname">juice shot</h3></div>
      <div class="info"><p>$3</p></div>
    </div>
    <div class="product" id="tuna">
     <img class="w-image" src="assets/tuna.PNG" alt="tuna" />
      <div class="title"><h3 class="foodname">tuna</h3></div>
      <div class="info"><p>$2</p></div>
    </div>
    <div class="product" id="pineapple">
      
        <img class="w-image" src="assets/pineapple.PNG" alt="pineapple" />
  
      <div class="title"><h3 class="foodname">pineapple</h3></div>
      <div class="info"><p>$2</p></div>
    </div>
    <div class="product" id="soup">
      <img class="w-image" src="assets/soup.PNG" alt="soup" />
      <div class="title"><h3 class="foodname">soup dumplings</h3></div>
      <div class="info"><p>$5</p></div>
    </div>
    <div class="product" id="tea">
      <img class="w-image" src="assets/tea.PNG" alt="tea" />
      <div class="title"><h3 class="foodname">green tea</h3></div>
      <div class="info"><p>$2</p></div>
    </div>
  </section>
</body>
</html>
`;
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