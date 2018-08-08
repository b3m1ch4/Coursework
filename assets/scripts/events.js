const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onStartGame = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('the game started')
  api.startGame(data)
    .then(ui.startSuccess)
    .catch(ui.startFailure)
}

const onPlayerTurn = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('event.target is', event.target)
  api.playerTurn(data)
    .then(ui.validMove)
    .catch(ui.invalidMove)
}

const addHandlers = function () {
  $('#start-button').on('submit', onStartGame)
  $('.box').on('click', onPlayerTurn)
}

module.exports = {
  addHandlers
}
