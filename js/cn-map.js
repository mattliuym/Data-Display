Highcharts.setOptions({
    lang: {
        drillUpText: '< 返回 “{series.name}”'
    }
});
var map = null,
    geochina = 'https://data.jianshukeji.com/jsonp?filename=geochina/';//地图数据
$.getJSON(geochina + 'china.json&callback=?', function(mapdata) {
    var data = [];
    // 随机数据
    Highcharts.each(mapdata.features, function(md, index) {
        var tmp = {
            name: md.properties.name,
            value: Math.floor((Math.random() * 10000) + 1) // 生成 1 ~ 10000 随机值
        };
        if(md.properties.drilldown) {
            tmp.drilldown = md.properties.drilldown;
        }
        data.push(tmp);
    });
    map = new Highcharts.Map('container', {
        chart: {
            backgroundColor:'rgba(0,0,0,0)',
            events: {
                drilldown: function(e) {
                    this.tooltip.hide();
                    console.log(e);
                    // 异步下钻
                    if (e.point.drilldown) {
                        var pointName = e.point.properties.fullname;
                        map.showLoading('载入中，请稍后...');
                        // 获取二级行政地区数据并更新图表
                        $.getJSON(geochina +   e.point.drilldown + '.json&callback=?', function(data) {
                            data = Highcharts.geojson(data);
                            //生成随机数
                            Highcharts.each(data, function(d) {
                                //console.log(d);//d本为地市数据，d.value为地市数据赋值，循环遍历
                                if(d.properties.drilldown) {
                                    d.drilldown = d.properties.drilldown;
                                }
                                d.value = Math.floor((Math.random() * 2000) + 1); // 生成 1 ~ 2000 随机值
                            });
                            map.hideLoading();
                            //console.log(data);
                            map.addSeriesAsDrilldown(e.point, {
                                name: e.point.name,
                                data: data,//地市数据
                                dataLabels: {
                                    enabled: true,
                                    format: '{point.name}'
                                }
                            });
                            //console.log(data);
                            map.setTitle({
                                text: pointName
                            });
                        });
                    }
                },
                drillup: function() {
                    map.setTitle({
                        text: '药精灵全国地区分布图'
                    });
                }
            }
        },
        title: {
            text: '药精灵全国地区分布图',
            style:{
                color:"#ffffff"
            }
        },
        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        // tooltip: {
        //     useHTML: true,
        //     headerFormat: '<table><tr><td>{point.name}</td></tr>',
        //     pointFormat: '<tr><td>全称</td><td>{point.properties.fullname}</td></tr>' +
        //         '<tr><td>行政编号</td><td>{point.properties.areacode}</td></tr>' +
        //         '<tr><td>父级</td><td>{point.properties.parent}</td></tr>' +
        //         '<tr><td>经纬度</td><td>{point.properties.longitude},{point.properties.latitude}</td></tr>' ,
        //     footerFormat: '</table>'
        // },
        colorAxis: {
            min: 0,
            minColor: '#fff',
            maxColor: '#006cee',
            labels:{
                style:{
                    "color":"white","fontWeight":"bold"
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
            data: data,
            mapData: mapdata,
            joinBy: 'name',
            name: '全国范围',
            states: {
                hover: {
                    color: '#a4edba'
                }
            }
        }]
    });
    console.log(data);
});
