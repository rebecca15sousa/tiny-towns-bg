const boardContainer = document.getElementById("boardContainer");
// let cell;

function createPlayerBoard() {
    const playerBoard = document.createElement("div");
    playerBoard.classList.add("player-boards");
    for(let i = 0; i < 16; i++) {
        let cell = document.createElement("div");
        cell.textContent = (i + 1);
        playerBoard.appendChild(cell);
    }
    boardContainer.appendChild(playerBoard);
}

createPlayerBoard();