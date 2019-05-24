const StockSearchView = require('./views/stock_search_form_view.js')
const StockModel = require ('./models/stocks.js')


document.addEventListener('DOMContentLoaded', () =>{
  const element = document.querySelector('#input_stock_pick')
  const stocksearchview = new StockSearchView(element)
  stocksearchview.bindEvents()


  StockModel.bindEvents()
})
