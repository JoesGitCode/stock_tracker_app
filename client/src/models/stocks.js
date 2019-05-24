const PubSub = require ('../helpers/pub_sub.js')

const Stock = function (url) {
  this.url = url
  console.log(this.url);
};

Stock.prototype.bindEvents = function () {
  // console.log('subscribed to ticker selected');
  PubSub.subscribe('SearchFormView:ticker-selected', (event) => {
  const stockTickerName = event.detail.toUpperCase()
  console.log("i am the stock ticker", stockTickerName);
  const companyInfoFromApi = this.url
  const finalUrl = companyInfoFromApi + '/' + stockTickerName
  console.log(finalUrl);
  // console.log(companyInfoFromApi);
  PubSub.publish("StockModel: Company-realtime-info" , finalUrl )
  })
};


module.exports = Stock;
