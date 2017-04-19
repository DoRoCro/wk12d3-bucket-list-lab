
var CountryList = function () {
}

CountryList.prototype = {
  populate: function (countries) {
    var ul = document.querySelector('#countries-list')
    countries.forEach(function (country) {
      var li = document.createElement('li')
      li.innerText = country.name
      ul.appendChild(li)
    })
  }
}

module.exports = CountryList
