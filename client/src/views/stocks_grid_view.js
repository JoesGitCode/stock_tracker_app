const PubSub = require ('../helpers/pub_sub.js')
const StockView = require ('./stock_view.js')


const StockGridView = function(container){
  this.container = container;

}

StockGridView.prototype.bindEvents = function(){
  PubSub.subscribe('Stock:data-loaded', (event) =>{
  console.log(event.detail)
    this.render(event.detail);

  })
}


StockGridView.prototype.bindEvents = function () {
  PubSub.subscribe("StockModel: Company-realtime-info", (event) => {
      this.container.innerHTML="";

      this.render(event.detail)
  })
};

StockGridView.prototype.render = function(companyInfo) {
  const stockView = new StockView(this.container)
  stockView.render(companyInfo)
};


module.exports = StockGridView;
