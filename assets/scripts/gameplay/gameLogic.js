'use strict'
/* ===== required files ===== */
let store = require('../store.js')
/* tic tac toe user interface
set initial conditions at game start
player x goes first and the gameBoard is an array of nine
player turn: click grid, check api, if valid update api, if api updated update
game board, check win conditions, if game continues change turn
check for win conditions at the end of each turn
valid move
invalidMove
pull array using array indexes
*/
let current = {
  player: '🐱',
  nextPlayer: '🐶',
  changePlayer: function () {
    if (this.player === '🐱') {
      this.player = '🐶'
      this.nextPlayer = '🐱'
    } else if (this.player === '🐶')
      this.player = '🐱'
      this.nextPlayer = '🐶'
  },
  over: false,
  endGame: function () {
    this.over = true
  },
  winner: undefined
}
//
const gameBoard = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
undefined]
//
const updateBoard = function (i, player) {
  store.game.cells[i] = player
}
//
let isDefined = function (x) {
  if (x === undefined) {
  return false
} else {
  return true
  }
}
//
let winConditions = function () {
  if ((store.game.cells[0] === '🐱' && store.game.cells[1] === '🐱' && store.game.cells[2] === '🐱') || (store.game.cells[0] ==='🐶' && store.game.cells[1] === '🐶' && store.game.cells[2] === '🐶')) {
  current.winner = current.player + ' wins'
  current.endGame()
} else if ((store.game.cells[0] === '🐱' && store.game.cells[1] === '🐱' && store.game.cells[2] === '🐱') || (store.game.cells[0] ==='🐶' && store.game.cells[1] === '🐶' && store.game.cells[2] === '🐶')) {
  current.winner = current.player + ' wins'
  current.endGame()
} else if ((store.game.cells[3] === '🐱' && store.game.cells[4] === '🐱' && store.game.cells[5] === '🐱') || (store.game.cells[3] ==='🐶' && store.game.cells[4] === '🐶' && store.game.cells[5] === '🐶')) {
  current.winner = current.player + ' wins'
  current.endGame()
} else if ((store.game.cells[6] === '🐱' && store.game.cells[7] === '🐱' && store.game.cells[8] === '🐱') || (store.game.cells[6] ==='🐶' && store.game.cells[7] === '🐶' && store.game.cells[8] === '🐶')) {
  current.winner = current.player + ' wins'
  current.endGame()
} else if ((store.game.cells[0] === '🐱' && store.game.cells[3] === '🐱' && store.game.cells[6] === '🐱') || (store.game.cells[0] ==='🐶' && store.game.cells[3] === '🐶' && store.game.cells[6] === '🐶')) {
  current.winner = current.player + ' wins'
  current.endGame()
} else if ((store.game.cells[1] === '🐱' && store.game.cells[4] === '🐱' && store.game.cells[7] === '🐱') || (store.game.cells[1] ==='🐶' && store.game.cells[4] === '🐶' && store.game.cells[7] === '🐶')) {
  current.winner = current.player + ' wins'
  current.endGame()
} else if ((store.game.cells[2] === '🐱' && store.game.cells[5] === '🐱' && store.game.cells[8] === '🐱') || (store.game.cells[2] ==='🐶' && store.game.cells[5] === '🐶' && store.game.cells[8] === '🐶')) {
current.winner = current.player + ' wins'
  current.endGame()
} else if ((store.game.cells[0] === '🐱' && store.game.cells[4] === '🐱' && store.game.cells[8] === '🐱') || (store.game.cells[0] ==='🐶' && store.game.cells[4] === '🐶' && store.game.cells[8] === '🐶')) {
current.winner = current.player + ' wins'
  current.endGame()
} else if ((store.game.cells[2] === '🐱' && store.game.cells[4] === '🐱' && store.game.cells[6] === '🐱') || (store.game.cells[2] ==='🐶' && store.game.cells[4] === '🐶' && store.game.cells[6] === '🐶')) {
  current.winner = current.player + ' wins'
  current.endGame()
} else if (store.game.cells[0] !== undefined && store.game.cells[1] !== undefined && store.game.cells[2] !== undefined && store.game.cells[3] !== undefined && store.game.cells[4] !== undefined &&
  store.game.cells[5] !== undefined && store.game.cells[6] !== undefined && store.game.cells[7] !== undefined && store.game.cells[8] !== undefined && store.game.over === false) {
  current.winner = 'you drew'
  current.endGame()
  }
}
//
// let findWinner = function () {
//   let xCount = 0
//   let oCount = 0
//   for (let i = 0; i < cells.length; i++) {
//     if (cells[i] === '🐱') {
//     xCount += 1
//   } else if (cells[i] === '🐶') {
//     oCount += 1
//   }
// } if (xCount > oCount) {
//   return 'X won'
// } else if (oCount > xCount) {
//   return 'O won'
//   }
// }
//
module.exports = {
  gameBoard,
  updateBoard,
  current,
  winConditions
}
