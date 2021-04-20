const boardContainer = document.getElementById("boardContainer");
// const colourBtn = document.getElementById("colourBtn");
// const buildingBtn = document.getElementById("buildingBtn");
const buildingPieces = document.querySelectorAll(".piece-div");
let dataPiece;

//creates player board
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

//drag and drop functions for draggable item
buildingPieces.forEach(function(piece) {
    piece.addEventListener("dragstart", dragStart);
    piece.addEventListener("dragend", dragEnd);
});

function dragStart(e) {
    dataPiece = e.target.getAttribute("data-piece");
    console.log(dataPiece);
}

function dragEnd() {

}

//drag and drop functions for board squares
function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    let classArray = ["black-building-piece", "blue-building-piece", "green-building-piece", "grey-building-piece", "orange-building-piece", "purple-building-piece", "red-building-piece", "yellow-building-piece"];
    this.classList.remove(...classArray);
    switch (dataPiece) {
        case "black":
            this.classList.add("black-building-piece");
            break;
        case "blue":
            this.classList.add("blue-building-piece");
            break;
        case "green":
            this.classList.add("green-building-piece");
            break;
        case "grey":
            this.classList.add("grey-building-piece");
            break;
        case "orange":
            this.classList.add("orange-building-piece");
            break;
        case "purple":
            this.classList.add("purple-building-piece");
            break;
        case "red":
            this.classList.add("red-building-piece");
            break;
        case "yellow":
            this.classList.add("yellow-building-piece");
            break;
        default:
            console.log("deu erro");
    }
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

// function colourSquare(square) {
//     square.style.backgroundColor = "black";
// }

// function buildSquare(square) {
//     square.style.backgroundColor = "red";
// }

createPlayerBoard();