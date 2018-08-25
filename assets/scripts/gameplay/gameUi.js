'use strict'
/* ===== required files ===== */
let store = require('../store')
let gameLogic = require('./gameLogic.js')
//
const gameStart = function (response) {
  store.game = response.game
  store.game.cells = gameLogic.gameBoard
  $('.game-board').show()
  $('#games-index').show()
  $('#game-message').html(gameLogic.current.player + ' goes first')
  $('.box').html('')
}
//
const startFailure = function (response) {
  $('#game-message').html('<p>oops?</p>')
}
//
const validMove = function (eventTarget, actualPlayer) {
  $(eventTarget).html(actualPlayer)
  if (actualPlayer == '🐱') {
    $('#game-message').html("🐶's turn")
  } else if (actualPlayer == '🐶') {
    $('#game-message').html("🐱's turn")
  }
}
//
const invalidMove = function (response) {
  $('#game-message').html('<p>why not try another spot?</p>')
}
//
const declareWinner = function () {
  $('#game-message').html(gameLogic.current.winner)
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
const apiFail = function (response) {
    response.preventDefault()
    $('#user-message').html('<p>API Fail. Please try again.</p>>')
}
//
const indexSuccess = function (response) {
  response.games.forEach((game) => {
  // const gameId = '<p>' + game.id + '</p>'
  // const gameOver = '<p>' + game.over + '</p>'
  // const apiArray = '<p>' + game.cells + '</p>'
  // const idX = '<p>' + game.player_x.id + '</p>'
  // const emailX = '<p>' + game.player_x.email + '</p>'
  let gamesPlayed = response.games.length
  $('#game-message').html("you've played " + gamesPlayed + " games!")
  })
}
//
// const findGame = function (response) {
//   let game = response.game
//   $('#game-message').html(game)
// }
//
const apiUpdate = function (response) {
  store.game = response.game
}
//
module.exports = {
  startFailure,
  validMove,
  invalidMove,
  declareWinner,
  promptNew,
  gameStart,
  indexSuccess,
  apiUpdate
}
