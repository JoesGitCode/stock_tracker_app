const PubSub = require('../helpers/pub_sub.js')

const StockSearchView = function (element) {
  this.element = element
}

StockSearchView.prototype.bindEvents = function () {
  this.element.addEventListener('submit', (event) =>{
    event.preventDefault()

    const searchStockDiplayed =  document.querySelector("#stock_search_stock")
    const searchStockBox =  document.querySelector("#stockname")
    const data = event.target.stockname.value
    PubSub.publish('SearchFormView:ticker-selected', data)
    
  })

};

module.exports = StockSearchView
