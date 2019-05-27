const PubSub = require ('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')



const Stock = function (urlReal, urlHistorical) {
  this.urlReal = urlReal
  this.urlHistorical = urlHistorical
  this.request = new RequestHelper('http://localhost:3000/api/stocks')
};

Stock.prototype.bindEvents = function () {

  const companyInfoFromApi = this.urlHistorical
  const companyRealTimeApi = this.urlReal

  PubSub.subscribe('SearchFormView:ticker-selected', (event) => {
    const stockTickerName = event.detail.toUpperCase()
    const requestHistorical = new RequestHelper(companyInfoFromApi + stockTickerName)
    requestHistorical.get()
    .then((data) => {
      const companyInfo = data
      PubSub.publish("StockModel: Company-historical-info" , companyInfo );

    })
    const json = '?datatype=json'
    const requestRealTimeApi = new RequestHelper(companyRealTimeApi + stockTickerName + json)
    console.log(requestRealTimeApi);
    requestRealTimeApi.get()
    .then((data) => {
      const companyInfoReal = data
      console.log(data);
      PubSub.publish('StockModel: Company-info-real-time-info', data)
    })

  })


  PubSub.subscribe('stock_view:shares-bought-published', (event) => {
    console.log(event.detail);
    this.postBoughtStock(event.detail)
  })
};


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







module.exports = Stock;
