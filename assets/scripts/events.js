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

const placeToken = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('actualPlayer is', gameLogic.actualPlayer)
  console.log('playerToken is', gameLogic.playerToken)
  $().html(gameLogic.playerToken)
}

const addHandlers = function () {
  $('#start-button').on('submit', onNewGame)
  $('.box').on('click', placeToken)
}

module.exports = {
  addHandlers,
  gameLogic
}
