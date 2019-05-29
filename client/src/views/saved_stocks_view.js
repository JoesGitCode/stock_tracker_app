const PubSub = require('../helpers/pub_sub.js');

const SavedStocksView = function(container) {
  this.container = container;
}

SavedStocksView.prototype.render = function(stocks) {

  const initialStockValue = stocks.strike_price * stocks.quantity
  
  
  const stockContainer = document.createElement('details')
  stockContainer.id = 'stock';
  this.container.appendChild(stockContainer)
  
  const companyName = this.createHeading("Name: " + stocks.name)
  stockContainer.appendChild(companyName)
  
  const totalValue = this.createHeading("Total Value: " + initialStockValue)
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
  const deleteButton = this.createDeleteButton(stocks._id);
  console.log(stocks._id);
  stockContainer.appendChild(deleteButton);

  const getSpendingsInTotal = this.createHeading("Total " + (stocks.quantity * stocks.strike_price).toFixed(2));

  console.log("My Value", getSpendingsInTotal);
  stockContainer.appendChild(getSpendingsInTotal)


  const graph = document.createElement('div')
  graph.id = "graph-" + stocks.name
  stockContainer.appendChild(graph)
})

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
    console.log(stockId);


  button.addEventListener('click', (event) =>{
    // console.log(event);
    PubSub.publish('stock_view:stock-delete-clicked', event.target.value)
    console.log(event.target);
  })
  return button;
}

module.exports = SavedStocksView;
