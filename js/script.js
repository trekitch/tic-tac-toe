//person factory for creating players
const playerFactory = (name, icon) => {
    return { name, icon };
};

//gameboard module for storing the gameboard array
//IIFE
const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    const boardDisplay = document.querySelector(".board");

    const renderBoard = () => {
        board.forEach((element, index) => {
            let div = document.createElement("div");
            div.textContent = element;
            div.classList.add(index);
            boardDisplay.appendChild(div);
        });
    };
    return {
        board,
        renderBoard,
        boardDisplay,
    };
})();

gameBoard.renderBoard();

//controls game flow
function game() {}
