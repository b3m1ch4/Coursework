'use strict'
// required files
let config = require('../config.js')
let store = require('../store.js')
// get all past games
const allGames = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
// get one past game
const oneGame = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + id,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
// create a game
const newGame = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games/',
    data,
    headers: {
      'Authorization': 'Token token=' + store.user.token,
    }
  })
}
// update game
const patchGame = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game.id,
    data,
    headers: {
      'Authorization': 'Token token=' + store.user.token,
      // 'Content-Type': 'application/json'
    }
  })
}
//
module.exports = {
  allGames,
  oneGame,
  newGame,
  patchGame
}
