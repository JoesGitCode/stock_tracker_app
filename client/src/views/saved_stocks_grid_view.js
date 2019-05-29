const PubSub = require('../helpers/pub_sub.js');
const SavedStocksView = require('./saved_stocks_view.js');

const SavedStocksGridView = function(container){
  this.container = container;
}

SavedStocksGridView.prototype.bindEvents = function(){
  PubSub.subscribe('Stock:data-loaded', (event) =>{

    this.render(event.detail);

  })
}

SavedStocksGridView.prototype.render = function(stocks) {
  this.container.innerHTML = '';
  const stockView = new SavedStocksView(this.container);
  stocks.forEach((stock) => stockView.render(stock))

}





module.exports = SavedStocksGridView;
