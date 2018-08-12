'use strict'
/* ===== required files ===== */
let store = require('../store')
let gameLogic = require('./gameLogic.js')
//
const gameStart = function (response) {
  store.game = response.game
  store.game.cells = gameLogic.gameBoard
  console.log(store.game)
  $('#game-board').show()
  $('#game-message').html("<p>let's play!</p>")
  $('.box').html('')
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
  const gameId = '<p>' + game.id + '</p>'
  const gameOver = '<p>' + game.over + '</p>'
  const apiArray = '<p>' + game.cells + '</p>'
  const idX = '<p>' + game.player_x.id + '</p>'
  const emailX = '<p>' + game.player_x.email + '</p>'
  // const idO = '<p>' + game.player_o.id + '</p>'
  // const emailO = '<p>' + game.player_o.email + '</p>'
  $('#game-message').append(response + gameId + gameOver + apiArray + idX + emailX)
  })
}
//
const findGame = function (response) {
  let game = response.game
  $('#game-message').html(game)
}
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
  findGame,
  apiUpdate
}
