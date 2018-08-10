'use strict'
//
/* ========== game messaging messaging ========== */
//
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
  $('#game-message').html(winner + ' wins!')
}
//
const declareDraw = function () {
  $('#game-message').html("looks like the game drew")
}
//
const promptNew = function (player) {
  let winner = player
  $('#game-message').html("The game is over...")
}
//
/* ========== user messaging ========== */
//
const apiFail = function (response) {
    response.preventDefault()
    $('#user-message').html('<p>API Fail. Please try again.</p>>')
}
//
const indexSuccess = function (response) {
  console.log(response)
  response.games.forEach((game) => {
  const gameId = '<p>' + game.id + '</p>'
  const gameOver = '<p>' + game.over + '</p>'
  const apiArray = '<p>' + game.cells + '</p>'
  const idX = '<p>' + game.player_x.id + '</p>'
  const emailX = '<p>' + game.player_x.email + '</p>'
  // const idO = '<p>' + game.player_o.id + '</p>'
  // const emailO = '<p>' + game.player_o.email + '</p>'
  $('#game-message').html(response + gameId + gameOver + apiArray + idX + emailX)
  })
}
//
const gameStart = function (response) {
  $('#game-message').html('<p> game started </p>')
}
//
const apiUpdate = function () {
  $('#game-message').html('<p> server updated successfully </p>')
}
//
module.exports = {
  startSuccess,
  startFailure,
  validMove,
  invalidMove,
  declareWinner,
  promptNew,
  indexSuccess,
  gameStart
}
