const PubSub = require ('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

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
  const json = '?serietype=line'
  const request = new RequestHelper(companyInfoFromApi + stockTickerName + json)
  console.log(request);
  request.get()
  .then((data) => {
    const companyInfo = data
    console.log('compnay info >??????', companyInfo);

    PubSub.publish("StockModel: Company-realtime-info" , companyInfo )
  })
  })
};


module.exports = Stock;
