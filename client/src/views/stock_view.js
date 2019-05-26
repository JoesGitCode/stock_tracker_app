const PubSub = require('../helpers/pub_sub.js')

const StockView = function(container){
  this.container = container
}

StockView.prototype.render = function (companyInfo) {

  const companyContainerLeft = document.createElement('div');
  const companyContainerRight = document.createElement('div');
  companyContainerLeft.id = 'companySearchLeft'
  companyContainerLeft.id = 'companySearchRight'
  this.container.appendChild(companyContainerLeft)
  this.container.appendChild(companyContainerRight)

  const companySymbol = this.createSymbol(companyInfo.symbol)
  companyContainerLeft.appendChild(companySymbol)

  const displayCompanyClose =`close: ${companyInfo.historical[companyInfo.historical.length -1].close}`
  const companyRevenue = this.createClose(displayCompanyClose)
  companyContainerLeft.appendChild(companyRevenue)

  const displayCompanyOpen =`Open: ${companyInfo.historical[companyInfo.historical.length -1].open}`
  const companyGrossProfit = this.createOpen(displayCompanyOpen)
  companyContainerLeft.appendChild(companyGrossProfit)

  const displayCompanyVolume = `Volume: ${companyInfo.historical[companyInfo.historical.length -1].volume}`
  const companyVolume = this.createVolume(displayCompanyVolume)
  companyContainerRight.appendChild(companyVolume)

  const currentSharePrice = companyInfo.historical[companyInfo.historical.length -1]
  const buyShareForm = this.createForm(currentSharePrice)

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

// StockView.prototype.createForm(companyInfo){
//   const currentShareprice = document.createElement('form')
//   const buy
//   currentSharePrice.appendChild
// }



module.exports = StockView;
