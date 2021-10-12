//用户活跃度 统计图
var data1=[{
    "name":'活跃度',
    "data": [41, 25, 25, 69, 9,50,30,23,17]
}];
var data2=[{
    name:'活跃度',
    data: [14, 35, 50, 69, 13,50,30,23,71]
}];
var data3=[{
    name:'活跃度',
    data: [14, 52, 24, 70, 19,15,30,32,17]
}];

$(function () {
    $('#containera').highcharts({

        chart:{
            backgroundColor:'rgba(33,33,33)'
        },
        title: {
            text: '区域活跃度走势',
            style:{
                fontSize:'10px',
                color:"#ffffff"
            }
        },
        xAxis: {
            categories: ['郑州', '开封', '南阳', '洛阳', '商丘','焦作','周口','驻马店','平顶山'],
            labels:{
                style:{
                    fontSize:'8px',
                    color:'#ffffff'
                }
            },
            lineColor:"black",
            lineWidth: 0,
            tickWidth:0
        },
        legend: {
            enabled:false
        },
        yAxis:{
            title:null,
            lineWidth: 0,
            gridLineWidth: 0,
            tickWidth:0,
            tickPositions:[0,40,80]
        },
        labels:{
            enable:false
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled:false
        },
        plotOptions: {
            series: {
                lineWidth: 1,
                marker: {
                    radius: 1
                }
            }
        },
        series:data1,
        showInLegend: false

    });
});

    function loadB(){
        $('#containerb').highcharts({

            chart:{
                backgroundColor:'rgba(33,33,33)'
            },
            title: {
                text: '区域活跃度走势',
                style:{
                    fontSize:'10px',
                    color:"#ffffff"
                }
            },
            xAxis: {
                categories: ['郑州', '开封', '南阳', '洛阳', '商丘','焦作','周口','驻马店','平顶山'],
                labels:{
                    style:{
                        fontSize:'8px',
                        color:'#ffffff'
                    }
                },
                lineColor:"black",
                lineWidth: 0,
                tickWidth:0
            },
            legend: {
                enabled:false
            },
            yAxis:{
                title:null,
                lineWidth: 0,
                gridLineWidth: 0,
                tickWidth:0,
                tickPositions:[0,40,80]
            },
            labels:{
                enable:false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled:false
            },
            plotOptions: {
                series: {
                    lineWidth: 1,
                    marker: {
                        radius: 1
                    }
                }
            },
            series:data2,
            showInLegend: false

        });
    }
    function loadC(){
        $('#containerc').highcharts({
            chart:{
                backgroundColor:'rgba(33,33,33)'
            },
            title: {
                text: '区域活跃度走势',
                style:{
                    fontSize:'10px',
                    color:"#ffffff"
                }
            },
            xAxis: {
                categories: ['郑州', '开封', '南阳', '洛阳', '商丘','焦作','周口','驻马店','平顶山'],
                labels:{
                    style:{
                        fontSize:'8px',
                        color:'#ffffff'
                    }
                },
                lineColor:"black",
                lineWidth: 0,
                tickWidth:0
            },
            legend: {
                enabled:false
            },
            yAxis:{
                title:null,
                lineWidth: 0,
                gridLineWidth: 0,
                tickWidth:0,
                tickPositions:[0,40,80]
            },
            labels:{
                enable:false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled:false
            },
            plotOptions: {
                series: {
                    lineWidth: 1,
                    marker: {
                        radius: 1
                    }
                }
            },
            series:data3,
            showInLegend: false
        });
    }


