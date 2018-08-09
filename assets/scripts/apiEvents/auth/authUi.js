// req
// const authenticate = require('./authApi.js')
//
const signUpSuccess = function () {
  $('#userMessage').text('registration success!')
  $('#userMessage').removeClass()
  $('#userMessage').addClass('success')
  $('#sign-up input').val('')
}

const signUpFail = function () {
  $('#userMessage').text('registration failure :(')
  $('#userMessage').removeClass()
  $('#userMessage').addClass('fail')
  $('#sign-up input').val('')
}
//
const signInSuccess = function (response) {
  $('#userMessage').text('welcome back!')
  $('#userMessage').removeClass()
  $('#userMessage').addClass('success')
  $('#sign-in input').val('')
  store.user = response.user
  $('#change-password').show()
  $('#sign-out').show()
  $('#game-board').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}
//
const signInFail = function () {
  $('#userMessage').text('login failure, please try again')
  $('#userMessage').removeClass()
  $('#userMessage').addClass('fail')
  $('#sign-in input').val('')
}
//
const changePasswordSuccess = function () {
  $('#userMessage').text('your password was updated')
  $('#userMessage').removeClass()
  $('#userMessage').addClass('success')
  $('#change-password input').val('')
}
//
const changePasswordFail = function () {
  $('#userMessage').text('password could not be changed, please try again')
  $('#userMessage').removeClass()
  $('#userMessage').addClass('fail')
  $('#change-password input').val('')
}
//
const signOutSuccess = function () {
  $('#userMessage').text('see you again soon!')
  $('#userMessage').removeClass()
  $('#userMessage').addClass('success')
}
//
const signOutFail = function () {
  $('#userMessage').text('your request could not be completed')
  $('#userMessage').removeClass()
  $('#userMessage').addClass('fail')
}
//
  module.exports = {
    signUpSuccess,
    signUpFail,
    signInSuccess,
    signInFail,
    changePasswordSuccess,
    changePasswordFail,
    signOutSuccess,
    signOutFail
  }
