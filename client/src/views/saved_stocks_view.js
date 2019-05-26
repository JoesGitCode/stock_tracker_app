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

  const companyPrice = this.createHeading(stocks.strike_price)
  stockContainer.appendChild(companyPrice)

  const companyStrikePrice = this.createHeading(stocks.quantity)
  stockContainer.appendChild(companyStrikePrice)


}

SavedStocksView.prototype.createHeading = function(textContent){
  const heading = document.createElement('p');
  heading.textContent = textContent;
  return heading;





}

module.exports = SavedStocksView;
