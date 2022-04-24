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

    const boardMoves = (arr, val) => {
        var indexes = [],
            i;
        for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
        return indexes;
    };

    return {
        board,
        renderBoard,
        boardDisplay,
        boardMoves,
    };
})();

//controls game flow
const game = (() => {
    const playerOne = playerFactory("Player 1", "X");
    const playerTwo = playerFactory("Player 2", "O");
    gameBoard.renderBoard();
    let turns = 0;
    let obj = playerOne;

    gameBoard.boardDisplay.addEventListener("click", (e) => {
        if (e.target.textContent) {
            return;
        } else {
            let squareIndex = e.target.getAttribute("data-index");
            console.log(squareIndex);
            e.target.textContent = obj.icon;
            gameBoard.board[squareIndex] = obj.icon;
            console.log(gameBoard.board);

            //switches between player
            if (obj == playerOne) {
                obj = playerTwo;
                turns++;
            } else {
                obj = playerOne;
                turns++;
            }
        }
    });
})();
