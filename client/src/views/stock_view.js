const PubSub = require('../helpers/pub_sub.js')

const StockView = function(container){
  this.container = container
  console.log(this.container);
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


  const buyShareForm = this.createForm(companyInfo)
  companyContainerRight.appendChild(buyShareForm)

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

StockView.prototype.createForm = function (companyInfo){

  const companyInfoFinances = companyInfo.historical[companyInfo.historical.length -1]
  const currentSharePrice = document.createElement('form')
  const inputCompanyName = document.createElement('input')
  const buyInputPrice = document.createElement('input')
  const buyInputPriceQauntity = document.createElement('input')
  const buyShareButton = document.createElement('input')

  currentSharePrice.setAttribute('id', 'buy-share-form')

  inputCompanyName.setAttribute('type', 'text')
  inputCompanyName.setAttribute('name', 'company')
  inputCompanyName.setAttribute('value', companyInfo.symbol)
  inputCompanyName.setAttribute("hidden", true)

  buyInputPrice.setAttribute('type', 'text')
  buyInputPrice.setAttribute('name', 'current-share-price')
  buyInputPrice.setAttribute('value', companyInfoFinances.open)
  buyInputPrice.setAttribute("hidden", true)

  buyInputPriceQauntity.setAttribute('type', 'number')
  buyInputPriceQauntity.setAttribute('name', 'quantity')

  buyShareButton.setAttribute('type', 'submit')
  buyShareButton.setAttribute('value', 'buy')

  currentSharePrice.appendChild(inputCompanyName)
  currentSharePrice.appendChild(buyInputPrice)
  currentSharePrice.appendChild(buyInputPriceQauntity)
  currentSharePrice.appendChild(buyShareButton)
  return currentSharePrice
}

StockView.prototype.buyStocks = function (){
  const saveStockFormContainer = document.querySelector('#buy-share-form');
  saveStockFormContainer.addEventListener('submit', (event)=>{
    event.preventDefault()
    const data = event.target
    PubSub.publish('stock_view: shares-bought-published', data )
  })
}



module.exports = StockView;
