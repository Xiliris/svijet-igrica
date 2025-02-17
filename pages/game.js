import games from "../content.js";

window.addEventListener("load", () => {
  const nameEl = document.getElementById("game-title");
  const priceEl = document.getElementById("game-price");
  const discountEl = document.getElementById("game-discount");
  const descriptionEl = document.getElementById("game-description");
  const splashEl = document.getElementById("game-splash");

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  const selectedGame = games.find((game) => game.id === id);

  const name = selectedGame.name;
  const description = selectedGame.description;
  const discount = selectedGame.discount;
  const price = selectedGame.price;
  const splash = selectedGame.splash;

  nameEl.innerText = name;
  descriptionEl.innerText = description;
  splashEl.src = `../${splash}`;

  if (price <= 0) {
    priceEl.innerHTML = "Free";
  } else {
    priceEl.innerHTML = `<span>$</span>${price}`;
  }

  if (discount) {
    discountEl.innerText = discount;
  } else {
    discountEl.style.display = "none";
  }
});
