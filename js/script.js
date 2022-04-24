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

//controls game flow
function game() {
    const playerOne = playerFactory("Jim", "X");
    const playerTwo = playerFactory("Sam", "O");
    gameBoard.renderBoard();
    console.log(playerOne);
    const turns = 9;

    for (let index = 0; index <= turns; index++) {
        gameBoard.boardDisplay.addEventListener("click", (e) => {
            if (e.target.textContent) {
                return;
            } else {
                e.target.textContent = playerOne.icon;
            }
        });
    }
}

game();
