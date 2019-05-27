const PubSub = require('../helpers/pub_sub.js');

const SavedStocksView = function(container) {
  this.container = container;
}

SavedStocksView.prototype.render = function(stocks) {

  const stockContainer = document.createElement('div')
  stockContainer.id = 'stock';
  this.container.appendChild(stockContainer)

  const companyName = this.createHeading(stocks.name)
  stockContainer.appendChild(companyName)


}

SavedStocksView.prototype.createHeading = function(textContent){
  const heading = document.createElement('h1');
  heading.textContent = textContent;
  return heading;



}

module.exports = SavedStocksView;
