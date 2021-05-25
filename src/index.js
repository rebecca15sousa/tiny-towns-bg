import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

function BoardSquares() {
    return (
        <div className="board-squares"></div>
    );
}

function PlayerBoard() {
    const arrayBoardSquares = [];
    for (let i = 0; i < 16; i++) {
        arrayBoardSquares.push(<BoardSquares />);
    }
    return (
        <div className="player-boards">
            {arrayBoardSquares}
        </div>
    );
}

// function NextBtn() {
//     return (
//         <button>Next</button>
//     );
// }

ReactDOM.render(<PlayerBoard />, document.getElementById('root'));
// ReactDOM.render(<NextBtn />, document.getElementById('root'));