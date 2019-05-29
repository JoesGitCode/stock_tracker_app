const PubSub = require ('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')


const Stock = function (urlReal, urlHistorical) {
  this.urlReal = urlReal
  console.log('realtime', urlReal);
  
  this.urlHistorical = urlHistorical
  this.request = new RequestHelper('http://localhost:3000/api/stocks')
};


Stock.prototype.bindEvents = function () {

  PubSub.subscribe('SearchFormView:ticker-selected', (event) => {
    const stockTickerName = event.detail.toUpperCase()
    const requestHistorical = new RequestHelper(this.urlHistorical + stockTickerName)
    requestHistorical.get()
    .then((data) => {
      const companyInfo = data
      PubSub.publish("StockModel: Company-historical-info" , companyInfo );

    })
  })

  PubSub.subscribe('stock_view:shares-bought-published', (event) => {

    console.log(event.detail);
    this.postBoughtStock(event.detail)
  })

  // DELETE
  PubSub.subscribe('stock_view:stock-delete-clicked', (event) =>{
    console.log(event);
    this.deleteStock(event.detail)
  })
};



PubSub.subscribe('search_portfolio_display:detail-selected', (event) => {
  console.log('company info', event.detail);
  const stockTickerName = event.detail.toUpperCase()
  const requestHistorical = new RequestHelper(this.urlHistorical + stockTickerName)
  console.log(requestHistorical);
  requestHistorical.get()
  .then((data) => {
    const companyInfo = data
    console.log(data);
    PubSub.publish("StockModel:Small-graph-info" , companyInfo );
  })
})









Stock.prototype.getUniqueStockNames = function(data) {
  // PubSub.subscribe('Stock:data-loaded', (event)=> {
  //   console.log('what is this?', event.detail);
  //   const data = event.detail
    const savedCompanyNames = []
    data.forEach((element) => savedCompanyNames.push(element.name))

    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    }
    const uniqueValues = savedCompanyNames.filter(unique);
    console.log('unique values', uniqueValues);
    return uniqueValues
  // })
}

Stock.prototype.getRealTimeData = function (stocks) {
  const uniqueNames = this.getUniqueStockNames(stocks)
  const arrayOfRealTimeData = []
  console.log('arrayOfRealTimeData1', arrayOfRealTimeData);
  

  const promisesToGetRealTimeDataForUniqueStocks = []
  uniqueNames.forEach((stock) => {
    const json = '?datatype=json'
    const requestRealTime = new RequestHelper(this.urlReal + stock + json)
    const promiseToGetRealTimeDataForUniqueStock = requestRealTime.get()
    promisesToGetRealTimeDataForUniqueStocks.push(promiseToGetRealTimeDataForUniqueStock)
  })
    Promise.all(promisesToGetRealTimeDataForUniqueStocks)
      .then(dataForUniqueStocks => {
        PubSub.publish('Stocks:Real-time-data-loaded', dataForUniqueStocks);
      })

    // console.log('arrayOfRealTimeData2', arrayOfRealTimeData);
    
    // PubSub.subscribe('Stocks:Real-time-data-loaded', (event) => {
    //   console.log('this should be two... somethings', event.detail)
    // })

    
  
};






Stock.prototype.getData = function() {
  this.request.get()
  .then((stocks) =>{
    PubSub.publish('Stock:data-loaded', stocks);
    this.getRealTimeData(stocks)
    

    const total = this.getTotalFromData(stocks)
    PubSub.publish('Stocks:get-total', total)


  })
  .catch(console.error)
}

Stock.prototype.getTotalFromData = function (data) {
  const valuesOfStocks = data.map((stock) => {
    return stock.quantity * stock.strike_price
  })
  const totalAmount = valuesOfStocks.reduce((a,b) => {
    return a + b
  })

  // console.log("Yooooooooooooooo", totalAmount);

  return totalAmount.toFixed(2)

// console.log("dfsdfnsdfsnsndfsdfsdf", this.getTotalFromData(totalAmount));
//  this.getTotalFromData(totalAmount)
}


Stock.prototype.postBoughtStock = function(BuyShareInfo){
  this.request.post(BuyShareInfo)
  .then((shares) => {
    PubSub.publish('Stock:data-loaded', shares)
    const total = this.getTotalFromData(shares)
    PubSub.publish('Stocks:get-total', total)
  })
}


Stock.prototype.deleteStock = function(stockId) {
    this.request.delete(stockId)
      .then((stocks) =>{

        PubSub.publish('Stock:data-loaded', stocks)
      })
}








module.exports = Stock;
