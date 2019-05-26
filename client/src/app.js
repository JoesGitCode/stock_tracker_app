const StockSearchView = require('./views/stock_search_form_view.js');
const StockModel = require('./models/stocks.js')
const StockGridView = require('./views/stocks_grid_view.js')
const GraphView = require('./views/graph_view.js')


document.addEventListener('DOMContentLoaded', () => {

  const element = document.querySelector('#input_stock_pick')
  const stocksearchview = new StockSearchView(element)
  stocksearchview.bindEvents();


  const container = document.querySelector('#held_stocks_list_container')
  const stockGridView = new StockGridView(container)
  stockGridView.bindEvents()

  const graphContainer = document.querySelector('#graph')
  const graphView = new GraphView(graphContainer)
  graphView.bindEvents()


  const stockModel = new StockModel('https://financialmodelingprep.com/api/v3/historical-price-full/')
  stockModel.bindEvents()
})
