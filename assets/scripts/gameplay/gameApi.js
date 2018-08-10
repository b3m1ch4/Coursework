'use strict'
// required files
const config = require('../config.js')
const store = require('../store.js')
// get all past games
const allGames = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl,
  })
}
// get one past game
const oneGame = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl,
  })
}
// create a game
const newGame = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl,
    data: data
  })
}
// update game
const patchGame = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl,
    data: data
  })
}
//
module.exports = {
  allGames,
  oneGame,
  newGame,
  patchGame
}
