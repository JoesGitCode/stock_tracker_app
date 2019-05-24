const PubSub = require ('../helpers/pub_sub.js')

const StockGridView = function (container){
  this.container = container

}


StockGridView.prototype.bindEvents = function () {
  console.log(this.container);
  PubSub.subscribe("StockModel: Company-realtime-info", (event) => {
    console.log('this is the render', event.detail);
    const companyInfo = event.detail;
    return companyInfo
    })
};


module.exports = StockGridView;
