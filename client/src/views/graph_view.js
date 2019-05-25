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
    console.log(companyInfo.financials[0].Revenue);
    console.log(companyInfo.symbol);
    const companyName = companyInfo.symbol
    const revenueString = companyInfo.financials.map(year => year.Revenue)
    console.log(revenueString);
    const revenue = revenueString.map(rev => parseFloat(rev))
    console.log('all the revenue array', revenue);
    this.renderGraph(companyName, revenue)
}

GraphView.prototype.renderGraph = function(companyName, revenue){
    console.log('renderGraph data', revenue);
    
    Highcharts.chart('graph', {

        title: {
            text: `${companyName} share price, 2010-2019`
        },
        
        subtitle: {
            text: 'Source: financialmodelingprep.com'
        },
        
        yAxis: {
            title: {
                text: 'US Dollars'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
        
        series: [{
            name: 'Revenue',
            data: revenue
            
        }],
        
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
        
        });
}

module.exports = GraphView;