const boardContainer = document.getElementById("boardContainer");
const pieces = document.querySelectorAll(".piece-div");
let dataPiece;

//creates player boards
function createPlayerBoard() {
    for (let i = 0; i < playerNumber; i++) {
        const playerBoard = document.createElement("div");
        playerBoard.classList.add("player-boards");
        for(let j = 0; j < 16; j++) {
            let square = document.createElement("div");
            square.classList.add("board-squares");
            square.setAttribute("data-square", j);
            square.textContent = (j + 1);
            playerBoard.appendChild(square);
        }
        boardContainer.appendChild(playerBoard);
    }
    addSquareListeners();
}

function addSquareListeners() {
    let allSquares = document.querySelectorAll(".board-squares");
    allSquares.forEach(function(square) {
        square.addEventListener("dragover", dragOver);
        square.addEventListener("dragenter", dragEnter);
        square.addEventListener("dragleave", dragLeave);
        square.addEventListener("drop", dragDrop);
        square.addEventListener("contextmenu", deleteItem);
    });
}

//drag and drop functions for draggable item
pieces.forEach(function(piece) {
    piece.addEventListener("dragstart", dragStart);
    piece.addEventListener("dragend", dragEnd);
});

function dragStart(e) {
    dataPiece = e.target.getAttribute("data-piece");
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
    let classArray = ["black-building-piece", "blue-building-piece", "green-building-piece", "grey-building-piece", "orange-building-piece", "purple-building-piece", "red-building-piece", "yellow-building-piece", "wood-resource-piece", "brick-resource-piece", "glass-resource-piece", "stone-resource-piece", "wheat-resource-piece"];
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
        case "wood":
            this.classList.add("wood-resource-piece");
            break;
        case "brick":
            this.classList.add("brick-resource-piece");
            break;
        case "glass":
            this.classList.add("glass-resource-piece");
            break;
        case "stone":
            this.classList.add("stone-resource-piece");
            break;
        case "wheat":
            this.classList.add("wheat-resource-piece");
            break;
        default:
            console.log("deu erro");
    }
}

//deletes item from board
function deleteItem(e) {
    e.preventDefault();
    let classArray = ["black-building-piece", "blue-building-piece", "green-building-piece", "grey-building-piece", "orange-building-piece", "purple-building-piece", "red-building-piece", "yellow-building-piece", "wood-resource-piece", "brick-resource-piece", "glass-resource-piece", "stone-resource-piece", "wheat-resource-piece"];
    this.classList.remove(...classArray);
}

createPlayerBoard();