//person factory for creating players
const playerFactory = (name, icon) => {
    return { name, icon };
};

//gameboard module for storing the gameboard array
//IIFE
const gameBoard = (() => {
    const board = ["x", "o", "x", "o", "x", "o", "x", "o", "x"];
    return {
        board,
    };
})();

console.log(gameBoard.board);

function renderBoard(baordArray) {}
