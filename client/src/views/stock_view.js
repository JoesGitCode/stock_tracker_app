const PubSub = require('../helpers/pub_sub.js')

const StockView = function(container){
  this.container = container
}

StockView.prototype.render = function (companyInfo) {

  const companyContainer = document.createElement('div');
  companyContainer.id = 'companySearch'
  this.container.appendChild(companyContainer)

  const companySymbol = this.createSymbol(companyInfo.symbol)
  companyContainer.appendChild(companySymbol)
};

StockView.prototype.createSymbol = function(textContent) {
  const symbol = document.createElement('h3')
  symbol.textContent = textContent
  return symbol
};


module.exports = StockView;
