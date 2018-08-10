'use strict'
// game messaging
const startSuccess = function (response) {
  $('#game-message').html('<p>yay!</p>')
}
//
const startFailure = function (response) {
  $('#game-message').html('<p>oops?</p>')
}
//
const validMove = function (eventTarget, actualPlayer) {
  console.log('valid move')
  $('#game-message').html('<p>nice move!</p>')
  $(eventTarget).html(actualPlayer)
}
//
const invalidMove = function (response) {
  $('#game-message').html('<p>why not try another spot?</p>')
}
//
const declareWinner = function (player) {
  let winner = player
  $('#game-message').append(winner + ' wins!')
}
//
const declareDraw = function () {
  $('#game-message').append("looks like the game drew")
}
//
const promptNew = function (player) {
  let winner = player
  $('#game-message').append("The game is over...")
}
// user messaging
const onApiFail = function (response) {
    $('#user-message').html('<p>API Fail. Please try again.</p>>')
}
//
const onIndexSuccess = function (response) {
  response.games.forEach((game) => {
    const gameId = '<p>' + game.id + '</p>'
    // const gameOver = '<p>' + game.over + '</p>'
    // const cells = '<p>' + game.cells + '</p>'
    // const xId = '<p>' + game.player_x.id + '</p>'
    // const xEmail = '<p>' + game.player_x.email + '</p>'
    // const oId = '<p>' + game.player_o.id + '</p>'
    // const oEmail = '<p>' + game.player_o.email + '</p>'
    $('#game-message').append()
  })
}
//
module.exports = {
  startSuccess,
  startFailure,
  validMove,
  invalidMove,
  declareWinner,
  promptNew
}
