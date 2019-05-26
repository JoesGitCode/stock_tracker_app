const PubSub = require ('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Stock = function (url) {
  this.url = url
  console.log(this.url);
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

  PubSub.subscribe('stock_view:shares-bought-published', (event) => {
    console.log("subscribing to bought data:", event);
  })

    })
  })

  Stock.prototype.getData = function() {
    this.request.get()
    .then((stocks) =>{
      PubSub.publish('Stock:data-loaded', stocks);
    })
    .catch(console.error)
  }

  Stock.prototype.postBoughtShares = function(BuyShareInfo){
    this.request.post(BuyShareInfo)
    .then((shares) => {
      PubSub.publish('Stock:data-loaded', shares)
    })
  }
};






module.exports = Stock;
