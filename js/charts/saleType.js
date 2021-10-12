$(function(){
    // 药店日销售额排行
    $("#barChart1").highcharts({
        chart: {
            type: 'bar',
            backgroundColor: 'rgba(67,67,67,1)'
        },
        title: {
            text: '药店日销售额排行',
            style:{
                fontSize:'15px',
                color:'#ffffff'
            }
        },
        xAxis: {
            lineWidth :0,
            categories: ['辉县***药店', '辉县***药店', '辉县***药店', '辉县***药店', '辉县***药店','辉县***药店','辉县***药店','辉县***药店'],
            labels:{
                style:{
                    fontSize:'8px',
                    color:'#ffffff'
                }
            },
            reverse:true,
            title: {
                text: null
            },
            sortDescending:true
        },
        yAxis: {
            lineWidth :0,
            tickWidth:0,
            labels: {
                enabled: false
            },//去掉刻度数字
            min: 0,
            gridLineWidth: 0,
            title: {
                text: '销售额 (元)',
                align: 'high',
                style:{
                    fontSize:'8px',
                    color:'#ffffff'
                }
            },


        },
        tooltip: {
            backgroundColor: '#DDDDDD',   // 背景颜色
            borderColor: '#666666',         // 边框颜色
            borderRadius: 10,             // 边框圆角
            borderWidth: 2,               // 边框宽度
            shadow: true,                 // 是否显示阴影
            animation: true,               // 是否启用动画效果
            style: {                      // 文字内容相关样式
                color: "#000000",
                fontSize: "12px",
                fontWeight: "blod",
                fontFamily: "Courir new"
            }
        },
        plotOptions: {

            bar: {
                borderWidth: 0,
                shadow: false,
                dataLabels: {
                    enabled: false,
                    allowOverlap: false
                }
            }
        },
        //数据标签
        // legend: {
        //     layout: 'vertical',
        //     align: 'right',
        //     verticalAlign: 'top',
        //     x: -40,
        //     y: 100,
        //     floating: true,
        //     borderWidth: 1,
        //     backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(67,67,67,1)'),
        //     shadow: false
        // },
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
            name: '销售额',
            //数据降序排列
            dataSorting: {
                enabled: true
            },
            data: [18205, 15000, 9000, 6000, 5500,8000,7000,9900]
        }]
    });
    //热销品种周销售排行
    $("#barChart2").highcharts({
    chart: {
        type: 'bar',
        backgroundColor: 'rgba(67,67,67,1)'
    },
    title: {
        text: '热销品种周销售排行',
        style:{
            fontSize:'15px',
            color:'#ffffff'
        }
    },
    xAxis: {
        lineWidth :0,
        categories: ['阿莫西林胶囊', '维生素AD滴剂', '金银花颗粒', '复方氨酚黄那敏', '红霉素软膏','赖安溥心颗粒','维生素D钙','板蓝根颗粒'],
        labels:{
            style:{
                fontSize:'11px',
                color:'#ffffff'
            }
        },
        reverse:true,
        title: {
            text: null
        },
        sortDescending:true
    },
    yAxis: {
        lineWidth :0,
        tickWidth:0,
        labels: {
            enabled: false
        },
        min: 0,
        gridLineWidth: 0,
        title: {
            text: '销售额 (元)',
            align: 'high',
            style:{
                fontSize:'11px',
                color:'#ffffff'
            }
        }
    },
    tooltip: {
        backgroundColor: '#DDDDDD',   // 背景颜色
        borderColor: '#666666',         // 边框颜色
        borderRadius: 10,             // 边框圆角
        borderWidth: 2,               // 边框宽度
        shadow: true,                 // 是否显示阴影
        animation: true,               // 是否启用动画效果
        style: {                      // 文字内容相关样式
            color: "#000000",
            fontSize: "12px",
            fontWeight: "blod",
            fontFamily: "Courir new"
        }
    },
    plotOptions: {
        bar: {
            borderWidth: 0,
            shadow: false,
            dataLabels: {
                enabled: false,
                allowOverlap: false // 允许数据标签重叠
            }
        }
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
        name: '销售额',
        //数据降序排列
        dataSorting: {
            enabled: true
        },
        data: [18205, 15000, 9000, 6000, 5500,8000,7000,9900]
    }]
    });

    //品类排名-药店分类占比
    Highcharts.setOptions({
        colors: ['#33FFDD', '#0066FF', '#ED561B', '#FFCC22', '#FF0000']
    });
    $("#barChart3").highcharts({
        chart: {
            type: 'bar',
            backgroundColor: 'rgba(67,67,67,1)'
        },
        title: {
            text: '品类排名-药店分类占比',
            style:{
                fontSize:'15px',
                color:'#ffffff'
            }
        },
        xAxis: {
            lineWidth :0,
            categories: ['心脑血管', '感冒用药', '风湿', '43223', '4575','47571','保健品'],
            labels:{
                style:{
                    fontSize:'11px',
                    color:'#ffffff'
                }
            }
        },
        yAxis: {
            tickWidth:0,
            gridLineWidth: 0,
            labels: {
                style:{
                    fontSize:'11px',
                    color:'#ffffff'
                }
            },
            min: 0,
            title: {
                text: '药品销售总量',
                align:'high',
                style:{
                    fontSize:'11px',
                    color:'#ffffff'
                }
            }
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    style:{
                        fontSize:'13px',
                        color:'#ffffff'
                    }
                },
                stacking: 'normal'
            }
        },
        legend: {
            align:'left', //水平方向位置
            verticalAlign:'top', //垂直方向位置
            y: -20, //距离Y轴的距离
            itemStyle : {
                'fontSize' : '12px',
                'color' : '#ffffff',
                x : 50,
                y : 20
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled:false
        },
        series: [{
            name: '连锁',
            data: [5, 3, 4, 7, 2,3,5]
        }, {
            name: '单体',
            data: [2, 2, 3, 2, 1,7,2]
        }]
    });
    //会员消费占比
    $("#pieChart").highcharts({
        chart: {
            type: 'pie',
            backgroundColor: 'rgba(67,67,67,1)'
        },
        title: {
            text: '会员消费占比',
            style:{
                'fontSize' : '15px',
                'color' : '#ffffff'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                size : 100,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled:false
        },
        series: [{
            innerSize: '50%',
            name: '占比',
            data: [
                ['会员消费', 789],
                [' 非会员消费', 253]
            ],
            states:{
                inactive:{
                    enabled:false
                }
            }
        }]
    });
    //会员消费分析
    $("#barChart4").highcharts({
        chart: {
            marginTop:30,
            type: 'column',
            backgroundColor: 'rgba(67,67,67,1)',
            plotBackgroundColor:'rgba(128,0,128,0.5)'
        },
        title: {
            text: '会员消费分析',
            style:{
                fontSize:'15px',
                color:'#ffffff'
            }
        },
        xAxis: {
            categories: [
                '高血压','感冒','抗生素','保健品','器械','肠道','钙片'
            ],
            labels:{
                style:{
                    fontSize:'8px',
                    color:'#ffffff'
                }
            },
            crosshair: true
        },
        yAxis: {
            min: 0,
            tickInterval:'10',
            lineWidth: 0,
            gridLineWidth: 0,
            tickWidth:0,
            labels:{
                style:{
                    fontSize:'8px',
                    color:'#ffffff'
                }
            },

            title: {
                enabled: false
            }
        },
        tooltip: {
            // head + 每个 point + footer 拼接成完整的 table
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} 元</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                borderWidth: 0
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled:false
        },
        series: [{
            showInLegend: false,
            color: "#0000FF",
            // name: '东京',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]
        }]
    });
});
