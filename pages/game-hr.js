import games from "../content-hr.js";

window.addEventListener("load", () => {
  const nameEl = document.getElementById("game-title");
  const originalPriceEl = document.getElementById("original-price");
  const discountedPriceEl = document.getElementById("discounted-price");
  const discountEl = document.getElementById("game-discount");
  const descriptionEl = document.getElementById("game-description");
  const splashEl = document.getElementById("game-splash");

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  const selectedGame = games.find((game) => game.id === id);

  if (!selectedGame) return;

  const { name, description, discount, price, splash } = selectedGame;

  nameEl.innerText = name;
  descriptionEl.innerText = description;
  splashEl.src = `../${splash}`;

  if (price <= 0) {
    originalPriceEl.innerText = "Free";
    originalPriceEl.style.textDecoration = "none";
    originalPriceEl.style.color = "white";
    discountedPriceEl.style.display = "none";
    discountEl.style.display = "none";
  } else if (discount) {
    const discountedPrice = price * (1 - discount);
    originalPriceEl.innerHTML = `$${price.toFixed(2)}`;
    originalPriceEl.style.textDecoration = "line-through";
    originalPriceEl.style.color = "var(--color-secondary)";
    discountedPriceEl.innerHTML = `<span>$</span>${discountedPrice.toFixed(2)}`;
    discountEl.innerText = `-${discount * 100}%`;
  } else {
    originalPriceEl.innerHTML = `$${price.toFixed(2)}`;
    originalPriceEl.style.textDecoration = "none";
    originalPriceEl.style.color = "white"; 
    discountedPriceEl.style.display = "none";
    discountEl.style.display = "none";
  }
});