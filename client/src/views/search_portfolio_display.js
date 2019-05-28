const PubSub = require('../helpers/pub_sub.js')

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

}


module.exports = PageDisplay;
