const PubSub = require("../helpers/pub_sub");

const GraphView = function(container) {
  this.container = container;
  console.log(this.container);
};

GraphView.prototype.bindEvents = function() {
  PubSub.subscribe("StockModel: Company-historical-info", event => {
    console.log("company info", event.detail);
    const companyInfo = event.detail;
    const containerc = this.container;

    this.render(companyInfo);
  });
};

GraphView.prototype.smallGraph = function(container) {
  PubSub.subscribe("StockModel:Small-graph-info", event => {
    console.log("company info", event.detail);
    const containerb = container;
    const companyInfo = event.detail;
    this.render(companyInfo);
  });
};

GraphView.prototype.render = function(companyInfo) {
  const companyName = companyInfo.symbol;
  const shareDates = companyInfo.historical.map(days => Date.parse(days.date));
  const sharePrices = companyInfo.historical.map(day => day.close);

  const combinedData = [];

  shareDates.forEach((element, index) => {
    const combinedArray = [];
    combinedArray.push(shareDates[index]);
    combinedArray.push(sharePrices[index]);
    combinedData.push(combinedArray);
  });

  this.renderGraph(companyName, combinedData);
};

GraphView.prototype.renderGraph = function(companyName, combinedData) {
  console.log(this.container);
  Highcharts.stockChart(this.container.id.toString(), {
    title: {
      text: `${companyName} Stock Price History (USD)`
    },

    subtitle: {
      text: "Data supplied by financialmodelingprep.com"
    },

    rangeSelector: {
      buttons: [
        {
          type: "month",
          count: 1,
          text: "1M"
        },
        {
          type: "year",
          count: 1,
          text: "1Y"
        },
        {
          type: "all",
          count: 1,
          text: "All"
        }
      ],
      selected: 1,
      inputEnabled: false
    },

    series: [
      {
        name: companyName,
        type: "area",
        data: combinedData,
        pointInterval: 24 * 3600 * 1000,
        gapSize: 5,
        tooltip: {
          valueDecimals: 2
        },
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [
              1,
              Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0)
                .get("rgba")
            ]
          ]
        },
        threshold: null
      }
    ]
  });
};

module.exports = GraphView;
