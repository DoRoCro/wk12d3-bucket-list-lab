var express = require('express')
// var app = express()
var dBaseRouter = express.Router()

var DBaseQuery = require('../db/dbase_query')
var dBaseQuery = new DBaseQuery()

// bucket_list countries
dBaseRouter.get('/', function (req, res) {
  dBaseQuery.all(function (docs) {
    res.json(docs)
  })
})

module.exports = dBaseRouter
