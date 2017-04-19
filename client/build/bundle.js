/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ function(module, exports) {

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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

var UI = __webpack_require__(3)

var app = function () {
  new UI()
}

window.onload = app


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var Countries = __webpack_require__(1)
var CountryList = __webpack_require__(4)

var UI = function () {
  var countries = new Countries('https://restcountries.eu/rest/v1')
  countries.getData(function () {
    console.log(countries.countries)
    var countrylist = new CountryList()

    countrylist.populate(countries.countries)
  })
}

module.exports = UI


/***/ },
/* 4 */
/***/ function(module, exports) {


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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map