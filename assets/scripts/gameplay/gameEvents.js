'use strict'
/* ===== required files ===== */
let getFormFields = require('../../../lib/get-form-fields.js')
let gameApi = require('./gameApi.js')
let gameLogic = require('./gameLogic.js')
let gameUi = require('./gameUi.js')
let store = require('../store.js')
// rewrite logic to check the API for valid move before updating the board
let logicCheck = function (event) {
  let i = event.target.id.slice(0, 1)
  if ((store.game.cells[i] === undefined) && (store.game.over === false)) {
    gameLogic.updateBoard(i, gameLogic.current.player)
    gameUi.validMove(event.target, gameLogic.current.player)
    gameLogic.winConditions()
    store.game.over = gameLogic.current.over
      if (store.game.over === false) {
        gameLogic.current.changePlayer()
      } else if (store.game.over === true) {
        gameUi.declareWinner(gameLogic.current.winner)
       }
    } else if (store.game.over === false) {
    gameUi.invalidMove()
  } else if (store.game.over === true) {
    gameUi.promptNew(gameLogic.current.player)
  }
}
//
const onAllGames = function (event) {
  event.preventDefault()
  gameApi.allGames()
    .then(gameUi.indexSuccess)
    .catch(gameUi.apiFail)
}
//
// const onFindGame = function (event) {
//   event.preventDefault()
//   const id = $('#find-game input').val()
//   gameApi.oneGame(id)
//   .then(gameUi.findGame)
//   .catch(gameUi.apiFail)
// }
// onNewGame creates a new game in the Api
let onNewGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameLogic.gameBoard = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
  gameLogic.current.player = 'X'
  gameLogic.current.over = false
  gameApi.newGame(data)
  .then(gameUi.gameStart)
  .catch(gameUi.apiFail)
}
// onPatchGame updates the api with the gameBoard's info
let onPatchGame = function (event) {
  event.preventDefault()
  let i = event.target.id.slice(0, 1)
  const data = {
  "game": {
    "cell": {
      "index": i,
      "value": gameLogic.current.player
    },
    "over": gameLogic.current.over
  }
}
  gameApi.patchGame(data)
  .then(gameUi.apiUpdate)
  .catch(gameUi.apiFail)
}
let onEndGame = function () {
  const data = {
  "game": {
    "over": true
  }
}
  gameApi.patchGame(data)
  .then(gameUi.apiUpdate)
  .catch(gameUi.apiFail)
}
// event listeners
let gameplayHandlers = function () {
  $('#games-index').on('click', onAllGames)
  $('#start-game').on('click', onNewGame)
  // $('#find-game').on('click', onFindGame)
  // $('.box').on('click', onPatchGame, logicCheck)
  $('#0box').on('click', onPatchGame, logicCheck)
  $('#1box').on('click', onPatchGame, logicCheck)
  $('#2box').on('click', onPatchGame, logicCheck)
  $('#3box').on('click', onPatchGame, logicCheck)
  $('#4box').on('click', onPatchGame, logicCheck)
  $('#5box').on('click', onPatchGame, logicCheck)
  $('#6box').on('click', onPatchGame, logicCheck)
  $('#7box').on('click', onPatchGame, logicCheck)
  $('#8box').on('click', onPatchGame, logicCheck)
}
//
module.exports = {
  gameplayHandlers,
  onEndGame
}
