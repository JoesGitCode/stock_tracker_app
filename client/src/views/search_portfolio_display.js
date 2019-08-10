const PubSub = require("../helpers/pub_sub.js");
const Graph = require("./saved_stocks_view.js");

const PageDisplay = function() {};

PageDisplay.prototype.bindEvents = function() {
  const toggleSearch = document.querySelector("#dashboardToggle");
  toggleSearch.addEventListener("click", event => {
    const heldPage = document.querySelector("#portfolio");
    const searchPage = document.querySelector("#stock_search");
    heldPage.classList.add("visibility");
    searchPage.classList.remove("visibility");
  });

  const toggleStock = document.querySelector("#searchToggle");
  toggleStock.addEventListener("click", event => {
    const heldPage = document.querySelector("#portfolio");
    const searchPage = document.querySelector("#stock_search");
    heldPage.classList.remove("visibility");
    searchPage.classList.add("visibility");
  });

  const searchSubmit = document.querySelector("#input_stock_pick");
  searchSubmit.addEventListener("submit", event => {
    const stockSearchResult = document.querySelector("#banana");
    stockSearchResult.classList.remove("visibility");
  });

  const activateDetail = document.querySelector("#held_stocks");
  activateDetail.addEventListener("click", event => {
    let comapanyNameDetail = event.toElement.innerText;
    comapanyNameDetail = comapanyNameDetail.substr(
      0,
      comapanyNameDetail.indexOf(" ")
    );
    PubSub.publish(
      "search_portfolio_display:detail-selected",
      comapanyNameDetail
    );
    const graph = new Graph(activateDetail);
    graph.renderSmallGraph();
  });
};

module.exports = PageDisplay;
