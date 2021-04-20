const boardContainer = document.getElementById("boardContainer");
// const colourBtn = document.getElementById("colourBtn");
// const buildingBtn = document.getElementById("buildingBtn");

const blackBuildingPiece = document.getElementById("blackBuildingPiece");

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
    let allSquares = document.querySelectorAll(".board-squares");
    allSquares.forEach(function(square) {
        square.addEventListener("dragover", dragOver);
        square.addEventListener("dragenter", dragEnter);
        square.addEventListener("dragleave", dragLeave);
        square.addEventListener("drop", dragDrop);
    });
    // selectSquare();
}

// function selectSquare() {
//     let allSquares = document.querySelectorAll(".board-squares");
//     allSquares.forEach(function(square) {
//         square.addEventListener("click", function(e) {
//             let data = e.target.getAttribute("data-square");
//             colourBtn.style.display = "block";
//             colourBtn.setAttribute("data-square", data);
//             buildingBtn.style.display = "block";
//             buildingBtn.setAttribute("data-square", data);
//         });
//     });
// }

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    this.classList.add("black-building-piece");
}
        

// colourBtn.addEventListener("click", function() {
//     const allSquares = document.querySelectorAll(".board-squares");
//     let index = colourBtn.getAttribute("data-square");
//     colourSquare(allSquares[index]);
// });

// buildingBtn.addEventListener("click", function() {
//     const allSquares = document.querySelectorAll(".board-squares");
//     let index = colourBtn.getAttribute("data-square");
//     buildSquare(allSquares[index]);
// });

function colourSquare(square) {
    square.style.backgroundColor = "black";
}

function buildSquare(square) {
    square.style.backgroundColor = "red";
}

createPlayerBoard();