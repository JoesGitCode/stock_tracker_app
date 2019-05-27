const PubSub = require('../helpers/pub_sub.js');

const SavedStocksView = function(container) {
  this.container = container;
}

SavedStocksView.prototype.render = function(stocks) {

  const stockContainer = document.createElement('details')
  stockContainer.id = 'stock';
  this.container.appendChild(stockContainer)

  const companyName = this.createHeading("Name: " + stocks.name)
  stockContainer.appendChild(companyName)

  const totalValue = this.createHeading("Total Value: " + stocks.strike_price * stocks.quantity)
  stockContainer.appendChild(totalValue)

  const summary = document.createElement('summary')
  summary.textContent = stocks.name + " " + stocks.strike_price
  stockContainer.appendChild(summary)

  const graph = document.createElement('div')
  graph.id = "graph-" + stocks.name
  stockContainer.appendChild(graph)
}

SavedStocksView.prototype.createHeading = function(textContent){
  const heading = document.createElement('p');
  heading.textContent = textContent;
  return heading;
}

module.exports = SavedStocksView;
