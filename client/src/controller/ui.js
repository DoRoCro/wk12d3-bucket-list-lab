var Countries = require('../models/countries.js')

var UI = function () {
  var countries = new Countries('https://restcountries.eu/rest/v1')
  countries.getData(function () {
    console.log(countries.countries)
  })
}

module.exports = UI
