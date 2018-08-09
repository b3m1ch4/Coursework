// required files
const getFormFields = require('../../../../lib/get-form-fields.js')
const authApi = require('./authApi.js')
const authUi = require('./authUi.js')
//
const onSignUp = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  //
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onSignIn = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  //
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

const onChangePassword = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data from form', data)
  //
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const onSignOut = function () {
//  event.preventDefault()
  const data = getFormFields(event.target)
  //
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

const authHandlers = function () {
// target the id of the form itself
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  authHandlers // same as addHandlers: addHandlers
}
