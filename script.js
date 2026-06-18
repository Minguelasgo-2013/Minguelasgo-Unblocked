// Catálogo con portadas HD y enlaces estables de juegos populares
const games = [
    { 
        name: "Slope Unblocked", 
        img: "https://crazygames.com", 
        url: "https://mathandreadingscienceacademy.org" 
    },
    { 
        name: "Retro Bowl", 
        img: "https://crazygames.com", 
        url: "https://github.io" 
    },
    { 
        name: "1v1.LOL", 
        img: "https://crazygames.com", 
        url: "https://1v1.lol" 
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
    },
    { 
        name: "Tunnel Rush", 
        img: "https://crazygames.com", 
        url: "https://github.io" 
    }
];

const grid = document.getElementById('game-grid');
const search = document.getElementById('search');
const modal = document.getElementById('game-modal');
const gameFrame = document.getElementById('game-frame');
const closeBtn = document.querySelector('.close-btn');

function displayGames(filteredGames) {
    grid.innerHTML = "";
    filteredGames.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('game-card');
        card.innerHTML = `
            <img src="${game.img}" alt="${game.name}" loading="lazy">
            <h3>${game.name}</h3>
        `;
        card.onclick = () => {
            gameFrame.src = game.url;
            modal.style.display = "block";
        };
        grid.appendChild(card);
    });
}

search.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = games.filter(g => g.name.toLowerCase().includes(term));
    displayGames(filtered);
});

closeBtn.onclick = () => {
    modal.style.display = "none";
    gameFrame.src = ""; 
};

// Inicializa la cuadrícula visual
displayGames(games);
