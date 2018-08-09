// required files
const config = require('../config.js')
//
const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: 'apiUrl'
  })
}
