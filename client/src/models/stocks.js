const PubSub = require ('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')



const Stock = function (url) {
  this.url = url
  this.request = new RequestHelper('http://localhost:3000/api/stocks')
};

Stock.prototype.bindEvents = function () {

  PubSub.subscribe('SearchFormView:ticker-selected', (event) => {
    const stockTickerName = event.detail.toUpperCase()
    const companyInfoFromApi = this.url
    const request = new RequestHelper(companyInfoFromApi + stockTickerName)
    request.get()
    .then((data) => {
      const companyInfo = data
      PubSub.publish("StockModel: Company-realtime-info" , companyInfo )
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
