'use strict'
//required files
const events = require('./gameplay/gameEvents.js')
const authentication = require('./auth/authEvents.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  events.gameplayHandlers()
  authentication.authHandlers()
  events.userHandlers()
})
