const PubSub = require('../helpers/pub_sub.js')

const StockView = function(container){
  this.container = container
}

StockView.prototype.render = function (companyInfo) {

  const companyContainer = document.createElement('div');
  companyContainer.id = 'companySearch'
  this.container.appendChild(companyContainer)

  console.log(companyInfo);

  const companySymbol = this.createSymbol(companyInfo.symbol)
  companyContainer.appendChild(companySymbol)

  const companyRevenue = this.createRevenue(companyInfo.financials[0]["Revenue"])
  companyContainer.appendChild(companyRevenue)

  const companyGrossProfit = this.createGrossProfit(companyInfo.financials[0]["Revenue Growth"])
  companyContainer.appendChild(companyGrossProfit)

  // const companyRevenue = this.createRevenue(companyInfo.financials[0].Revenue)
  // companyContainer.appendChild(companyRevenue)
  //
  // const companyRevenue = this.createRevenue(companyInfo.financials[0].Revenue)
  // companyContainer.appendChild(companyRevenue)
};

StockView.prototype.createSymbol = function(textContent) {
  const symbol = document.createElement('h1')
  symbol.textContent = textContent
  return symbol
};

StockView.prototype.createRevenue = function (textContent) {
  const revenue = document.createElement('h4')
  revenue.textContent = textContent
  return revenue
};

StockView.prototype.createGrossProfit = function (textContent) {
  const grossProfit = document.createElement('h4')
  grossProfit.textContent = textContent
  return grossProfit
};



module.exports = StockView;
