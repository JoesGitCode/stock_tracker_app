const PubSub = require ('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')




const Stock = function (urlReal, urlHistorical) {
  this.urlReal = urlReal
  this.urlHistorical = urlHistorical
  this.request = new RequestHelper('http://localhost:3000/api/stocks')
};

const companyInfoFromApi = this.urlHistorical
const companyRealTimeApi = this.urlReal

Stock.prototype.bindEvents = function () {



  PubSub.subscribe('SearchFormView:ticker-selected', (event) => {
    const stockTickerName = event.detail.toUpperCase()
    const requestHistorical = new RequestHelper(companyInfoFromApi + stockTickerName)
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
}

Stock.prototype.getRealTime = function() {

  PubSub.subscribe('Stock:data-loaded', (event)=> {
    console.log(event.detail);
    const data = event.detail
    const savedCompanyNames = []
    data.forEach((element) => savedCompanyNames.push(element.name))

    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    }
    const uniqueValues = savedCompanyNames.filter(unique);
    console.log(uniqueValues);
    // const json = '?datatype=json'
    // const requestRealTimeApi = new RequestHelper(companyRealTimeApi + stockTickerName + json)
    // console.log(requestRealTimeApi);
    // requestRealTimeApi.get()
    //   .then((data) => {
    //     const companyInfoReal = data
    //     console.log(companyInfoReal);
    //     PubSub.publish('StockModel:Company-info-real-time-info', data)
    //   })
  })
}






Stock.prototype.getData = function() {
  this.request.get()
  .then((stocks) =>{
    PubSub.publish('Stock:data-loaded', stocks);
  })
  .catch(console.error)
}


Stock.prototype.postBoughtStock = function(BuyShareInfo){
  this.request.post(BuyShareInfo)
  .then((shares) => {
    PubSub.publish('Stock:data-loaded', shares)
  })
}


Stock.prototype.deleteStock = function(stockId) {
    this.request.delete(stockId)
      .then((stocks) =>{
        PubSub.publish('Stock:data-loaded', stocks)
      })
}








module.exports = Stock;
