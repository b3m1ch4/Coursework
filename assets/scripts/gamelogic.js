// tic tac toe user interface
// set initial conditions at game start
// player x goes first and the gameBoard is an array of nine
let actualPlayer = 'X'
let gameBoard = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
//
const updateBoard = function (i, playerName) {
  gameBoard[i] = (playerName)
  actualPlayer = changePlayer(playerName)
  console.log(actualPlayer)
  console.log(gameBoard)
}


let changePlayer = function (playerName) {
  if (playerName === 'X') {
    return 'O'
  } else if (playerName === 'O') {
    return 'X'
  }
}
/*
[ 0, 1, 2,
  3, 4, 5,
  6, 7, 8 ]

  let newGame = function () {
    actualPlayer = 'x'
    gameBoard = [undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined]
  }

// define win conditions
const winConditions = function () {
    let row0 = gameBoard[0], gameBoard[1], gameBoard[2]
    let row3 = gameBoard[3], gameBoard[4], gameBoard[5]
    let row6 = gameBoard[6], gameBoard[7], gameBoard[8]
    let column0 = gameBoard[0], gameBoard[3], gameBoard[6]
    let column1 = gameBoard[1], gameBoard[4], gameBoard[7]
    let column2 = gameBoard[2], gameBoard[5], gameBoard[8]
    let diagonal0 = gameBoard[0], gameBoard[4], gameBoard[8]
    let diagonal2 = gameBoard[2], gameBoard[4], gameBoard[6]
    if () || () || () ||
    () || () || () ||
    () || ()) {
      gameOver = true
    } else {
      gameOver = false
    }
  }
  return gameOver
}
//
const checkConditions = function () {}
//
const updateConditions = function () {}
// player turn: click grid, check api, if valid update api, if api updated update
// game board, check win conditions, if game continues change turn
// check for win conditions at the end of each turn
// valid move

// invalidMove
// pull array using array indexes
//
*/

module.exports = {
  actualPlayer,
  gameBoard,
  updateBoard
}
