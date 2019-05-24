const PubSub = require ('../helpers/pub_sub.js')


const Stock = function (url){
  this.url = url
};


Stock.prototype.bindEvents = function () {

  PubSub.subscribe('SearchFormView:ticker-selected', (event) => {
    const StockTickerName = event.detail
    console.log(StockTickerName);
    // this.handleSearchInput()
  })


};
