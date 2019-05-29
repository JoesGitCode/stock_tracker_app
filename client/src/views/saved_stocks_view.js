const PubSub = require('../helpers/pub_sub.js')
const Graph = require('./graph_view.js')

const SavedStocksView = function(container) {
  this.container = container;
}
  let stockContainer = null

SavedStocksView.prototype.render = function(stocks) {

  const initialStockValue = stocks.strike_price * stocks.quantity

  const stockContainer = document.createElement('details')
  stockContainer.id = 'stock';
  this.container.appendChild(stockContainer)

  const companyName = this.createHeading("Name: " + stocks.name)
  stockContainer.appendChild(companyName)

  const totalValue = this.createHeading("Total Value: $" + initialStockValue.toFixed(2))
  stockContainer.appendChild(totalValue)


  PubSub.subscribe('Stocks:Real-time-data-loaded', (event) => {
    console.log('this should be two... somethings', event.detail)
    event.detail.forEach(stock => {
      if (stock.symbol === stocks.name){
        const currentStockValue = stock.price * stocks.quantity
        const realTimeValue = this.createHeading("Current Value: " + currentStockValue)
        stockContainer.appendChild(realTimeValue)
        const returnOnIncome = (currentStockValue - initialStockValue)/initialStockValue
        const percentageChange = this.createHeading("Percentage Change: " + (returnOnIncome * 100).toFixed(2) + "%")
        stockContainer.appendChild(percentageChange)
      }
    })
  const summary = document.createElement('summary')
  summary.textContent = stocks.name + " " + stocks.strike_price
  stockContainer.appendChild(summary)


  stockContainer.appendChild(getSpendingsInTotal)
})

const deleteButton = this.createDeleteButton(stocks._id);
deleteButton.id = 'deleteButton'
deleteButton.textContent= 'Sell'
stockContainer.appendChild(deleteButton);
const spendingTotal = stocks.quantity * stocks.strike_price
const getSpendingsInTotal = this.createHeading("Total " + (spendingTotal).toFixed(2));

}

SavedStocksView.prototype.createHeading = function(textContent){
  const heading = document.createElement('p');
  heading.textContent = textContent;
  return heading;

}

SavedStocksView.prototype.createDeleteButton = function(stockId) {

    const button = document.createElement('button')
    button.classList.add('remove-button')
    button.value = stockId;

  button.addEventListener('click', (event) =>{

    PubSub.publish('stock_view:stock-delete-clicked', event.target.value)

  })
  return button;
}

module.exports = SavedStocksView;
