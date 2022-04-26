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
    let obj = playerOne;

    const currentPlayer = document.createElement("p");
    const playerDisplay = document.querySelector(".diplayPlayer");

    const winner = document.createElement("p");
    const winnderDisplay = document.querySelector(".displayWinner");

    const gameOver = false;

    gameBoard.boardDisplay.addEventListener("click", (e) => {
        if (e.target.textContent) {
            //prevents double moves
            return;
        } else {
            let squareIndex = e.target.getAttribute("data-index");
            console.log(squareIndex);
            e.target.textContent = obj.icon;
            gameBoard.board[squareIndex] = obj.icon;
            console.log(gameBoard.board);

            //switches between player
            if (obj == playerOne) {
                gameOver = checkWinner(gameBoard.board, obj);
                obj = playerTwo;
                currentPlayer.textContent = `${obj.name}'s turn`;
                playerDisplay.appendChild(currentPlayer);
            } else {
                gameOver = checkWinner(gameBoard.board, obj);
                obj = playerOne;
                currentPlayer.textContent = `${obj.name}'s turn`;
                playerDisplay.appendChild(currentPlayer);
            }
        }
    });

    function checkWinner(arr, player) {
        if (arr[0] == player.icon && arr[1] == player.icon && arr[2] == player.icon) {
            console.log(`${player.name} wins!!!`);
            return true;
        } else if (arr[2] == player.icon && arr[5] == player.icon && arr[8] == player.icon) {
            console.log(`${player.name} wins!!!`);
            return true;
        } else if (arr[8] == player.icon && arr[7] == player.icon && arr[6] == player.icon) {
            console.log(`${player.name} wins!!!`);
            return true;
        } else if (arr[6] == player.icon && arr[3] == player.icon && arr[0] == player.icon) {
            console.log(`${player.name} wins!!!`);
            return true;
        } else if (arr[0] == player.icon && arr[4] == player.icon && arr[8] == player.icon) {
            console.log(`${player.name} wins!!!`);
            return true;
        } else if (arr[2] == player.icon && arr[4] == player.icon && arr[6] == player.icon) {
            console.log(`${player.name} wins!!!`);
            return true;
        } else if (arr[1] == player.icon && arr[4] == player.icon && arr[7] == player.icon) {
            console.log(`${player.name} wins!!!`);
            return true;
        } else if (arr[3] == player.icon && arr[4] == player.icon && arr[8] == player.icon) {
            console.log(`${player.name} wins!!!`);
            return true;
        } else {
            return false;
        }
    }
})();
