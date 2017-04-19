var express = require('express')
// var app = express()
var dBaseRouter = express.Router()

var DBaseQuery = require('../db/dbase_query')
var dBaseQuery = new DBaseQuery()

// find a country in the bucket list,[object] if present, [] if not found
dBaseRouter.get('/:id', function (req, res) {
  dBaseQuery.findCountrybyID(req.params.id, function (doc) {
    res.json(doc)
  })
})

// bucket_list countries
dBaseRouter.get('/', function (req, res) {
  dBaseQuery.all(function (docs) {
    res.json(docs)
  })
})

module.exports = dBaseRouter
