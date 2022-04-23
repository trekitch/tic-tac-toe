//person factory for creating players
const playerFactory = (name, icon) => {
    return { name, icon };
};

//gameboard module for storing the gameboard array
//IIFE
const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    return {
        board,
    };
})();

console.log(gameBoard.board);

function renderBoard(boardArray) {
    const boardDisplay = document.querySelector(".board");
    boardArray.forEach((element, index) => {
        let div = document.createElement("div");
        div.textContent = element;
        div.classList.add(index);
        boardDisplay.appendChild(div);
    });
}

renderBoard(gameBoard.board);

//controls game flow
function game() {}
