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

eval("const StockSearchView = __webpack_require__(/*! ./views/stock_search_form_view.js */ \"./client/src/views/stock_search_form_view.js\");\nconst StockModel = __webpack_require__(/*! ./models/stocks.js */ \"./client/src/models/stocks.js\")\nconst StockGridView = __webpack_require__(/*! ./views/stocks_grid_view.js */ \"./client/src/views/stocks_grid_view.js\")\nconst GraphView = __webpack_require__(/*! ./views/graph_view.js */ \"./client/src/views/graph_view.js\")\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  const element = document.querySelector('#input_stock_pick')\n  const stocksearchview = new StockSearchView(element)\n  stocksearchview.bindEvents();\n\n\n  const container = document.querySelector('#held_stocks_list_container')\n  const stockGridView = new StockGridView(container)\n  stockGridView.bindEvents()\n\n  const graphContainer = document.querySelector('#graph')\n  const graphView = new GraphView(graphContainer)\n  graphView.bindEvents()\n\n\n  const stockModel = new StockModel('https://financialmodelingprep.com/api/v3/historical-price-full/')\n  stockModel.bindEvents()\n})\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

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

eval("const RequestHelper = function(url){\n     this.url = url\n}\n\nRequestHelper.prototype.get = function(){\n    return fetch(this.url)\n    .then((response) => response.json())\n}\n\n\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./client/src/helpers/request_helper.js?");

/***/ }),

/***/ "./client/src/models/stocks.js":
/*!*************************************!*\
  !*** ./client/src/models/stocks.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./client/src/helpers/request_helper.js\")\n\nconst Stock = function (url) {\n  this.url = url\n  console.log(this.url);\n};\n\nStock.prototype.bindEvents = function () {\n  // console.log('subscribed to ticker selected');\n  PubSub.subscribe('SearchFormView:ticker-selected', (event) => {\n  const stockTickerName = event.detail.toUpperCase()\n  console.log(\"i am the stock ticker\", stockTickerName);\n  const companyInfoFromApi = this.url\n  const json = '?serietype=line'\n  const request = new RequestHelper(companyInfoFromApi + stockTickerName + json)\n  console.log(request);\n  request.get()\n  .then((data) => {\n    const companyInfo = data\n    console.log('compnay info >??????', companyInfo);\n\n    PubSub.publish(\"StockModel: Company-realtime-info\" , companyInfo )\n  })\n  })\n};\n\n\nmodule.exports = Stock;\n\n\n//# sourceURL=webpack:///./client/src/models/stocks.js?");

/***/ }),

/***/ "./client/src/views/graph_view.js":
/*!****************************************!*\
  !*** ./client/src/views/graph_view.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub */ \"./client/src/helpers/pub_sub.js\")\n\nconst GraphView = function(container){\n    this.container = container\n}\n\n\nGraphView.prototype.bindEvents = function(){\n    PubSub.subscribe(\"StockModel: Company-realtime-info\", (event) => {\n        console.log('company info', event.detail);\n        const companyInfo = event.detail;\n        this.render(companyInfo)\n        })\n}\n\nGraphView.prototype.render = function(companyInfo){\n    const companyName = companyInfo.symbol\n    const sharePrice = companyInfo.historical.map(days => days.date.replace(/-/g, \"\"))\n    const sharePriceInt = sharePrice.map(date => parseInt(date))\n    console.log(sharePriceInt);\n    \n    const sharePriceArr = sharePrice.map(days => Object.values(days))\n    // const shareDate = companyInfo.historical.map(day => day.date)\n    console.log('array of days?', sharePriceArr);\n    // console.log(shareDate);\n    \n    \n    this.renderGraph(companyName, sharePriceArr, sharePriceInt)\n}\n\nGraphView.prototype.renderGraph = function(companyName, sharePriceArr, sharePriceInt){\n    \n            Highcharts.chart('graph', {\n                chart: {\n                    zoomType: 'x'\n                },\n                title: {\n                    text: 'USD to EUR exchange rate over time'\n                },\n                subtitle: {\n                    text: document.ontouchstart === undefined ?\n                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'\n                },\n                xAxis: {\n                    categories: sharePriceInt\n                },\n                yAxis: {\n                    title: {\n                        text: 'Exchange rate'\n                    }\n                },\n                legend: {\n                    enabled: false\n                },\n                plotOptions: {\n                    area: {\n                        fillColor: {\n                            linearGradient: {\n                                x1: 0,\n                                y1: 0,\n                                x2: 0,\n                                y2: 1\n                            },\n                            stops: [\n                                [0, Highcharts.getOptions().colors[0]],\n                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]\n                            ]\n                        },\n                        marker: {\n                            radius: 2\n                        },\n                        lineWidth: 1,\n                        states: {\n                            hover: {\n                                lineWidth: 1\n                            }\n                        },\n                        threshold: null\n                    }\n                },\n    \n                series: [{\n                    type: 'area',\n                    name: 'USD to EUR',\n                    data: [[20140428, 78.0232], [20140429, 77.7918], [20140430, 77.4976]]\n                }]\n            });\n        }\n\n\n\n            \n\n// GraphView.prototype.render = function(companyInfo){\n//     console.log(companyInfo.financials[0].Revenue);\n//     console.log(companyInfo.symbol);\n//     const companyName = companyInfo.symbol\n//     const revenueString = companyInfo.financials.map(year => year.Revenue)\n//     console.log(revenueString);\n//     const revenue = revenueString.map(rev => parseFloat(rev))\n//     console.log('all the revenue array', revenue);\n//     this.renderGraph(companyName, revenue)\n// }\n\n// GraphView.prototype.renderGraph = function(companyName, revenue){\n//     console.log('renderGraph data', revenue);\n    \n//     Highcharts.chart('graph', {\n\n//         title: {\n//             text: `${companyName} share price, 2010-2019`\n//         },\n        \n//         subtitle: {\n//             text: 'Source: financialmodelingprep.com'\n//         },\n        \n//         yAxis: {\n//             title: {\n//                 text: 'US Dollars'\n//             }\n//         },\n//         legend: {\n//             layout: 'vertical',\n//             align: 'right',\n//             verticalAlign: 'middle'\n//         },\n        \n//         plotOptions: {\n//             series: {\n//                 label: {\n//                     connectorAllowed: false\n//                 },\n//                 pointStart: 2010\n//             }\n//         },\n        \n//         series: [{\n//             name: 'Revenue',\n//             data: revenue\n            \n//         }],\n        \n//         responsive: {\n//             rules: [{\n//                 condition: {\n//                     maxWidth: 500\n//                 },\n//                 chartOptions: {\n//                     legend: {\n//                         layout: 'horizontal',\n//                         align: 'center',\n//                         verticalAlign: 'bottom'\n//                     }\n//                 }\n//             }]\n//         }\n        \n//         });\n// }\n\nmodule.exports = GraphView;\n\n//# sourceURL=webpack:///./client/src/views/graph_view.js?");

/***/ }),

/***/ "./client/src/views/stock_search_form_view.js":
/*!****************************************************!*\
  !*** ./client/src/views/stock_search_form_view.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst StockSearchView = function (element) {\n  this.element = element\n}\n\nStockSearchView.prototype.bindEvents = function () {\n  this.element.addEventListener('submit', (event) =>{\n    console.log(\"HELLLLLLOOOOOO\");\n    event.preventDefault()\n    const data = event.target.stockname.value\n    console.log(data);\n    PubSub.publish('SearchFormView:ticker-selected', data)\n  })\n\n};\n\nmodule.exports = StockSearchView\n\n\n//# sourceURL=webpack:///./client/src/views/stock_search_form_view.js?");

/***/ }),

/***/ "./client/src/views/stocks_grid_view.js":
/*!**********************************************!*\
  !*** ./client/src/views/stocks_grid_view.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__ (/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst StockGridView = function (container){\n  this.container = container\n\n}\n\n\nStockGridView.prototype.bindEvents = function () {\n  console.log(this.container);\n  PubSub.subscribe(\"StockModel: Company-realtime-info\", (event) => {\n    console.log('this is the render', event.detail);\n    const companyInfo = event.detail;\n    return companyInfo\n    })\n};\n\n\nmodule.exports = StockGridView;\n\n\n//# sourceURL=webpack:///./client/src/views/stocks_grid_view.js?");

/***/ })

/******/ });