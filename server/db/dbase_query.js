var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID

var DBaseQuery = function () {
  this.url = 'mongodb://localhost:27017/bucket_list'
  this.collection = 'selected'
}

DBaseQuery.prototype = {

  all: function (onQueryFinished) {
    MongoClient.connect(this.url, function (err, db) {
      if (db) {
        // console.log(this.collection)
        var collection = db.collection(this.collection)
        collection.find().toArray(function (err, docs) {
          onQueryFinished(docs)
        })
      }
    }.bind(this))
  },

  findCountryByName: function (name, onFound) {
    MongoClient.connect(this.url, function (err, db) {
      if (db) {
        var collection = db.collection(this.collection)
        collection.find({name: name}).toArray(function (err, docs) {
          onFound(docs)
        })
      }
    })
  },

  findCountrybyID: function (countryID, onQueryFinished) {
    MongoClient.connect(this.url, function (err, db) {
      if (db) {
        // console.log(this.collection)
        var collection = db.collection(this.collection)
        collection.find({ _id: ObjectID(countryID)}).toArray(function (err, docs) {
          onQueryFinished(docs)
        })
      }
    }.bind(this))
  },

  addToBucketList: function (country) {
    MongoClient.connect(this.url, function (err, db) {
      if (db) {
        var collection = db.collection(this.collection)
        collection.insert(country)
      }
    })
  },

  deleteFromBucketList: function (country) {

  }
}

module.exports = DBaseQuery
