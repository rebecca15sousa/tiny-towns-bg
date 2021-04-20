const boardContainer = document.getElementById("boardContainer");

function createPlayerBoard() {
    const playerBoard = document.createElement("div");
    playerBoard.classList.add("player-boards");
    for(let i = 0; i < 16; i++) {
        let square = document.createElement("div");
        square.classList.add("board-squares");
        square.setAttribute("data-square", i);
        square.textContent = (i + 1);
        playerBoard.appendChild(square);
    }
    boardContainer.appendChild(playerBoard);
    selectSquare();
}

function selectSquare() {
    let allSquares = document.querySelectorAll(".board-squares");
    allSquares.forEach(function(square) {
        square.addEventListener("click", function(e) {
            let data = e.target.getAttribute("data-square");
        });
    });
}

}

createPlayerBoard();