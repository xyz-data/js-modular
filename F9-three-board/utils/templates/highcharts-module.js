$(function () {
    $('#container').highcharts({
        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },
        legend: {
            enabled: false
        },
        title: {
            // text: '不同国家糖和脂肪的摄入量',
            text: ''
        },
        subtitle: {
            // text: '数据来源: <a href="https://www.euromonitor.com/">Euromonitor</a> and <a href="https://data.oecd.org/">OECD</a>',
            text: ''
        },
        xAxis: {
            gridLineWidth: 1,
            title: {
                text: '每天脂肪摄入量'
            },
            labels: {
                format: '{value} gr'
            },
            plotLines: [
                {
                    color: 'black',
                    dashStyle: 'dot',
                    width: 2,
                    value: 65,
                    label: {
                        rotation: 0,
                        y: 15,
                        style: {
                            fontStyle: 'italic'
                        },
                        text: '正常脂肪摄入量65g/天'
                    },
                    zIndex: 3
                },
                // x line 2 
            ]
        },
        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: '每天糖的摄入量'
            },
            labels: {
                format: '{value} gr'
            },
            maxPadding: 0.2,
            plotLines: [
                {
                    color: 'black',
                    dashStyle: 'dot',
                    width: 2,
                    value: 50,
                    label: {
                        align: 'right',
                        style: {
                            fontStyle: 'italic'
                        },
                        text: '正常糖的摄入量 50g/天',
                        x: -10
                    },
                    zIndex: 3
                },
                // y line no
            ]
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: `
                <tr>
                    <th colspan="2">
                        <h3>{point.country}</h3>
                    </th>
                </tr>
                <tr>
                    <th>脂肪摄取量:</th>
                    <td>{point.x}g</td>
                </tr>
                <tr>
                    <th>糖摄取量:</th>
                    <td>{point.y}g</td>
                </tr>
                <tr>
                    <th>肥胖 (成年人):</th>
                    <td>{point.z}%</td>
                </tr>
            `,
            footerFormat: '</table>',
            followPointer: true
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,// counter name
                    format: '{point.name}'
                }
            }
        },// ponit data
        series: [
            {
                data: [
                    { x: 95, y: 95, z: 13.8, name: 'BE', country: '比利时' },// name, country
                    { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: '德国' },
                    { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: '芬兰' },
                    { x: 80.4, y: 102.5, z: 12, name: 'NL', country: '荷兰' },
                    { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: '瑞典' },
                    { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: '西班牙' },
                    { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: '法国' },
                    { x: 73.5, y: 83.1, z: 10, name: 'NO', country: '挪威' },
                    { x: 71, y: 93.2, z: 24.7, name: 'UK', country: '英国' },
                    { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: '意大利' },
                    { x: 68.6, y: 20, z: 16, name: 'RU', country: '俄罗斯' },
                    { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: '美国' },
                    { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: '匈牙利' },
                    { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: '葡萄牙' },
                    { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: '新西兰' }
                ]
            }
        ],
    });
});

// ["gpjs", "zqdm", "zqjc", "sshy", "zbqs", "mgsy", "mgjzc", "jlrtbzz", "jzcsyl", "zgb", "ltgb"]
// ["挂牌家数", "证券代码", "证券简称", "所属行业", "主板券商", "每股收益", "每股净资产", "净利润同比增长", "净资产收益率", "总股本", "流通股本"]


{
    "gpjs": 8,
    "zqdm": "松华新材",
    "zqjc": "872275",
    "sshy": "橡胶和塑料制品业",
    "zbqs": "东莞证券",
    "mgsy": 0.09,
    "mgjzc": 1.15,
    "jlrtbzz": 0,
    "jzcsyl": 0.08,
    "zgb": 14880000,
    "ltgb": 0
},

