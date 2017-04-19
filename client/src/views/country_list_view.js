
var CountryList = function () {
}

CountryList.prototype = {
  populate: function (countries) {
    var ul = document.querySelector('#countries-list')
    countries.forEach(function (country) {
      var li = document.createElement('li')
      var label = document.createElement('label')
      var checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
      checkbox.id = country.name
      checkbox.value = country.name
      label.for = country.name
      label.innerHTML = country.name
      ul.listStyle = 'none'
      ul.appendChild(li)
      li.appendChild(checkbox)
      li.appendChild(label)
      checkbox.addEventListener('change', function () {
        console.log('changed ', checkbox.value)
        console.log('checked? ', checkbox.checked)
      })
    })
  }
}

module.exports = CountryList
