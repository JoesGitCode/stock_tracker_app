const PubSub = require('../helpers/pub_sub.js');

const SavedStocksView = function(container) {
  this.container = container;
}

SavedStocksView.prototype.render = function(stocks) {

  console.log(stocks);
  const stockContainer = document.createElement('div')
  stockContainer.id = 'stock';
  this.container.appendChild(stockContainer)

  const companyName = this.createHeading("Name: " + stocks.name)

  stockContainer.appendChild(companyName)

  const companyPrice = this.createHeading("Price: " + stocks.strike_price)
  stockContainer.appendChild(companyPrice)

  const companyStrikePrice = this.createHeading("Quantity: " + stocks.quantity)
  stockContainer.appendChild(companyStrikePrice)

  const deleteButton = this.createDeleteButton(stocks._id);
  console.log(stocks._id);
  stockContainer.appendChild(deleteButton);

  const getSpendingsInTotal = this.createHeading("Total " + (stocks.quantity * stocks.strike_price).toFixed(2));

  console.log("My Value", getSpendingsInTotal);
  stockContainer.appendChild(getSpendingsInTotal)

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
