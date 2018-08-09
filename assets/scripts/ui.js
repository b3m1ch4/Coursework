//
const startSuccess = function (response) {
  $('#user-message').html('<p>yay!</p>')
}

const startFailure = function (response) {
  $('#user-message').html('<p>oops?</p>')
}

const validMove = function (response) {
  $('#user-message').html('<p>yay!</p>')

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
