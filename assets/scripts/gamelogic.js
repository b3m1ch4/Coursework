// tic tac toe user interface
// set initial conditions at game start
// player x goes first and the gameBoard is an array of nine
let current = {
  player: 'X',
  changePlayer: function () {
    if (this.player == 'X') {
      this.player = 'O'
    } else if (this.player == 'O')
      this.player = 'X'
  }
}
let gameBoard = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
const updateBoard = function (i, player) {
  gameBoard[i] = (player)
}
/*
[ 0, 1, 2,
  3, 4, 5,
  6, 7, 8 ]

  let newGame = function () {
    actualPlayer = 'x'
    gameBoard = [undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined]
  } */

// define win conditions
/*

if () || () || () ||
() || () || () ||
() || ()) {
  gameOver = true
} else {
  gameOver = false
}
}
return gameOver */
let winConditions = {
  gameOver: false,
  row0: [gameBoard[0], gameBoard[1], gameBoard[2]],
  row3: [gameBoard[3], gameBoard[4], gameBoard[5]],
  row6: [gameBoard[6], gameBoard[7], gameBoard[8]],
  column0: [gameBoard[0], gameBoard[3], gameBoard[6]],
  column1: [gameBoard[1], gameBoard[4], gameBoard[7]],
  column2: [gameBoard[2], gameBoard[5], gameBoard[8]],
  diagonal0: [gameBoard[0], gameBoard[4], gameBoard[8]],
  diagonal2: [gameBoard[2], gameBoard[4], gameBoard[6]],
  check: function () {
    if (this.row0.every('X') === true) {
      this.gameOver = true
      console.log(this.gameOver)
  } else {
    this.gameOver = false
    }
  }
}
/*
// player turn: click grid, check api, if valid update api, if api updated update
// game board, check win conditions, if game continues change turn
// check for win conditions at the end of each turn
// valid move

// invalidMove
// pull array using array indexes
//
*/

module.exports = {
  gameBoard,
  updateBoard,
  current
}
