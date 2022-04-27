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

    let winner = document.createElement("p");
    const winnerDisplay = document.querySelector(".displayWinner");

    let gameOver = false;

    gameBoard.boardDisplay.addEventListener("click", (e) => {
        if (e.target.textContent) {
            //prevents double moves
            return;
        } else if (gameOver == false) {
            let squareIndex = e.target.getAttribute("data-index");
            console.log(squareIndex);
            e.target.textContent = obj.icon;
            gameBoard.board[squareIndex] = obj.icon;
            console.log(gameBoard.board);
            if (gameOver == false) {
                //switches between player
                if (obj == playerOne) {
                    gameOver = checkWinner(gameBoard.board, obj);
                    obj = playerTwo;
                    currentPlayer.textContent = `${obj.name}'s turn`;
                    playerDisplay.appendChild(currentPlayer);
                    return gameOver;
                } else {
                    gameOver = checkWinner(gameBoard.board, obj);
                    obj = playerOne;
                    currentPlayer.textContent = `${obj.name}'s turn`;
                    playerDisplay.appendChild(currentPlayer);
                    return gameOver;
                }
            }
        } else {
            console.log("Game Over");
        }
    });

    function checkWinner(arr, player) {
        if (arr[0] == player.icon && arr[1] == player.icon && arr[2] == player.icon) {
            //top row horizontal win
            console.log(`${player.name} wins!!!`);
            winner.textContent = `${player.name} wins!!!`;
            winnerDisplay.appendChild(winner);
            return true;
        } else if (arr[2] == player.icon && arr[5] == player.icon && arr[8] == player.icon) {
            //right side vertical win
            console.log(`${player.name} wins!!!`);
            winner.textContent = `${player.name} wins!!!`;
            winnerDisplay.appendChild(winner);
            return true;
        } else if (arr[8] == player.icon && arr[7] == player.icon && arr[6] == player.icon) {
            //bottom row horizontal win
            console.log(`${player.name} wins!!!`);
            winner.textContent = `${player.name} wins!!!`;
            winnerDisplay.appendChild(winner);
            return true;
        } else if (arr[6] == player.icon && arr[3] == player.icon && arr[0] == player.icon) {
            //left side vertical win
            console.log(`${player.name} wins!!!`);
            winner.textContent = `${player.name} wins!!!`;
            winnerDisplay.appendChild(winner);
            return true;
        } else if (arr[0] == player.icon && arr[4] == player.icon && arr[8] == player.icon) {
            //top left diagonal win
            console.log(`${player.name} wins!!!`);
            winner.textContent = `${player.name} wins!!!`;
            winnerDisplay.appendChild(winner);
            return true;
        } else if (arr[2] == player.icon && arr[4] == player.icon && arr[6] == player.icon) {
            //top right diagonal win
            console.log(`${player.name} wins!!!`);
            winner.textContent = `${player.name} wins!!!`;
            winnerDisplay.appendChild(winner);
            return true;
        } else if (arr[1] == player.icon && arr[4] == player.icon && arr[7] == player.icon) {
            //middle row vertical win
            console.log(`${player.name} wins!!!`);
            winner.textContent = `${player.name} wins!!!`;
            winnerDisplay.appendChild(winner);
            return true;
        } else if (arr[3] == player.icon && arr[4] == player.icon && arr[5] == player.icon) {
            //middle row horizontal win
            console.log(`${player.name} wins!!!`);
            winner.textContent = `${player.name} wins!!!`;
            winnerDisplay.appendChild(winner);
            return true;
        } else {
            if (arr.includes("") == false) {
                console.log("It's a tie!!");
                winner.textContent = "It's a tie!!";
                winnerDisplay.appendChild(winner);
                return true;
            }
            return false;
        }
    }
})();
