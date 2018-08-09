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
  $(event.target.id).html('<p> x </p>')
}

const addHandlers = function () {
  $('#start-button').on('submit', onNewGame)
  $('.box').on('click', function () {console.log('token is', gameLogic.playerToken)})
  $('#box1').on('click', function () {console.log('token is', )})
}

module.exports = {
  addHandlers,
  gameLogic
}
