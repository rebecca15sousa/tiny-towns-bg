const boardContainer = document.getElementById("boardContainer");

function createPlayerBoard() {
    const playerBoard = document.createElement("div");
    playerBoard.classList.add("player-boards");
    for(let i = 0; i < 16; i++) {
        let square = document.createElement("div");
        square.classList.add("board-squares");
        square.textContent = (i + 1);
        playerBoard.appendChild(square);
    }
    boardContainer.appendChild(playerBoard);
}

createPlayerBoard();