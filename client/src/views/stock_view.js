const PubSub = require('../helpers/pub_sub.js')
const Graph = require('./graph_view.js')

const StockView = function(container1, container2){
  this.container = container1
  this.container2 = container2
  console.log(this.container);
}

StockView.prototype.render = function (companyInfo) {

  const companyContainerLeft = document.createElement('div');
  const companyContainerRight = document.createElement('div');
  companyContainerLeft.id = 'companySearchLeft'
  companyContainerRight.id = 'companySearchRight'
  this.container.appendChild(companyContainerLeft)
  this.container.appendChild(companyContainerRight)

  const companySymbol = this.createSymbol(companyInfo.symbol)
  companyContainerLeft.appendChild(companySymbol)
  console.log(companyInfo.historical.length);
  const displayCompanyClose =`Close: ${companyInfo.historical[companyInfo.historical.length -1].close}`
  const companyRevenue = this.createClose(displayCompanyClose)
  companyContainerLeft.appendChild(companyRevenue)

  const displayDate = `Date: ${companyInfo.historical[companyInfo.historical.length -1].close}`
  const date = this.createDate(displayDate)
  companyContainerLeft.appendChild(date)

  const displayChangePercent = `Change Percent: ${companyInfo.historical[companyInfo.historical.length -1].changePercent.toFixed(3)}`

  const changePercent = this.createChangePercent(displayChangePercent)
  companyContainerLeft.appendChild(changePercent)

  const displayCompanyOpen =`Open: ${companyInfo.historical[companyInfo.historical.length -1].open}`
  const companyGrossProfit = this.createOpen(displayCompanyOpen)
  companyContainerLeft.appendChild(companyGrossProfit)

  const displayCompanyHigh = `High: ${companyInfo.historical[companyInfo.historical.length -1].high}`
  const companyHigh = this.createHigh(displayCompanyHigh)
  companyContainerLeft.appendChild(companyHigh)

  const displayCompanyVolume = `Volume: ${(companyInfo.historical[companyInfo.historical.length -1].volume).toFixed(2)}`
  const companyVolume = this.createVolume(displayCompanyVolume)
  companyContainerLeft.appendChild(companyVolume)

  const buyShareForm = this.createForm(companyInfo)
  companyContainerLeft.appendChild(buyShareForm)

  const companyGraph = this.createGraph(companyInfo)
  companyContainerRight.appendChild(companyGraph)
};

StockView.prototype.renderPortfolioTotal = function(total) {

  this.container2.innerHTML = ""

  // const companyContainerLeft = document.createElement('div');
  // const companyContainerRight = document.createElement('div');
  // companyContainerLeft.id = 'total-left'
  // companyContainerLeft.id = 'total-right'
  // this.container2.appendChild(companyContainerLeft)
  // this.container2.appendChild(companyContainerRight)

  const totalRender = this.renderTotal(total)
  this.container2.appendChild(totalRender)

}


StockView.prototype.createSymbol = function(textContent) {
  const symbol = document.createElement('h1')
  symbol.textContent = textContent
  return symbol
};

StockView.prototype.createChangePercent = function(textContent) {
  const changePercent = document.createElement('h4')
  changePercent.textContent = textContent 
  return changePercent
}

StockView.prototype.createClose = function (textContent) {
  const close = document.createElement('h4')
  close.textContent = textContent
  return close
};

StockView.prototype.createDate = function(textContent) {
  const date = document.createElement('h4')
  date.textContent = textContent
  return date
}

StockView.prototype.createOpen= function (textContent) {
  const open = document.createElement('h4')
  open.textContent = textContent
  return open
};


StockView.prototype.createHigh = function(textContent) {
  const high = document.createElement('h4')
  high.textContent = textContent
  return high

}

StockView.prototype.createVolume= function (textContent) {
  const volume = document.createElement('h4')
  volume.textContent = textContent
  return volume
};



StockView.prototype.renderTotal = function(textContent) {
  const totalInPortfolio = document.createElement('h1')
  totalInPortfolio.textContent = 'Total Portfolio: $' + textContent
  return totalInPortfolio
}

StockView.prototype.createGraph = function (companyInfo){
  const graph = document.createElement('div')
  graph.id = "graph"
  return graph
}



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
  buyInputPrice.setAttribute('name', 'strike_price')
  buyInputPrice.setAttribute('value', companyInfoFinances.open)
  buyInputPrice.setAttribute("hidden", true)

  buyInputPriceQauntity.setAttribute('type', 'number')
  buyInputPriceQauntity.setAttribute('name', 'quantity')
  buyInputPriceQauntity.classList.add('buyShareBox')

  buyShareButton.setAttribute('type', 'submit')
  buyShareButton.setAttribute('value', 'BUY')
  buyShareButton.classList.add('buyShareButton')

  currentSharePrice.appendChild(inputCompanyName)
  currentSharePrice.appendChild(buyInputPrice)
  currentSharePrice.appendChild(buyInputPriceQauntity)
  currentSharePrice.appendChild(buyShareButton)
  return currentSharePrice
};
//check
StockView.prototype.handleSubmit = function (){
  const saveStockFormContainer = document.querySelector('#buy-share-form');
  saveStockFormContainer.addEventListener('submit', (event)=>{
    event.preventDefault()
    this.container.innerHTML = ""
    const data = this.createPurchase(event.target)
    PubSub.publish('stock_view:shares-bought-published', data )
  })
};



StockView.prototype.createPurchase = function (form) {
  const newPurchase = {
    name: form.company.value,
    quantity: form.quantity.value,
    strike_price:form.strike_price.value
  }
  console.log(newPurchase);
  return newPurchase
};










module.exports = StockView;
