const PubSub = require ('../helpers/pub_sub.js')
const StockView = require ('./stock_view.js')


const StockGridView = function(container1, container2){
  this.container = container1;
  this.container2 = container2;

}

StockGridView.prototype.bindEvents = function () {
  PubSub.subscribe("StockModel: Company-historical-info", (event) => {
    this.container.innerHTML="";
    this.render(event.detail)
    this.postBoughtStock()

  })

  PubSub.subscribe("Stocks:get-total", (event)=>{
    this.getTotalFromData(event.detail);
  })

};

StockGridView.prototype.render = function(companyInfo) {
  const stockView = new StockView(this.container)
  stockView.render(companyInfo)
};


StockGridView.prototype.postBoughtStock = function(){
  const stockView = new StockView(this.container)
  stockView.handleSubmit()
}

StockGridView.prototype.getTotalFromData = function (portfolioTotal) {
  const stockView = new StockView(this.container1, this.container2)
  stockView.renderPortfolioTotal(portfolioTotal);

}


module.exports = StockGridView;
