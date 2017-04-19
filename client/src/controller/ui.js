var Countries = require('../models/countries.js')
var CountryList = require('../views/country_list_view.js')
var BucketList = require('../models/bucket_list.js')

var UI = function () {
  var countries = new Countries('https://restcountries.eu/rest/v1')
  countries.getData(function () {
    console.log(countries.countries)
    var countrylist = new CountryList()

    countrylist.populate(countries.countries)
    var bucketList = new BucketList('http://localhost:3000/api/bucket_list')
    bucketList.getList(function () {
      console.log(bucketList.countries)
      countrylist.tickBoxesInBucketList(bucketList.countries)
    })
  })
}

module.exports = UI
