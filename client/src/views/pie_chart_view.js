const PubSub = require('../helpers/pub_sub.js')

const PieChart = function(container){
    this.container = container
}

PieChart.prototype.bindEvents = function(){

    PubSub.subscribe('Stock:data-loaded', (event) => {
        const stockData = event.detail
        const dataArrayForPieChart = []
        stockData.forEach( (stock) => {
            dataArrayForPieChart.push({name: stock.name, y: parseInt(stock.strike_price)})
          })
       this.render(dataArrayForPieChart)
    })
}

PieChart.prototype.render = function(dataArrayForPieChart){

    Highcharts.chart('pie-chart', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Your Portfolio',
            style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white'
            },
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white'
                    }
                }
            }
        },
        series: [{
            name: 'Allocation',
            colorByPoint: true,
            data: dataArrayForPieChart
        }]

    });
}

module.exports = PieChart;
