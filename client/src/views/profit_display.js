const PubSub = require ('../helpers/pub_sub.js')


const ProfitDisplay = function (container){
  this.container = container
}



ProfitDisplay.prototype.bindEvents = function() {
  PubSub.subscribe('StockModel:Company-info-real-time-info', (event) => {
    console.log(event);
  })
};


module.exports = ProfitDisplay;
