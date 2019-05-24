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
  const json = '?datatype=json'

  const finalUrl = companyInfoFromApi + stockTickerName + json
  console.log(finalUrl);
  // console.log(companyInfoFromApi);
  PubSub.publish("StockModel: Company-realtime-info" , finalUrl )

  const request = new RequestHelper(companyInfoFromApi + stockTickerName)
  console.log(request);
  request.get()
  .then((data) => {
    const companyInfo = data
    console.log('compnay info >??????', companyInfo);

    PubSub.publish("StockModel: Company-realtime-info" , companyInfo )
  })
>>>>>>> 596e2dc79a9b8620e6c416852c0fad730dd5bd86
  })
};


module.exports = Stock;
