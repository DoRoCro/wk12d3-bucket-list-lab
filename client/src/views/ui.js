var Countries = require('../models/countries.js')

var UI = function () {
  var countries = new Countries()
  console.log(countries)
}

module.exports = UI
