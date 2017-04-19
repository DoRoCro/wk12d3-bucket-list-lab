var Countries = require('../models/countries.js')
var CountryList = require('../views/country_list_view.js')

var UI = function () {
  var countries = new Countries('https://restcountries.eu/rest/v1')
  countries.getData(function () {
    console.log(countries.countries)
    var countrylist = new CountryList()

    countrylist.populate(countries.countries)
  })
}

module.exports = UI
