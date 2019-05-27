const StockSearchView = require('./views/stock_search_form_view.js');
const StockModel = require('./models/stocks.js')
const StockGridView = require('./views/stocks_grid_view.js')
const GraphView = require('./views/graph_view.js')
const SavedStocksView = require('./views/saved_stocks_view.js');
const SavedStocksGridView = require('./views/saved_stocks_grid_view.js');
const ProfitDisplay = require('./views/profit_display.js')



document.addEventListener('DOMContentLoaded', () => {

  const element = document.querySelector('#input_stock_pick')
  const stocksearchview = new StockSearchView(element)
  stocksearchview.bindEvents();


  const container = document.querySelector('#stock_search_stock')
  const stockGridView = new StockGridView(container)
  stockGridView.bindEvents()

  const graphContainer = document.querySelector('div#graph')
  const graphView = new GraphView(graphContainer)
  graphView.bindEvents()

  const profitContainer = document.querySelector('#roi')
  const profitDisplay = new ProfitDisplay(profitContainer)
  profitDisplay.bindEvents();

  const realTimeStockPrice = 'https://financialmodelingprep.com/api/company/real-time-price/'
  const historicalStockPrice = 'https://financialmodelingprep.com/api/v3/historical-price-full/'
  const stockModel = new StockModel(realTimeStockPrice, historicalStockPrice)
  stockModel.bindEvents()
  stockModel.getData()
  stockModel.getRealTime()

  const savedContainer = document.querySelector('#held_stocks')
  const savedStocksGridView = new SavedStocksGridView(savedContainer)
  savedStocksGridView.bindEvents();







})
