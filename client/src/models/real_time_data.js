const PubSub = require('../helpers/pub_sub.js')


const RealTimeData = function (){
}



RealTimeData.prototype.gettingDBData = function () {

  PubSub.subscribe('Stock:data-loaded', (event) => {
    this.renderingLiveInfo(event.detail)
  })
};



RealTimeData.prototype.renderingLiveInfo = function (stocks) {

const matchedStocks = []

  PubSub.subscribe('Stocks:Real-time-data-loaded', (event) => {
    console.log('this should be two... somethings', event.detail)
    event.detail.forEach(stock => {
      if (stock.symbol === stocks.name){
        const currentStockValue = stock.price * stocks.quantity
        const allTheShares  = {
          symbol: stock.symbol,
          currentValue: currentStockValue
        }
        matchedStocks.push(allTheShares)
        // const realTimeValue = this.createHeading("Current Value: " + currentStockValue)
        // stockContainer.appendChild(realTimeValue)
        // const returnOnIncome = (currentStockValue - initialStockValue)/initialStockValue
        // const percentageChange = this.createHeading("Percentage Change: " + (returnOnIncome * 100).toFixed(2) + "%")
        // stockContainer.appendChild(percentageChange)
      }
    })
  })
  PubSub.publish("realTimeData: currentStockValue", matchedStocks)
};



module.exports = RealTimeData;
