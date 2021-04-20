const boardContainer = document.getElementById("boardContainer");
const colourBtn = document.getElementById("colourBtn");
const buildingBtn = document.getElementById("buildingBtn");

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
            colourBtn.style.display = "block";
            colourBtn.setAttribute("data-square", data);
            buildingBtn.style.display = "block";
            buildingBtn.setAttribute("data-square", data);
        });
    });
}

colourBtn.addEventListener("click", function() {
    const allSquares = document.querySelectorAll(".board-squares");
    let index = colourBtn.getAttribute("data-square");
    console.log(index);
    colourSquare(allSquares[index]);
});

buildingBtn.addEventListener("click", function() {
    const allSquares = document.querySelectorAll(".board-squares");
    let index = colourBtn.getAttribute("data-square");
    console.log(index);
    buildSquare(allSquares[index]);
});

}

createPlayerBoard();