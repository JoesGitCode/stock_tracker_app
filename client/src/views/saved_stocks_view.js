const PubSub = require('../helpers/pub_sub.js');
const GraphView = require('./graph_view.js')
const RequestHelper = require('../helpers/request_helper.js')


const SavedStocksView = function(container) {
  this.container = container;
  this.url = 'https://financialmodelingprep.com/api/v3/historical-price-full/'
}

SavedStocksView.prototype.render = function(stocks) {

  const stockContainer = document.createElement('details')
  stockContainer.classList.add("stock")
  stockContainer.id = stocks._id;
  this.container.appendChild(stockContainer)

  const companyName = this.createHeading("Name: " + stocks.name)
  stockContainer.appendChild(companyName)

  const totalValue = this.createHeading("Total Value: " + stocks.strike_price * stocks.quantity)
  stockContainer.appendChild(totalValue)


  const deleteButton = this.createDeleteButton(stocks._id);
  // console.log(stocks._id);
  stockContainer.appendChild(deleteButton);

  const summary = document.createElement('summary')
  summary.textContent = stocks.name + " " + stocks.strike_price
  summary.addEventListener('click', (event) => {
    console.log("summary click", event);
    const data = stocks.name
    PubSub.publish('SearchFormView:ticker-clicked', data)
  })
  stockContainer.appendChild(summary)

  const smallGraph = this.createSmallGraph(stocks)
  stockContainer.appendChild(smallGraph)

}

SavedStocksView.prototype.createSmallGraph = function (stocks) {
  PubSub.subscribe("StockModel: Company-historical-info-small", (event) => {
    console.log(event.detail);
    const graph = new GraphView(stocks._id)
    graph.render(event.detail)
  })
  const graphDiv = document.createElement('div')
  graphDiv.id = stocks._id
  return graphDiv

};

SavedStocksView.prototype.createHeading = function(textContent){
  const heading = document.createElement('p');
  heading.textContent = textContent;
  return heading;
}

SavedStocksView.prototype.createDeleteButton = function(stockId) {
    const button = document.createElement('button')
    button.classList.add('remove-button')
    button.value = stockId;
    // console.log(stockId);

  button.addEventListener('click', (event) =>{
    PubSub.publish('stock_view:stock-delete-clicked', event.target.value)
    console.log(event.target);
  })
  return button;
}


module.exports = SavedStocksView;
