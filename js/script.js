//person factory for creating players
const playerFactory = (name, icon) => {
    return { name, icon };
};

//gameboard module for storing the gameboard array
//IIFE
const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    const boardDisplay = document.querySelector(".board");

    const renderBoard = () => {
        boardDisplay.textContent = "";
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
const game = (() => {
    gameBoard.renderBoard();
    let playerOne = playerFactory("Player 1", "X");
    let playerTwo = playerFactory("Player 2", "O");

    //player 1 takes the first turn
    let obj = playerOne;

    const currentPlayer = document.createElement("p");
    const playerDisplay = document.querySelector(".diplayPlayer");

    let winner = document.createElement("p");
    const winnerDisplay = document.querySelector(".displayWinner");

    const startBtn = document.querySelector(".start");
    const gameArea = document.querySelector(".game-area");
    const playerInfo = document.querySelector(".playerInfo");

    const restartBtn = document.querySelector(".restart");

    let gameOver = false;

    gameBoard.boardDisplay.addEventListener("click", (e) => {
        if (e.target.textContent) {
            //prevents double moves
            return;
        } else if (gameOver == false) {
            let squareIndex = e.target.getAttribute("data-index");
            e.target.textContent = obj.icon;
            gameBoard.board[squareIndex] = obj.icon;
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

    restartBtn.addEventListener("click", () => {
        gameBoard.board.forEach((element, index) => (gameBoard.board[index] = ""));
        console.log(gameBoard.board);
        gameBoard.renderBoard();
        gameOver = false;
        winnerDisplay.textContent = "";

        currentPlayer.textContent = `${playerOne.name}'s turn`;
        playerDisplay.appendChild(currentPlayer);
    });

    startBtn.addEventListener("click", () => {
        const playerOneName = document.querySelector("#player1Name").value;
        const playerTwoName = document.querySelector("#player2Name").value;

        gameArea.style.display = "inline";
        playerInfo.style.display = "none";
        playerOne = playerFactory(playerOneName, "X");
        playerTwo = playerFactory(playerTwoName, "O");

        currentPlayer.textContent = `${playerOne.name}'s turn`;
        playerDisplay.appendChild(currentPlayer);
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
