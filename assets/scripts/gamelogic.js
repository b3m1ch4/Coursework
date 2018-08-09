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
  player: 'X',
  changePlayer: function () {
    if (this.player == 'X') {
      this.player = 'O'
    } else if (this.player == 'O')
      this.player = 'X'
  }
}
//
let gameBoard = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
const updateBoard = function (i, player) {
  gameBoard[i] = (player)
}
//
let winConditions = function () {
  if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') || (gameBoard[0] ==='O' && gameBoard[1] === 'O' && gameBoard[2] === 'O')) {
  console.log('game over')
} else if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') || (gameBoard[0] ==='O' && gameBoard[1] === 'O' && gameBoard[2] === 'O')) {
console.log('game over')
} else if ((gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') || (gameBoard[3] ==='O' && gameBoard[4] === 'O' && gameBoard[5] === 'O')) {
console.log('game over')
} else if ((gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') || (gameBoard[6] ==='O' && gameBoard[7] === 'O' && gameBoard[8] === 'O')) {
console.log('game over')
} else if ((gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') || (gameBoard[0] ==='O' && gameBoard[3] === 'O' && gameBoard[6] === 'O')) {
console.log('game over')
} else if ((gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') || (gameBoard[1] ==='O' && gameBoard[4] === 'O' && gameBoard[7] === 'O')) {
console.log('game over')
} else if ((gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') || (gameBoard[2] ==='O' && gameBoard[5] === 'O' && gameBoard[8] === 'O')) {
console.log('game over')
} else if ((gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') || (gameBoard[0] ==='O' && gameBoard[4] === 'O' && gameBoard[8] === 'O')) {
console.log('game over')
} else if ((gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') || (gameBoard[2] ==='O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')) {
console.log('game over')
} else {
  console.log('game not over')
  }
}
//

module.exports = {
  gameBoard,
  updateBoard,
  current,
  winConditions
}
