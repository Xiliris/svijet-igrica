import games from "./content-hr.js";

window.addEventListener("load", () => {
    const mainContainer = document.getElementById("games-collection");
    const weeklyContainer = document.getElementById("weekly-games-collection");
  
    const mainGames = games.slice(0, 12);
  mainGames.forEach((game) => {
    const discountedPrice = game.discount ? (game.price * (1 - game.discount)).toFixed(2) : game.price;
  
    mainContainer.innerHTML += `
      <a href="pages/game-hr.html?id=${game.id}">
          <div class="game-splash">
              <img src="${game.splash}" width="400px" height="200px"/>
              ${game.discount ? `<p>-${game.discount * 100}%</p>` : ""}
          </div>
          <div class="game-container">
              <p class="game-name">${game.name}</p>
              <p class="game-price">${
                game.price === 0 ? "FREE" : `<span>$</span>${discountedPrice}`
              }</p>
          </div>
      </a>
    `;
  });
  
  const weeklyGames = games.sort(() => 0.5 - Math.random()).slice(0, 3);
  weeklyGames.forEach((game) => {
    const discountedPrice = game.discount ? (game.price * (1 - game.discount)).toFixed(2) : game.price;
  
    weeklyContainer.innerHTML += `
      <a href="pages/game-hr.html?id=${game.id}">
          <div class="game-splash">
              <img src="${game.splash}" width="400px" height="200px"/>
              ${game.discount ? `<p>-${game.discount * 100}%</p>` : ""}
          </div>
          <div class="game-container">
              <p class="game-name">${game.name}</p>
              <p class="game-price">${
                game.price === 0 ? "FREE" : `<span>$</span>${discountedPrice}`
              }</p>
          </div>
      </a>
    `;
  });
  });