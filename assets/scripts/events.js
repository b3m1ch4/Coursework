const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const gameLogic = require('./gamelogic.js')
const ui = require('./ui.js')

const onNewGame = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameLogic.newGame()
  /*api.startGame(data)
    .then(gameLogic.newGame)
      .then(ui.startSuccess)
      .catch(ui.startFailure)
    .catch(ui.startFailure) */
}

const onPlayerTurn = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('event.target is', event.target.id)
  /* api.playerTurn(data)
    .then(ui.validMove)
    .catch(ui.invalidMove)
*/}

const addHandlers = function () {
  $('#start-button').on('submit', onNewGame)
  $('.box').on('click', onPlayerTurn)
}

module.exports = {
  addHandlers,
  gameLogic
}
