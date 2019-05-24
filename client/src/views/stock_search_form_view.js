const PubSub = require('../helpers/pub_sub.js')

const StockSearchView = function (element) {
  this.element = element
}

StockSearchView.prototype.bindEvents = function () {
  this.element.addEventListener('submit', (event) =>{
    console.log("HELLLLLLOOOOOO");
    event.preventDefault()
    const data = event.target.stockname.value
    console.log(data);
    PubSub.publish('SearchFormView:ticker-selected', data)
  })

};

module.exports = StockSearchView
