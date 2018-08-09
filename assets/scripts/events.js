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

let logicCheck0 = function (event) {
  if (gameLogic.gameBoard[0] === undefined) {
    gameLogic.updateBoard(gameLogic.gameBoard[0], gameLogic.actualPlayer,)
    //ui.validMove(event.target, gameLogic.gameBoard[0]))
  } else ui.invalidMove()
}

let logicCheck1 = function (event) {
  if (gameLogic.gameBoard[1] === undefined) {
    ui.validMove(event.target, gameLogic.actualPlayer)
  }
}

let logicCheck2 = function (event) {
  if (gameLogic.gameBoard[2] === undefined) {
    ui.validMove(event.target, gameLogic.actualPlayer)
  }
}

let logicCheck3 = function (event) {
  if (gameLogic.gameBoard[3] === undefined) {
    ui.validMove(event.target, gameLogic.actualPlayer)
  }
}

let logicCheck4 = function (event) {
  if (gameLogic.gameBoard[3] === undefined) {
    ui.validMove(event.target, gameLogic.actualPlayer)
  }
}

let logicCheck5 = function (event) {
  if (gameLogic.gameBoard[3] === undefined) {
    ui.validMove(event.target, gameLogic.actualPlayer)
  }
}

let logicCheck6 = function (event) {
  if (gameLogic.gameBoard[3] === undefined) {
    ui.validMove(event.target, gameLogic.actualPlayer)
  }
}

let logicCheck7 = function (event) {
  if (gameLogic.gameBoard[3] === undefined) {
    ui.validMove(event.target, gameLogic.actualPlayer)
  }
}

let logicCheck8 = function (event) {
  if (gameLogic.gameBoard[3] === undefined) {
    ui.validMove(event.target, gameLogic.actualPlayer)
  }
}

let logicCheck9 = function (event) {
  if (gameLogic.gameBoard[3] === undefined) {
    ui.validMove(event.target, gameLogic.actualPlayer)
  }
}

const addHandlers = function () {
  $('#start-button').on('submit', onNewGame)
  $('#box0').on('click', logicCheck0)
  $('#box1').on('click', logicCheck1)
  $('#box2').on('click', logicCheck2)
  $('#box3').on('click', logicCheck4)
  $('#box4').on('click', logicCheck5)
  $('#box5').on('click', logicCheck6)
  $('#box6').on('click', logicCheck7)
  $('#box7').on('click', logicCheck8)
  $('#box8').on('click', logicCheck9)
}

module.exports = {
  addHandlers,
}
