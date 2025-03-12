import games from "../content-hr.js";

const container = document.getElementById("games-collection");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");

function displayGames(filteredGames) {
    container.innerHTML = "";
    filteredGames.forEach((game) => {
        const discountedPrice = game.discount ? (game.price * (1 - game.discount)).toFixed(2) : game.price;
        
        container.innerHTML += `
            <a href="game-hr.html?id=${game.id}" class="game-card">
                <img src="${game.splash}" alt="${game.name}" />
                <p class="game-title">${game.name}</p>
                <p class="game-price">
                    ${game.discount ? `<span class="discount" style="color: var(--color-accent)">-${game.discount * 100}%</span>` : ""}
                    ${game.price === 0 ? "FREE" : `<span>$</span>${discountedPrice}`}
                </p>
            </a>
        `;
    });
}


displayGames(games);

searchInput.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchText));
    displayGames(filteredGames);
});

filterSelect.addEventListener("change", (e) => {
    const filter = e.target.value;
    let filteredGames = games;

    if (filter === "discount") {
        filteredGames = games.filter(game => game.discount);
    } else if (filter === "free") {
        filteredGames = games.filter(game => game.price === 0);
    }

    displayGames(filteredGames);
});
