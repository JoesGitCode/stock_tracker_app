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
    const shareDateNoHyphen = companyInfo.historical.map(days => Date.parse(days.date))
    console.log(shareDateNoHyphen)
    // const shareDateInt = shareDateNoHyphen.map(date => parseInt(date))
    // console.log('should be the int of the date', shareDateInt);
    
    // const shareDateUTC = shareDateNoHyphen.map(date => [Date.UTC(date)])
    // console.log('this is the utc dates', shareDateUTC);
    // const firstDay = shareDateUTC[0]
    // console.log(firstDay);
    
    const sharePrice = companyInfo.historical.map(day => day.close)
    console.log('sharePirce', sharePrice);
    
    const sharePriceArr = sharePrice.map(days => [Object.values(days)])
    // const shareDate = companyInfo.historical.map(day => day.date)
    console.log('array of days?', sharePriceArr);
    // console.log(shareDate);
    
    
    this.renderGraph(companyName, sharePrice, shareDateNoHyphen)
}

GraphView.prototype.renderGraph = function(companyName, sharePrice, shareDateNoHyphen){
    Highcharts.stockChart('graph', {


        title: {
            text: `${companyName} Stock Price History (USD)`
                },

        subtitle: {
            text: 'Data supplied by financialmodelingprep.com'
        },

        xAxis: {
            data: shareDateNoHyphen,
            breaks: [{ // Nights
                from: Date.UTC(2014, 5, 30),
                to: Date.UTC(2014, 6, 2),
                repeat: 7 * 24 * 36e5
            }],
        },

        rangeSelector: {
            buttons: [{
                type: 'month',
                count: 1,
                text: '1M'
            }, {
                type: 'year',
                count: 1,
                text: '1Y'
            }, {
                type: 'all',
                count: 1,
                text: 'All'
            }],
            selected: 1,
            inputEnabled: false
        },

        series: [{
            name: companyName,
            type: 'area',
            data: sharePrice,
            pointStart: Date.UTC(2014, 4, 28), // firstDay[0],
            pointInterval: 24 * 3600 * 1000,
            // gapSize: 5,
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
                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            },
            threshold: null
        }]
    })
 }
    


    
        //     Highcharts.chart('graph', {
        //         chart: {
        //             zoomType: 'x'
        //         },
        //         title: {
        //             text: `${companyName} Share Price History`
        //         },
        //         subtitle: {
        //             text: document.ontouchstart === undefined ?
        //                 'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        //         },
        //         xAxis: {
        //             type: 'datetime',
        //             dateTimeLabelFormats: {
        //                 day: '%Y %m %d' 
        //              },
        //         },
        //         yAxis: {
        //             title: {
        //                 text: 'Price per Share (USD)'
        //             }
        //         },
        //         legend: {
        //             enabled: false
        //         },
        //         plotOptions: {
        //             area: {
        //                 fillColor: {
        //                     linearGradient: {
        //                         x1: 0,
        //                         y1: 0,
        //                         x2: 0,
        //                         y2: 1
        //                     },
        //                     stops: [
        //                         [0, Highcharts.getOptions().colors[0]],
        //                         [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
        //                     ]
        //                 },
        //                 marker: {
        //                     radius: 2
        //                 },
        //                 lineWidth: 1,
        //                 states: {
        //                     hover: {
        //                         lineWidth: 1
        //                     }
        //                 },
        //                 threshold: null
        //             }
        //         },
    
        //         series: [{
        //             type: 'area',
        //             name: 'Price per Share in USD',
        //             data: sharePrice,
        //             pointStart: Date.UTC(2014, 04, 28),
        //             pointInterval: 24 * 3600 * 1000 // one day
        //         }]
        //     });
        // }


            

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