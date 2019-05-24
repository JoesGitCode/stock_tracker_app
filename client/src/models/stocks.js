const PubSub = require ('../helpers/pub_sub.js')

const Stock = function (url) {
  this.url = url
  console.log(this.url);
};

Stock.prototype.bindEvents = function () {
  // console.log('subscribed to ticker selected');
  PubSub.subscribe('SearchFormView:ticker-selected', (event) => {
  const stockTickerName = event.detail
  const companyInfoFromApi = this.url + stockTickerName;
  // console.log(companyInfoFromApi);
  PubSub.publish("StockModel: Company-realtime-info" , companyInfoFromApi)
  })
};


module.exports = Stock;
