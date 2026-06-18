// Base de datos de juegos dividida por categorías con fotos directas estables
const games = [
    { name: "Slope", img: "https://crafty.gg", category: "trending", url: "https://mathandreadingscienceacademy.org" },
    { name: "Retro Bowl", img: "https://crafty.gg", category: "trending", url: "https://github.io" },
    { name: "Minecraft Classic", img: "https://crafty.gg", category: "new", url: "https://minecraft.net" },
    { name: "Run 3", img: "https://crafty.gg", category: "new", url: "https://github.io" }
];

const trendingGrid = document.getElementById('trending-grid');
const newGrid = document.getElementById('new-grid');
const modal = document.getElementById('game-modal');
const gameFrame = document.getElementById('game-frame');
const closeBtn = document.querySelector('.close-btn');

function renderCategory(container, filterTag) {
    container.innerHTML = "";
    const filtered = games.filter(g => g.category === filterTag);
    
    filtered.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('game-card');
        card.innerHTML = `
            <img src="${game.img}" alt="${game.name}">
            <h3>${game.name}</h3>
        `;
        card.onclick = () => {
            gameFrame.src = game.url;
            modal.style.display = "block";
        };
        container.appendChild(card);
    });
}

closeBtn.onclick = () => {
    modal.style.display = "none";
    gameFrame.src = "";
};

// Cargar las categorías en sus respectivas hileras
renderCategory(trendingGrid, "trending");
renderCategory(newGrid, "new");
