const PubSub = require ('../helpers/pub_sub.js')
const StockView = require ('./stock_view.js')


const StockGridView = function(container){
  this.container = container;
}


StockGridView.prototype.bindEvents = function () {
  PubSub.subscribe("StockModel: Company-realtime-info", (event) => {
    this.container.innerHTML="";
    this.render(event.detail)
    this.postBoughtStock()
  })
};

StockGridView.prototype.render = function(companyInfo) {
  const stockView = new StockView(this.container)
  stockView.render(companyInfo)
};

// StockGridView.prototype.getSavedData = function(){
//   const stockView = new StockView(this.container)
//   stockView.buyStocks()
// }

StockGridView.prototype.postBoughtStock = function(){
  const stockView = new StockView(this.container)
  stockView.handleSubmit()
}


module.exports = StockGridView;
