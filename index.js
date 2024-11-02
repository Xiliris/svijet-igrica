import games from "./content.js";

window.addEventListener("load", () => {
  const container = document.getElementById("games-collection");

  games.forEach((game) => {
    container.innerHTML += `
            <a href="game.html?id=${game.id}">
                <div class="game-splash">
                    <img src="${game.splash}" width="400px" height 200px/>
                    ${game.discount ? `<p>-${game.discount * 100}%</p>` : ""}
                </div>
                <div class="game-container">
                <p class="game-name">${game.name}</p>
                <p class="game-price">${
                  game.price ? `<span>$</span>${game.price}` : "FREE"
                }</p>
                </div>
            </a>
        `;
  });
});
