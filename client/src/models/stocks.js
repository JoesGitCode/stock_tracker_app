const PubSub = require ('../helpers/pub_sub.js')

const Stock = function (url) {
  this.url = url
  console.log(this.url);
};

Stock.prototype.bindEvents = function () {
  console.log('subscribing to ticker selected');
  PubSub.subscribe('SearchFormView:ticker-selected', (event) => {
    const StockTickerName = event.detail
    console.log(StockTickerName);
  })
};


module.exports = Stock;
