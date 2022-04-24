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
            div.setAttribute("data-index", index);
            boardDisplay.appendChild(div);
        });
    };
    return {
        board,
        renderBoard,
        boardDisplay,
    };
})();

//controls game flow
function game() {
    const playerOne = playerFactory("Jim", "X");
    const playerTwo = playerFactory("Sam", "O");
    gameBoard.renderBoard();
    console.log(playerOne);
    const turns = 9;

    gameBoard.boardDisplay.addEventListener("click", (e) => {
        if (e.target.textContent) {
            return;
        } else {
            let squareIndex = e.target.getAttribute("data-index");
            console.log(squareIndex);
            e.target.textContent = playerOne.icon;
            gameBoard.board[squareIndex] = playerOne.icon;
            console.log(gameBoard.board);
        }
    });
}

game();
