const PubSub = require('../helpers/pub_sub')

const GraphView = function(container){
    this.container = container
}


GraphView.prototype.bindEvents = function(){
    PubSub.subscribe("StockModel: Company-realtime-info", (event) => {
        console.log('company info', event.detail);
        const companyInfo = event.detail;
        this.render(companyInfo)
        })
}

GraphView.prototype.render = function(companyInfo){
    const companyName = companyInfo.symbol
    // const shareDateNoHyphen = companyInfo.historical.map(days => days.date.replace(/-/g, ""))
    // const shareDateInt = sharePrice.map(date => parseInt(date))
    const sharePrice = companyInfo.historical.map(day => day.close)
    console.log('sharePirce', sharePrice);
    
    const sharePriceArr = sharePrice.map(days => Object.values(days))
    // const shareDate = companyInfo.historical.map(day => day.date)
    console.log('array of days?', sharePriceArr);
    // console.log(shareDate);
    
    
    this.renderGraph(companyName, sharePrice)
}

GraphView.prototype.renderGraph = function(companyName, sharePrice){
    
            Highcharts.chart('graph', {
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: `${companyName} Share Price History`
                },
                subtitle: {
                    text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        day: '%Y %m %d' 
                     },
                },
                yAxis: {
                    title: {
                        text: 'Price per Share (USD)'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
    
                series: [{
                    type: 'area',
                    name: 'Price per Share in USD',
                    data: sharePrice,
                    pointStart: Date.UTC(2014, 04, 28),
                    pointInterval: 24 * 3600 * 1000 // one day
                }]
            });
        }


            

// GraphView.prototype.render = function(companyInfo){
//     console.log(companyInfo.financials[0].Revenue);
//     console.log(companyInfo.symbol);
//     const companyName = companyInfo.symbol
//     const revenueString = companyInfo.financials.map(year => year.Revenue)
//     console.log(revenueString);
//     const revenue = revenueString.map(rev => parseFloat(rev))
//     console.log('all the revenue array', revenue);
//     this.renderGraph(companyName, revenue)
// }

// GraphView.prototype.renderGraph = function(companyName, revenue){
//     console.log('renderGraph data', revenue);
    
//     Highcharts.chart('graph', {

//         title: {
//             text: `${companyName} share price, 2010-2019`
//         },
        
//         subtitle: {
//             text: 'Source: financialmodelingprep.com'
//         },
        
//         yAxis: {
//             title: {
//                 text: 'US Dollars'
//             }
//         },
//         legend: {
//             layout: 'vertical',
//             align: 'right',
//             verticalAlign: 'middle'
//         },
        
//         plotOptions: {
//             series: {
//                 label: {
//                     connectorAllowed: false
//                 },
//                 pointStart: 2010
//             }
//         },
        
//         series: [{
//             name: 'Revenue',
//             data: revenue
            
//         }],
        
//         responsive: {
//             rules: [{
//                 condition: {
//                     maxWidth: 500
//                 },
//                 chartOptions: {
//                     legend: {
//                         layout: 'horizontal',
//                         align: 'center',
//                         verticalAlign: 'bottom'
//                     }
//                 }
//             }]
//         }
        
//         });
// }

module.exports = GraphView;