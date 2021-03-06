var Countries = function (url) {
  this.url = url,
  this.countries = []
}

Countries.prototype = {
  getData: function (callback) {
    var request = new XMLHttpRequest()
    request.open('GET', this.url)

    request.onload = function () {
      if (request.status !== 200) return
      var jsonString = request.responseText
      var countries = JSON.parse(jsonString)
      this.countries = countries
      callback()
    }.bind(this)
    request.send()
  }

}

module.exports = Countries
