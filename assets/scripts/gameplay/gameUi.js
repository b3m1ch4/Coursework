'use strict'
//
const startSuccess = function (response) {
  $('#user-message').html('<p>yay!</p>')
}

const startFailure = function (response) {
  $('#user-message').html('<p>oops?</p>')
}

const validMove = function (eventTarget, actualPlayer) {
  console.log('valid move')
  $('#user-message').html('<p>nice move!</p>')
  $(eventTarget).html(actualPlayer)
}

const invalidMove = function (response) {
  $('#user-message').html('<p>why not try another spot?</p>')
}

const declareWinner = function (player) {
  let winner = player
  $('#user-message').append(winner + ' wins!')
}

const declareDraw = function () {
  $('#user-message').append("looks like the game drew")
}

const promptNew = function (player) {
  let winner = player
  $('#user-message').append("The game is over...")
}

module.exports = {
  startSuccess,
  startFailure,
  validMove,
  invalidMove,
  declareWinner,
  promptNew
}
