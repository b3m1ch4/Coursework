'use strict'
/* ===== required files ===== */
const getFormFields = require('../../../lib/get-form-fields.js')
const gameApi = require('./gameApi.js')
const gameLogic = require('./gameLogic.js')
const gameUi = require('./gameUi.js')
// rewrite logic to check the API for valid move before updating the board
let logicCheck = function (event) {
  let i = event.target.id.slice(0, 1)
  if ((gameLogic.gameBoard[i] === undefined) && (gameLogic.current.gameOver === false)) {
    gameLogic.updateBoard(i, gameLogic.current.player)
    gameUi.validMove(event.target, gameLogic.current.player)
    gameLogic.winConditions()
      if (gameLogic.current.gameOver === false) {
        gameLogic.current.changePlayer()
      } else if (gameLogic.current.gameOver === true) {
        gameUi.declareWinner(gameLogic.current.player)
       }
    } else if (gameLogic.current.gameOver === false) {
    gameUi.invalidMove()
  } else if (gameLogic.current.gameOver === true) {
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
const onFindGame = function (event) {
  event.preventDefault()
  const id = $('#find-game input').val()
  gameApi.oneGame(id)
  .then(gameUi.findGame)
  .catch(gameUi.apiFail)
}
//
const onNewGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameApi.newGame(data)
  .then(gameUi.gameStart)
  .catch(gameUi.apiFail)
}

const newGamePatch = function () {
for (let i = 0; i < gameLogic.gameBoard.length; i++) {
  const data = {
    "game": {
      "cell": {
        "index": i,
        "value": null
      },
      "over": false
    }
  }
  }
}
// onPatchGame updates the api with the gameBoard's info
const onPatchGame = function (event) {
  event.preventDefault()
  let i = event.target.id.slice(0, 1)
// store update game?
  const data = {
  "game": {
    "cell": {
      "index": i,
      "value": gameLogic.current.player
    },
    "over": false
  }
}
  gameApi.patchGame(data)
  .then(gameUi.apiUpdate)
  .catch(gameUi.apiFail)
}
// eventually make a promise chain for the client
let apiHandlers = function () {
  $('#games-index').on('click', onAllGames)
  $('#start-game').on('click', onNewGame)
  $('#find-game').on('click', onFindGame)
  $('.box').on('click', onPatchGame)
}
//
let clientHandlers = function () {
  $('#start-button').on('submit', onNewGame)
  $('#0box').on('click', logicCheck)
  $('#1box').on('click', logicCheck)
  $('#2box').on('click', logicCheck)
  $('#3box').on('click', logicCheck)
  $('#4box').on('click', logicCheck)
  $('#5box').on('click', logicCheck)
  $('#6box').on('click', logicCheck)
  $('#7box').on('click', logicCheck)
  $('#8box').on('click', logicCheck)
}
//
module.exports = {
  clientHandlers,
  apiHandlers
}
