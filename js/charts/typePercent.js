// 客户分类占比
$(function () {
    $('#funnel-container').highcharts({
        chart: {
            type: 'funnel',
            marginTop: 30,
            marginRight:120,
            backgroundColor: 'rgba(67,67,67,1)',
            // events: {
            //     load: function() {
            //         var chart = this;
            //         console.log(this);
            //         Highcharts.each(chart.series[0].data, function(p, i) {
            //             console.log(p);
            //             console.log(i);
            //             p.dataLabel.attr({
            //                 x: (chart.plotWidth - chart.plotLeft)/2 ,
            //                 'text-anchor': 'middle'
            //             });
            //         });
            //     },
            //     redraw: function() {
            //         var chart = this;
            //         Highcharts.each(chart.series[0].data, function(p, i) {
            //             p.dataLabel.attr({
            //                 x: (chart.plotWidth - chart.plotLeft)/2,
            //                 'text-anchor': 'middle'
            //             });
            //         });
            //     }
            // }
        },
        title: {
            text: '客户分类占比',
            style:{
                fontSize:'15px',
                color:'#ffffff'
            }
        },
        plotOptions: {
            series: {
                minPointLength: 200,
                dataLabels: {
                    overflow:"none",
                    format: '<b>{point.name} {point.y:,.0f}</b> ({point.percentage:.1f}%)',
                    //format: '<b>{point.name} {point.y:,.0f}</b>',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true,
                    crop:false
                },
                neckWidth: '35%',
                neckHeight: '0%',
            },
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled:false
        },
        series: [{
            name: '用户',
            data: [
                ['市区单体',789],
                ['加载连锁',253],
                ['乡镇单体',113],
                ['直营连锁',59]
            ],
            sort:'descending',
            states:{
                inactive:{
                    enabled:false
                }
            }
        }]
    });
});