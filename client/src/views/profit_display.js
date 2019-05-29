const PubSub = require ('../helpers/pub_sub.js')

const ProfitDisplay = function (container){
  this.container = container
}



ProfitDisplay.prototype.bindEvents = function() {
  PubSub.subscribe('Stock:data-loaded', (event) => {
    console.log('Stock:data-loaded', event.detail);

  })

};


module.exports = ProfitDisplay;
