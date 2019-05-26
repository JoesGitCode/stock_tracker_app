/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const StockSearchView = __webpack_require__(/*! ./views/stock_search_form_view.js */ \"./client/src/views/stock_search_form_view.js\");\nconst StockModel = __webpack_require__(/*! ./models/stocks.js */ \"./client/src/models/stocks.js\")\nconst StockGridView = __webpack_require__(/*! ./views/stocks_grid_view.js */ \"./client/src/views/stocks_grid_view.js\")\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  const element = document.querySelector('#input_stock_pick')\n  const stocksearchview = new StockSearchView(element)\n  stocksearchview.bindEvents();\n\n\n  const container = document.querySelector('#stock_search_stock')\n  const stockGridView = new StockGridView(container)\n  stockGridView.bindEvents()\n\n\n  const stockModel = new StockModel('https://financialmodelingprep.com/api/v3/historical-price-full/')\n  stockModel.bindEvents()\n})\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n publish: function (channel, payload) {\n   console.log(`PUBLISHED ON ${channel}`);\n   const event = new CustomEvent(channel, {\n     detail: payload\n   });\n   document.dispatchEvent(event);\n },\n\n subscribe: function (channel, callback) {\n   console.log(`SUBSCRIBED ON ${channel}`);\n   document.addEventListener(channel, callback);\n }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/helpers/request_helper.js":
/*!**********************************************!*\
  !*** ./client/src/helpers/request_helper.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function(url) {\n  this.url = url\n};\n\nRequestHelper.prototype.get = function () {\n  return fetch(this.url)\n    .then((response) => response.json());\n};\n\n\nmodule.exports = RequestHelper\n\n\n//# sourceURL=webpack:///./client/src/helpers/request_helper.js?");

/***/ }),

/***/ "./client/src/models/stocks.js":
/*!*************************************!*\
  !*** ./client/src/models/stocks.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./client/src/helpers/request_helper.js\")\n\nconst Stock = function (url) {\n  this.url = url\n  console.log(this.url);\n};\n\nStock.prototype.bindEvents = function () {\n  // console.log('subscribed to ticker selected');\n  PubSub.subscribe('SearchFormView:ticker-selected', (event) => {\n  const stockTickerName = event.detail.toUpperCase()\n  console.log(\"i am the stock ticker\", stockTickerName);\n  const companyInfoFromApi = this.url\n  const json = '?datatype=json'\n\n  const finalUrl = companyInfoFromApi + stockTickerName + json\n  console.log(finalUrl);\n  // console.log(companyInfoFromApi);\n  PubSub.publish(\"StockModel: Company-realtime-info\" , finalUrl )\n\n  const request = new RequestHelper(companyInfoFromApi + stockTickerName)\n  console.log(request);\n  request.get()\n  .then((data) => {\n    const companyInfo = data\n    console.log('compnay info >??????', companyInfo);\n\n    PubSub.publish(\"StockModel: Company-realtime-info\" , companyInfo )\n  })\n\n  })\n};\n\n\nStock.prototype.getData = function() {\n    this.request.get()\n      .then((stocks) =>{\n        PubSub.publish('Stock:data-loaded', stocks);\n      })\n      .catch(console.error)\n}\n\nmodule.exports = Stock;\n\n\n//# sourceURL=webpack:///./client/src/models/stocks.js?");

/***/ }),

/***/ "./client/src/views/stock_search_form_view.js":
/*!****************************************************!*\
  !*** ./client/src/views/stock_search_form_view.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst StockSearchView = function (element) {\n  this.element = element\n}\n\nStockSearchView.prototype.bindEvents = function () {\n  this.element.addEventListener('submit', (event) =>{\n    event.preventDefault()\n\n    const searchStockDiplayed =  document.querySelector(\"#stock_search_stock\")\n    const data = event.target.stockname.value\n    PubSub.publish('SearchFormView:ticker-selected', data)\n  })\n\n};\n\nmodule.exports = StockSearchView\n\n\n//# sourceURL=webpack:///./client/src/views/stock_search_form_view.js?");

/***/ }),

/***/ "./client/src/views/stock_view.js":
/*!****************************************!*\
  !*** ./client/src/views/stock_view.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst StockView = function(container){\n  this.container = container\n}\n\nStockView.prototype.render = function (companyInfo) {\n\n  const companyContainerLeft = document.createElement('div');\n  const companyContainerRight = document.createElement('div');\n  companyContainerLeft.id = 'companySearchLeft'\n  companyContainerLeft.id = 'companySearchRight'\n  this.container.appendChild(companyContainerLeft)\n  this.container.appendChild(companyContainerRight)\n\n  const companySymbol = this.createSymbol(companyInfo.symbol)\n  companyContainerLeft.appendChild(companySymbol)\n\n  const displayCompanyClose =`close: ${companyInfo.historical[companyInfo.historical.length -1].close}`\n  const companyRevenue = this.createClose(displayCompanyClose)\n  companyContainerLeft.appendChild(companyRevenue)\n\n  const displayCompanyOpen =`Open: ${companyInfo.historical[companyInfo.historical.length -1].open}`\n  const companyGrossProfit = this.createOpen(displayCompanyOpen)\n  companyContainerLeft.appendChild(companyGrossProfit)\n\n  const displayCompanyVolume = `Volume: ${companyInfo.historical[companyInfo.historical.length -1].volume}`\n  const companyVolume = this.createVolume(displayCompanyVolume)\n  companyContainerRight.appendChild(companyVolume)\n\n  const currentSharePrice = companyInfo.historical[companyInfo.historical.length -1]\n  const buyShareForm = this.createForm(currentSharePrice)\n\n  // const companyRevenue = this.createRevenue(companyInfo.financials[0].Revenue)\n  // companyContainer.appendChild(companyRevenue)\n};\n\nStockView.prototype.createSymbol = function(textContent) {\n  const symbol = document.createElement('h1')\n  symbol.textContent = textContent\n  return symbol\n};\n\nStockView.prototype.createClose = function (textContent) {\n  const close = document.createElement('h4')\n  close.textContent = textContent\n  return close\n};\n\nStockView.prototype.createOpen= function (textContent) {\n  const open = document.createElement('h4')\n  open.textContent = textContent\n  return open\n};\n\nStockView.prototype.createVolume= function (textContent) {\n  const volume = document.createElement('h4')\n  volume.textContent = textContent\n  return volume\n};\n\n// StockView.prototype.createForm(companyInfo){\n//   const currentShareprice = document.createElement('form')\n//   const buy\n//   currentSharePrice.appendChild\n// }\n\n\n\nmodule.exports = StockView;\n\n\n//# sourceURL=webpack:///./client/src/views/stock_view.js?");

/***/ }),

/***/ "./client/src/views/stocks_grid_view.js":
/*!**********************************************!*\
  !*** ./client/src/views/stocks_grid_view.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\nconst StockView = __webpack_require__ (/*! ./stock_view.js */ \"./client/src/views/stock_view.js\")\n\n\nconst StockGridView = function(container){\n  this.container = container;\n\n}\n\nStockGridView.prototype.bindEvents = function(){\n  PubSub.subscribe('Stock:data-loaded', (event) =>{\n  console.log(event.detail)\n    this.render(event.detail);\n\n  })\n}\n\n\nStockGridView.prototype.bindEvents = function () {\n  PubSub.subscribe(\"StockModel: Company-realtime-info\", (event) => {\n      this.container.innerHTML=\"\";\n\n      this.render(event.detail)\n  })\n};\n\nStockGridView.prototype.render = function(companyInfo) {\n  const stockView = new StockView(this.container)\n  stockView.render(companyInfo)\n};\n\n\nmodule.exports = StockGridView;\n\n\n//# sourceURL=webpack:///./client/src/views/stocks_grid_view.js?");

/***/ })

/******/ });