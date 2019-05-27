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

eval("const StockSearchView = __webpack_require__(/*! ./views/stock_search_form_view.js */ \"./client/src/views/stock_search_form_view.js\");\nconst StockModel = __webpack_require__(/*! ./models/stocks.js */ \"./client/src/models/stocks.js\")\nconst StockGridView = __webpack_require__(/*! ./views/stocks_grid_view.js */ \"./client/src/views/stocks_grid_view.js\")\n\nconst GraphView = __webpack_require__(/*! ./views/graph_view.js */ \"./client/src/views/graph_view.js\")\n\nconst SavedStocksView = __webpack_require__(/*! ./views/saved_stocks_view.js */ \"./client/src/views/saved_stocks_view.js\");\nconst SavedStocksGridView = __webpack_require__(/*! ./views/saved_stocks_grid_view.js */ \"./client/src/views/saved_stocks_grid_view.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  const element = document.querySelector('#input_stock_pick')\n  const stocksearchview = new StockSearchView(element)\n  stocksearchview.bindEvents();\n\n\n  const container = document.querySelector('#stock_search_stock')\n  const stockGridView = new StockGridView(container)\n  stockGridView.bindEvents()\n\n  const graphContainer = document.querySelector('#graph')\n  const graphView = new GraphView(graphContainer)\n  graphView.bindEvents()\n\n  const realTimeStockPrice = 'https://financialmodelingprep.com/api/company/real-time-price/'\n  const historicalStockPrice = 'https://financialmodelingprep.com/api/v3/historical-price-full/'\n  const stockModel = new StockModel(realTimeStockPrice, historicalStockPrice)\n  stockModel.bindEvents()\n  stockModel.getData()\n\n  const savedContainer = document.querySelector('#held_stocks')\n  const savedStocksGridView = new SavedStocksGridView(savedContainer)\n  savedStocksGridView.bindEvents();\n\n\n\n\n\n})\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

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

eval("const RequestHelper = function(url) {\n  this.url = url\n};\n\nRequestHelper.prototype.get = function () {\n  return fetch(this.url)\n  .then((response) => response.json());\n};\n\nRequestHelper.prototype.post = function (payload) {\n  return fetch(this.url, {\n    method: 'POST',\n    body: JSON.stringify(payload),\n    headers: {'Content-Type': 'application/json'}\n  })\n  .then((response) => response.json())\n};\n\n\n\nmodule.exports = RequestHelper\n\n\n//# sourceURL=webpack:///./client/src/helpers/request_helper.js?");

/***/ }),

/***/ "./client/src/models/stocks.js":
/*!*************************************!*\
  !*** ./client/src/models/stocks.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./client/src/helpers/request_helper.js\")\n\n\n\nconst Stock = function (urlReal, urlHistorical) {\n  this.urlReal = urlReal\n  this.urlHistorical = urlHistorical\n  this.request = new RequestHelper('http://localhost:3000/api/stocks')\n};\n\nStock.prototype.bindEvents = function () {\n\n  const companyInfoFromApi = this.urlHistorical\n  const companyRealTimeApi = this.urlReal\n\n  PubSub.subscribe('SearchFormView:ticker-selected', (event) => {\n    const stockTickerName = event.detail.toUpperCase()\n    const requestHistorical = new RequestHelper(companyInfoFromApi + stockTickerName)\n    requestHistorical.get()\n    .then((data) => {\n      const companyInfo = data\n      PubSub.publish(\"StockModel: Company-historical-info\" , companyInfo );\n\n    })\n    const json = '?datatype=json'\n    const requestRealTimeApi = new RequestHelper(companyRealTimeApi + stockTickerName + json)\n    console.log(requestRealTimeApi);\n    requestRealTimeApi.get()\n    .then((data) => {\n      const companyInfoReal = data\n      console.log(data);\n      PubSub.publish('StockModel: Company-info-real-time-info', data)\n    })\n\n  })\n\n\n  PubSub.subscribe('stock_view:shares-bought-published', (event) => {\n    console.log(event.detail);\n    this.postBoughtStock(event.detail)\n  })\n};\n\n\nStock.prototype.getData = function() {\n  this.request.get()\n  .then((stocks) =>{\n    PubSub.publish('Stock:data-loaded', stocks);\n  })\n  .catch(console.error)\n}\n\n\nStock.prototype.postBoughtStock = function(BuyShareInfo){\n  this.request.post(BuyShareInfo)\n  .then((shares) => {\n    PubSub.publish('Stock:data-loaded', shares)\n  })\n}\n\n\n\n\n\n\n\nmodule.exports = Stock;\n\n\n//# sourceURL=webpack:///./client/src/models/stocks.js?");

/***/ }),

/***/ "./client/src/views/graph_view.js":
/*!****************************************!*\
  !*** ./client/src/views/graph_view.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub */ \"./client/src/helpers/pub_sub.js\")\n\nconst GraphView = function(container){\n    this.container = container\n}\n\n\nGraphView.prototype.bindEvents = function(){\n    PubSub.subscribe(\"StockModel: Company-historical-info\", (event) => {\n        console.log('company info', event.detail);\n        const companyInfo = event.detail;\n        this.render(companyInfo)\n        })\n}\n\nGraphView.prototype.render = function(companyInfo){\n    const companyName = companyInfo.symbol\n    const shareDateNoHyphen = companyInfo.historical.map(days => Date.parse(days.date))\n    console.log(shareDateNoHyphen)\n    // const shareDateInt = shareDateNoHyphen.map(date => parseInt(date))\n    // console.log('should be the int of the date', shareDateInt);\n\n    // const shareDateUTC = shareDateNoHyphen.map(date => [Date.UTC(date)])\n    // console.log('this is the utc dates', shareDateUTC);\n    // const firstDay = shareDateUTC[0]\n    // console.log(firstDay);\n\n    const sharePrice = companyInfo.historical.map(day => day.close)\n    console.log('sharePirce', sharePrice);\n\n    const sharePriceArr = sharePrice.map(days => [Object.values(days)])\n    // const shareDate = companyInfo.historical.map(day => day.date)\n    console.log('array of days?', sharePriceArr);\n    // console.log(shareDate);\n\n\n    this.renderGraph(companyName, sharePrice, shareDateNoHyphen)\n}\n\nGraphView.prototype.renderGraph = function(companyName, sharePrice, shareDateNoHyphen){\n    Highcharts.stockChart('graph', {\n\n\n        title: {\n            text: `${companyName} Stock Price History (USD)`\n                },\n\n        subtitle: {\n            text: 'Data supplied by financialmodelingprep.com'\n        },\n\n        xAxis: {\n            data: shareDateNoHyphen,\n            breaks: [{ // Nights\n                from: Date.UTC(2014, 5, 30),\n                to: Date.UTC(2014, 6, 2),\n                repeat: 7 * 24 * 36e5\n            }],\n        },\n\n        rangeSelector: {\n            buttons: [{\n                type: 'month',\n                count: 1,\n                text: '1M'\n            }, {\n                type: 'year',\n                count: 1,\n                text: '1Y'\n            }, {\n                type: 'all',\n                count: 1,\n                text: 'All'\n            }],\n            selected: 1,\n            inputEnabled: false\n        },\n\n        series: [{\n            name: companyName,\n            type: 'area',\n            data: sharePrice,\n            pointStart: Date.UTC(2014, 4, 28), // firstDay[0],\n            pointInterval: 24 * 3600 * 1000,\n            // gapSize: 5,\n            tooltip: {\n                valueDecimals: 2\n            },\n            fillColor: {\n                linearGradient: {\n                    x1: 0,\n                    y1: 0,\n                    x2: 0,\n                    y2: 1\n                },\n                stops: [\n                    [0, Highcharts.getOptions().colors[0]],\n                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]\n                ]\n            },\n            threshold: null\n        }]\n    })\n }\n\n\n\n\n        //     Highcharts.chart('graph', {\n        //         chart: {\n        //             zoomType: 'x'\n        //         },\n        //         title: {\n        //             text: `${companyName} Share Price History`\n        //         },\n        //         subtitle: {\n        //             text: document.ontouchstart === undefined ?\n        //                 'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'\n        //         },\n        //         xAxis: {\n        //             type: 'datetime',\n        //             dateTimeLabelFormats: {\n        //                 day: '%Y %m %d'\n        //              },\n        //         },\n        //         yAxis: {\n        //             title: {\n        //                 text: 'Price per Share (USD)'\n        //             }\n        //         },\n        //         legend: {\n        //             enabled: false\n        //         },\n        //         plotOptions: {\n        //             area: {\n        //                 fillColor: {\n        //                     linearGradient: {\n        //                         x1: 0,\n        //                         y1: 0,\n        //                         x2: 0,\n        //                         y2: 1\n        //                     },\n        //                     stops: [\n        //                         [0, Highcharts.getOptions().colors[0]],\n        //                         [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]\n        //                     ]\n        //                 },\n        //                 marker: {\n        //                     radius: 2\n        //                 },\n        //                 lineWidth: 1,\n        //                 states: {\n        //                     hover: {\n        //                         lineWidth: 1\n        //                     }\n        //                 },\n        //                 threshold: null\n        //             }\n        //         },\n\n        //         series: [{\n        //             type: 'area',\n        //             name: 'Price per Share in USD',\n        //             data: sharePrice,\n        //             pointStart: Date.UTC(2014, 04, 28),\n        //             pointInterval: 24 * 3600 * 1000 // one day\n        //         }]\n        //     });\n        // }\n\n\n\n\n// GraphView.prototype.render = function(companyInfo){\n//     console.log(companyInfo.financials[0].Revenue);\n//     console.log(companyInfo.symbol);\n//     const companyName = companyInfo.symbol\n//     const revenueString = companyInfo.financials.map(year => year.Revenue)\n//     console.log(revenueString);\n//     const revenue = revenueString.map(rev => parseFloat(rev))\n//     console.log('all the revenue array', revenue);\n//     this.renderGraph(companyName, revenue)\n// }\n\n// GraphView.prototype.renderGraph = function(companyName, revenue){\n//     console.log('renderGraph data', revenue);\n\n//     Highcharts.chart('graph', {\n\n//         title: {\n//             text: `${companyName} share price, 2010-2019`\n//         },\n\n//         subtitle: {\n//             text: 'Source: financialmodelingprep.com'\n//         },\n\n//         yAxis: {\n//             title: {\n//                 text: 'US Dollars'\n//             }\n//         },\n//         legend: {\n//             layout: 'vertical',\n//             align: 'right',\n//             verticalAlign: 'middle'\n//         },\n\n//         plotOptions: {\n//             series: {\n//                 label: {\n//                     connectorAllowed: false\n//                 },\n//                 pointStart: 2010\n//             }\n//         },\n\n//         series: [{\n//             name: 'Revenue',\n//             data: revenue\n\n//         }],\n\n//         responsive: {\n//             rules: [{\n//                 condition: {\n//                     maxWidth: 500\n//                 },\n//                 chartOptions: {\n//                     legend: {\n//                         layout: 'horizontal',\n//                         align: 'center',\n//                         verticalAlign: 'bottom'\n//                     }\n//                 }\n//             }]\n//         }\n\n//         });\n// }\n\nmodule.exports = GraphView;\n\n\n//# sourceURL=webpack:///./client/src/views/graph_view.js?");

/***/ }),

/***/ "./client/src/views/saved_stocks_grid_view.js":
/*!****************************************************!*\
  !*** ./client/src/views/saved_stocks_grid_view.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst SavedStocksView = __webpack_require__(/*! ./saved_stocks_view.js */ \"./client/src/views/saved_stocks_view.js\");\n\nconst SavedStocksGridView = function(container){\n  this.container = container;\n}\n\nSavedStocksGridView.prototype.bindEvents = function(){\n  PubSub.subscribe('Stock:data-loaded', (event) =>{\n\n    this.render(event.detail);\n\n  })\n}\n\nSavedStocksGridView.prototype.render = function(stocks) {\n  this.container.innerHTML = '';\n  const stockView = new SavedStocksView(this.container);\n  stocks.forEach((stock) => stockView.render(stock))\n  console.log(\"banana\");\n}\n\n\nmodule.exports = SavedStocksGridView;\n\n\n//# sourceURL=webpack:///./client/src/views/saved_stocks_grid_view.js?");

/***/ }),

/***/ "./client/src/views/saved_stocks_view.js":
/*!***********************************************!*\
  !*** ./client/src/views/saved_stocks_view.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst SavedStocksView = function(container) {\n  this.container = container;\n}\n\nSavedStocksView.prototype.render = function(stocks) {\n\n  const stockContainer = document.createElement('div')\n  stockContainer.id = 'stock';\n  this.container.appendChild(stockContainer)\n\n  const companyName = this.createHeading(\"Name: \" + stocks.name)\n\n  stockContainer.appendChild(companyName)\n\n  const companyPrice = this.createHeading(\"Price: \" + stocks.strike_price)\n  stockContainer.appendChild(companyPrice)\n\n  const companyStrikePrice = this.createHeading(\"Quantity: \" + stocks.quantity)\n  stockContainer.appendChild(companyStrikePrice)\n\n\n}\n\nSavedStocksView.prototype.createHeading = function(textContent){\n  const heading = document.createElement('p');\n  heading.textContent = textContent;\n  return heading;\n\n\n\n\n\n}\n\nmodule.exports = SavedStocksView;\n\n\n//# sourceURL=webpack:///./client/src/views/saved_stocks_view.js?");

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

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst StockView = function(container){\n  this.container = container\n  console.log(this.container);\n}\n\nStockView.prototype.render = function (companyInfo) {\n\n  const companyContainerLeft = document.createElement('div');\n  const companyContainerRight = document.createElement('div');\n  companyContainerLeft.id = 'companySearchLeft'\n  companyContainerLeft.id = 'companySearchRight'\n  this.container.appendChild(companyContainerLeft)\n  this.container.appendChild(companyContainerRight)\n\n  const companySymbol = this.createSymbol(companyInfo.symbol)\n  companyContainerLeft.appendChild(companySymbol)\n  console.log(companyInfo.historical.length);\n  const displayCompanyClose =`close: ${companyInfo.historical[companyInfo.historical.length -1].close}`\n  const companyRevenue = this.createClose(displayCompanyClose)\n  companyContainerLeft.appendChild(companyRevenue)\n\n  const displayCompanyOpen =`Open: ${companyInfo.historical[companyInfo.historical.length -1].open}`\n  const companyGrossProfit = this.createOpen(displayCompanyOpen)\n  companyContainerLeft.appendChild(companyGrossProfit)\n\n  const displayCompanyVolume = `Volume: ${companyInfo.historical[companyInfo.historical.length -1].volume}`\n  const companyVolume = this.createVolume(displayCompanyVolume)\n  companyContainerRight.appendChild(companyVolume)\n\n\n  const buyShareForm = this.createForm(companyInfo)\n  companyContainerRight.appendChild(buyShareForm)\n\n};\n\nStockView.prototype.createSymbol = function(textContent) {\n  const symbol = document.createElement('h1')\n  symbol.textContent = textContent\n  return symbol\n};\n\nStockView.prototype.createClose = function (textContent) {\n  const close = document.createElement('h4')\n  close.textContent = textContent\n  return close\n};\n\nStockView.prototype.createOpen= function (textContent) {\n  const open = document.createElement('h4')\n  open.textContent = textContent\n  return open\n};\n\nStockView.prototype.createVolume= function (textContent) {\n  const volume = document.createElement('h4')\n  volume.textContent = textContent\n  return volume\n};\n\nStockView.prototype.createForm = function (companyInfo){\n\n  const companyInfoFinances = companyInfo.historical[companyInfo.historical.length -1]\n  const currentSharePrice = document.createElement('form')\n  const inputCompanyName = document.createElement('input')\n  const buyInputPrice = document.createElement('input')\n  const buyInputPriceQauntity = document.createElement('input')\n  const buyShareButton = document.createElement('input')\n\n  currentSharePrice.setAttribute('id', 'buy-share-form')\n\n  inputCompanyName.setAttribute('type', 'text')\n  inputCompanyName.setAttribute('name', 'company')\n  inputCompanyName.setAttribute('value', companyInfo.symbol)\n  inputCompanyName.setAttribute(\"hidden\", true)\n\n  buyInputPrice.setAttribute('type', 'text')\n  buyInputPrice.setAttribute('name', 'strike_price')\n  buyInputPrice.setAttribute('value', companyInfoFinances.open)\n  buyInputPrice.setAttribute(\"hidden\", true)\n\n  buyInputPriceQauntity.setAttribute('type', 'number')\n  buyInputPriceQauntity.setAttribute('name', 'quantity')\n\n  buyShareButton.setAttribute('type', 'submit')\n  buyShareButton.setAttribute('value', 'buy')\n\n  currentSharePrice.appendChild(inputCompanyName)\n  currentSharePrice.appendChild(buyInputPrice)\n  currentSharePrice.appendChild(buyInputPriceQauntity)\n  currentSharePrice.appendChild(buyShareButton)\n  return currentSharePrice\n};\n\nStockView.prototype.handleSubmit = function (){\n  const saveStockFormContainer = document.querySelector('#buy-share-form');\n  saveStockFormContainer.addEventListener('submit', (event)=>{\n    event.preventDefault()\n    const data = this.createPurchase(event.target)\n    PubSub.publish('stock_view:shares-bought-published', data )\n  })\n};\n\n\nStockView.prototype.createPurchase = function (form) {\n  const newPurchase = {\n    name: form.company.value,\n    quantity: form.quantity.value,\n    strike_price:form.strike_price.value\n  }\n  console.log(newPurchase);\n  return newPurchase\n};\n\n\n\n\n\n\n\n\nmodule.exports = StockView;\n\n\n//# sourceURL=webpack:///./client/src/views/stock_view.js?");

/***/ }),

/***/ "./client/src/views/stocks_grid_view.js":
/*!**********************************************!*\
  !*** ./client/src/views/stocks_grid_view.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\nconst StockView = __webpack_require__ (/*! ./stock_view.js */ \"./client/src/views/stock_view.js\")\n\n\nconst StockGridView = function(container){\n  this.container = container;\n\n}\n\n\n\nStockGridView.prototype.bindEvents = function () {\n  PubSub.subscribe(\"StockModel: Company-historical-info\", (event) => {\n    this.container.innerHTML=\"\";\n    this.render(event.detail)\n    this.postBoughtStock()\n  })\n};\n\n\n\n\n\n\nStockGridView.prototype.render = function(companyInfo) {\n  const stockView = new StockView(this.container)\n  stockView.render(companyInfo)\n};\n\n// StockGridView.prototype.getSavedData = function(){\n//   const stockView = new StockView(this.container)\n//   stockView.buyStocks()\n// }\n\nStockGridView.prototype.postBoughtStock = function(){\n  const stockView = new StockView(this.container)\n  stockView.handleSubmit()\n}\n\n\nmodule.exports = StockGridView;\n\n\n//# sourceURL=webpack:///./client/src/views/stocks_grid_view.js?");

/***/ })

/******/ });