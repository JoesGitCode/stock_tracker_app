const PubSub = require('../helpers/pub_sub.js')
const Graph = require('./saved_stocks_view.js')

const PageDisplay = function(){

}

PageDisplay.prototype.bindEvents = function () {

  const toggleSearch = document.querySelector("#dashboardToggle")
  toggleSearch.addEventListener('click', (event) => {
    const heldPage = document.querySelector('#portfolio')
    const searchPage = document.querySelector('#stock_search')
    console.log(event.target);
    console.log(searchPage);
    heldPage.classList.add('visibility')
    searchPage.classList.remove('visibility')
  })

  const toggleStock = document.querySelector("#searchToggle")
  toggleStock.addEventListener('click', (event) => {
    const heldPage = document.querySelector('#portfolio')
    const searchPage = document.querySelector('#stock_search')
    console.log(event.target);
    console.log(searchPage);
    heldPage.classList.remove('visibility')
    searchPage.classList.add('visibility')
  })


  const searchSubmit = document.querySelector("#input_stock_pick")
  searchSubmit.addEventListener('submit', (event) => {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",event);
    const stockSearchResult = document.querySelector('#banana')
    console.log(stockSearchResult);
    stockSearchResult.classList.remove('visibility')
  })

  // const buySubmit = document.querySelector("#buy-share-form")
  // console.log("buySubmit", buySubmit);
  // buySubmit.addEventListener('submit', (event) => {
  //   console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",event);
  //   const buyResult = document.querySelector('#banana')
  //   console.log(buyResult);
  //   buyResult.classList.add('visibility')
  // })

  const activateDetail = document.querySelector('#held_stocks')
  activateDetail.addEventListener('click', (event) => {
  console.log(event);
  let comapanyNameDetail = event.toElement.innerText
  // const meh = comapanyNameDetail.split(" ")
  comapanyNameDetail = comapanyNameDetail.substr(0, comapanyNameDetail.indexOf(' '));
  PubSub.publish('search_portfolio_display:detail-selected', comapanyNameDetail )
  const graph = new Graph(activateDetail)
  graph.renderSmallGraph()
  console.log(comapanyNameDetail);

  })

}


module.exports = PageDisplay;
