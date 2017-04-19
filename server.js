var express = require('express')
var app = express()

// TODO bodyparser?

// app.use(require('./controllers'))

app.use(express.static('./client/build'))

app.listen(3000, function () {
  console.log('App running on port ' + this.address().port)
})
