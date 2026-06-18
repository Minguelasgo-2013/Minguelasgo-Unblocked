// Catálogo inicial de juegos usando servidores proxy abiertos confiables
const games = [
    { 
        name: "Slope", 
        img: "https://crazygames.com", 
        url: "https://mathandreadingscienceacademy.org" 
    },
    { 
        name: "Retro Bowl", 
        img: "https://crazygames.com", 
        url: "https://github.io" 
    },
    { 
        name: "Minecraft Classic", 
        img: "https://crazygames.com", 
        url: "https://minecraft.net" 
    },
    { 
        name: "Run 3", 
        img: "https://crazygames.com", 
        url: "https://github.io" 
    }
];

const grid = document.getElementById('game-grid');
const search = document.getElementById('search');
const modal = document.getElementById('game-modal');
const gameFrame = document.getElementById('game-frame');
const closeBtn = document.querySelector('.close-btn');

// Inyectar las tarjetas de juego en el HTML
function displayGames(filteredGames) {
    grid.innerHTML = "";
    filteredGames.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('game-card');
        card.innerHTML = `
            <img src="${game.img}" alt="${game.name}">
            <h3>${game.name}</h3>
        `;
        // Abrir el juego en la ventana modal al hacer clic
        card.onclick = () => {
            gameFrame.src = game.url;
            modal.style.display = "block";
        };
        grid.appendChild(card);
    });
}

// Filtro interactivo del buscador
search.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = games.filter(g => g.name.toLowerCase().includes(term));
    displayGames(filtered);
});

// Cerrar la ventana del juego
closeBtn.onclick = () => {
    modal.style.display = "none";
    gameFrame.src = ""; // Detiene el sonido del juego al cerrar
};

// Inicializar la carga
displayGames(games);
