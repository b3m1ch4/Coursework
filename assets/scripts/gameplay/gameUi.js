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
  $('#user-message').html('<p>yay!</p>')
  $(eventTarget).html(actualPlayer)
}

const invalidMove = function (response) {
  $('#user-message').html('<p>oops?</p>')
}

module.exports = {
  startSuccess,
  startFailure,
  validMove,
  invalidMove
}
