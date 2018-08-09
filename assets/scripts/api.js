const config = require('./config.js')
//
const start = function () {
  return $.ajax({
    method: 'POST',
    url: 'apiUrl'
  })
}
//
module.exports = {
  start
}
//
/* examples from class

const index = function () {
  return $.ajax({
    method: 'GET',
    url: 'https://wdi-library-api.herokuapp.com/books'
  })
}

const show = function (id) {
  return $.ajax({
    method: 'GET',
    url: 'https://wdi-library-api.herokuapp.com/books/' + id
  })
}

const create = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://wdi-library-api.herokuapp.com/books/',
    data: data
  })
}

const patch = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://wdi-library-api.herokuapp.com/books/' + data.book.id,
    data: data
  })
}

const destroy = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: 'https://wdi-library-api.herokuapp.com/books/' + id
  })
} */ 
