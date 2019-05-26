const StockSearchView = require('./views/stock_search_form_view.js');
const StockModel = require('./models/stocks.js')
const StockGridView = require('./views/stocks_grid_view.js')


document.addEventListener('DOMContentLoaded', () => {

  const element = document.querySelector('#input_stock_pick')
  const stocksearchview = new StockSearchView(element)
  stocksearchview.bindEvents();


  const container = document.querySelector('#stock_search_stock')
  const stockGridView = new StockGridView(container)
  stockGridView.bindEvents()


  const stockModel = new StockModel('https://financialmodelingprep.com/api/v3/financials/income-statement/')
  stockModel.bindEvents()
})
