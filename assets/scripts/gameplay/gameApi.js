'use strict'
// required files
const config = require('../config.js')
const store = require('../store.js')
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
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
// update game
const patchGame = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + data.game.id,
    data,
    headers: {
      'Authorization': 'Token token=' + store.user.token
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
