const gameLogic = require('./gamelogic.js')
//
const startSuccess = function (response) {
  $('#user-message').html('<p>go!</p>')
}

const startFailure = function (response) {
  $('#user-message').html('<p>oops?</p>')
}

const validMove = function () {

}

const invalidMove = function () {

}

module.exports = {
  startSuccess,
  startFailure,
  validMove,
  invalidMove
}
