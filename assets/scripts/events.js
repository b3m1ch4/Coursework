const getFormFields = require('../../lib/get-form-fields.js')
//const api = require('./api.js')
const gameLogic = require('./gamelogic.js')
const ui = require('./ui.js')

const onNewGame = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
    .then(gameLogic.newGame)
  /*api.startGame(data)
      .then(ui.startSuccess)
      .catch(ui.startFailure)
    .catch(ui.startFailure) */
}

const placeToken = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
}

let logicCheck = function (event) {
  let i = event.target.id.slice(0, 1)
  if (gameLogic.gameBoard[i] === undefined) {
    gameLogic.updateBoard(i, gameLogic.current.player)
    ui.validMove(event.target, gameLogic.current.player)
    gameLogic.current.changePlayer()
  } else {
    ui.invalidMove()
  }
}

const addHandlers = function () {
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

module.exports = {
  addHandlers,
}
