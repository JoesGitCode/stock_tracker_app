const PubSub = require('../helpers/pub_sub.js')

const StockView = function(container){
  this.container = container
}

StockView.prototype.render = function (companyInfo) {

  const companyContainer = document.createElement('div');
  companyContainer.id = 'companySearch'
  this.container.appendChild(companyContainer)

  const companySymbol = this.createSymbol(companyInfo.symbol)
  companyContainer.appendChild(companySymbol)

  const companyRevenue = this.createClose(companyInfo.historical[companyInfo.historical.length -1].close)
  companyContainer.appendChild(companyRevenue)

  const companyGrossProfit = this.createOpen(companyInfo.historical[companyInfo.historical.length -1].open)
  companyContainer.appendChild(companyGrossProfit)

  const companyVolume = this.createVolume(companyInfo.historical[companyInfo.historical.length -1].volume)
  companyContainer.appendChild(companyVolume)

  // const companyRevenue = this.createRevenue(companyInfo.financials[0].Revenue)
  // companyContainer.appendChild(companyRevenue)
};

StockView.prototype.createSymbol = function(textContent) {
  const symbol = document.createElement('h1')
  symbol.textContent = textContent
  return symbol
};

StockView.prototype.createClose = function (textContent) {
  const close = document.createElement('h4')
  close.textContent = textContent
  return close
};

StockView.prototype.createOpen= function (textContent) {
  const open = document.createElement('h4')
  open.textContent = textContent
  return open
};

StockView.prototype.createVolume= function (textContent) {
  const volume = document.createElement('h4')
  volume.textContent = textContent
  return volume
};



module.exports = StockView;
