// 设置时间
let setTime = function() {
  let res = getCurrentTime();
  $(".currentTime").text(res.currentTime);
  $(".currentDate").text(res.currentDate);
  $(".currentWeek").text(res.currentWeek);
};
setTime();

// 定时更新时间
let timing = function() {
  setInterval(function() {
    setTime();
  }, 1000);
};
timing();



const myChart1 = echarts.init(document.getElementById("distributeByTypeChart"));
const myChart2 = echarts.init(document.getElementById("faultAnalysisChart"));
const myChart3 = echarts.init(document.getElementById("mapChart"));
const myChart4 = echarts.init(document.getElementById("situationAnalysisChart"));
const myChart5 = echarts.init(document.getElementById("distributeByStatusChart"));
const myChart6 = echarts.init(document.getElementById("distributeByServerChart"));
// 按装备类型分布
let distributeByTypeChart = function() {
  let option2  = {
    tooltip: {
      formatter: '{a} <br/>{c} {b}'
    },
    toolbox: {
      show: false,
      feature: {
        mark: {show: true},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    series: [
      {
        name: 'CPU资源',
        type: 'gauge',
        min: 0,
        max: 100,
        splitNumber: 5,
        radius: '80 %',
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
            width: 2,
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        axisLabel: {            // 坐标轴小标记
          fontWeight: 'bolder',
          color: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 10
        },
        axisTick: {            // 坐标轴小标记
          length: 10,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        splitLine: {           // 分隔线
          length: 10,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            width: 3,
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        pointer: {           // 分隔线
          shadowColor: '#fff', //默认透明
          shadowBlur: 5
        },
        title: {
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            fontSize: 10,
            fontStyle: 'italic',
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        detail: {
          backgroundColor: 'rgba(30,144,255,0.8)',
          borderWidth: 1,
          borderColor: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 5,
          offsetCenter: [0, '50%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            color: '#fff'
          }
        },
        data: [{value: 40, name: 'CPU'}]
      },
      {
        name: '转速',
        type: 'gauge',
        center: ['25%', '55%'],    // 默认全局居中
        radius: '60%',
        min: 0,
        max: 7,
        endAngle: 45,
        splitNumber: 7,
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
            width: 2,
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        axisLabel: {            // 坐标轴小标记
          fontWeight: 'bolder',
          color: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 10
        },
        axisTick: {            // 坐标轴小标记
          length: 12,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        splitLine: {           // 分隔线
          length: 20,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            width: 3,
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        pointer: {
          width: 5,
          shadowColor: '#fff', //默认透明
          shadowBlur: 5
        },
        title: {
          offsetCenter: [0, '-30%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            fontStyle: 'italic',
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        detail: {
          borderColor: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 5,
          width: 80,
          height: 30,
          offsetCenter: [25, '20%'],       // x, y，单位px
          textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder',
            color: '#fff'
          }
        },
        data: [{value: 1.5, name: 'x1000 r/min'}]
      },
      {
        name: '油表',
        type: 'gauge',
        center: ['75%', '50%'],    // 默认全局居中
        radius: '60%',
        min: 0,
        max: 2,
        startAngle: 135,
        endAngle: 45,
        splitNumber: 2,
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
            width: 2,
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        axisTick: {            // 坐标轴小标记
          length: 12,        // 属性length控制线长
          lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        axisLabel: {
          fontWeight: 'bolder',
          color: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 10,
          formatter: function (v){
            switch (v + '') {
              case '0': return 'E';
              case '1': return 'Gas';
              case '2': return 'F';
            }
          }
        },
        splitLine: {           // 分隔线
          length:15,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            width:3,
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        pointer: {
          width:2,
          shadowColor: '#fff', //默认透明
          shadowBlur: 5
        },
        title: {
          show: false
        },
        detail: {
          show: false
        },
        data: [{value: 0.5, name: 'gas'}]
      },
      {
        name: '水表',
        type: 'gauge',
        center: ['75%', '50%'],    // 默认全局居中
        radius: '30%',
        min: 0,
        max: 2,
        startAngle: 315,
        endAngle: 225,
        splitNumber: 2,
        axisLine: {            // 坐标轴线
          lineStyle: {       // 属性lineStyle控制线条样式
            color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
            width: 2,
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        axisTick: {            // 坐标轴小标记
          show: false
        },
        axisLabel: {
          fontWeight: 'bolder',
          color: '#fff',
          shadowColor: '#fff', //默认透明
          shadowBlur: 10,
          formatter: function(v){
            switch (v + '') {
              case '0': return 'H';
              case '1': return 'Water';
              case '2': return 'C';
            }
          }
        },
        splitLine: {           // 分隔线
          length: 15,         // 属性length控制线长
          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            width: 3,
            color: '#fff',
            shadowColor: '#fff', //默认透明
            shadowBlur: 10
          }
        },
        pointer: {
          width: 2,
          shadowColor: '#fff', //默认透明
          shadowBlur: 5
        },
        title: {
          show: false
        },
        detail: {
          show: false
        },
        data:[{value: 0.5, name: 'gas'}]
      }
    ]
  };
  myChart1.setOption(option2);
};
distributeByTypeChart();

// 近一年故障分析
let faultAnalysisChart = function() {
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "white"
        }
      }
    },
    textStyle: {
      color: "#a0a8b9"
    },
    grid: {
      left: "8%",
      bottom: "16%"
    },
    legend: {
      data: ["故障数", "故障率", "维修率"],
      textStyle: {
        color: "#929aad"
      },
      right: "2%",
      top: "0%"
    },
    xAxis: [
      {
        type: "category",
        name: "",
        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        axisPointer: {
          type: "shadow"
        },
        axisLabel: {
          formatter: "{value}月"
        },

      }
    ],
    yAxis: [
      {
        type: "value",
        name: "故障数",
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: "{value}"
        },

      },
      {
        type: "value",
        name: "",
        min: 0,
        max: 100,
        interval: 20,
        axisLabel: {
          formatter: "{value}%"
        }
      }
    ],
    series: [
      {
        name: "故障数",
        type: "bar",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#0182e8"
            },
            {
              offset: 1,
              color: "#021b4d"
            }
          ]),
          barBorderRadius: 5
        },
        barWidth: "10px",
        data: [146, 130, 106, 180, 107, 160, 150, 140, 160, 170, 180, 190]
      },
      {
        name: "故障率",
        type: "line",
        itemStyle: {
          color: "#fe9c43"
        },
        data: [
          2.6,
          5.9,
          9.0,
          26.4,
          28.7,
          70.7,
          175.6,
          182.2,
          48.7,
          18.8,
          6.0,
          2.3
        ]
      },
      {
        name: "维修率",
        type: "line",
        itemStyle: {
          color: "#1cc840"
        },
        yAxisIndex: 1,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    ]
  };
  myChart2.setOption(option);
};
faultAnalysisChart();

//map
let mapChart = function() {
  function randomData() {
    return Math.round(Math.random() * 1000);
  }
  let option = {
    tooltip: {
      trigger: "item"
    },
    series: [
      {
        name: "iphone3",
        type: "map",
        mapType: "china",
        roam: false,
        label: {
          normal: {
            show: true
          },
          emphasis: {
            show: true
          }
        },

        itemStyle:{
          areaColor:'#0347ad',
          borderColor:"#0ec7ff",
        },
        data: [
          { name: "北京", value: randomData() },
          { name: "天津", value: randomData() },
          { name: "上海", value: randomData() },
          { name: "重庆", value: randomData() },
          { name: "河北", value: randomData() },
          { name: "河南", value: randomData() },
          { name: "云南", value: randomData() },
          { name: "辽宁", value: randomData() }
        ]
      },
    ]
  };
  myChart3.setOption(option);
};
mapChart();
//个行政区故障情况分析
let situationAnalysisChart = function() {
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "white"
        }
      }
    },
    textStyle: {
      color: "#a0a8b9"
    },
    grid: {
      left: "8%",
      bottom: "16%"
    },
    legend: {
      data: ["已处理", "处理中", "未处理", "故障率", "维修率"],
      textStyle: {
        color: "#929aad"
      },
      right: "2%",
      top: "0%"
    },
    xAxis: [
      {
        type: "category",
        name: "",
        data: ["北京市", "天津市", "上海市", "广州市", "深圳市", "芜湖市", "郑州市", "南京市", "广西市", "西宁市", "西昌市", "洛阳市"],
        axisPointer: {
          type: "shadow"
        },
        axisLabel: {
          formatter: "{value}"
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        name: "故障数",

        axisLabel: {
          formatter: "{value}"
        }
      },
      {
        type: "value",
        name: "",
        min: 0,
        max: 100,
        interval: 20,
        axisLabel: {
          formatter: "{value}%"
        }
      }
    ],
    series: [
      {
        name:'已处理',
        type:'bar',
        barWidth : 10,
        stack: '数量',
        itemStyle:{
          color:'#0190fc',
        },
        data:[11, 12, 13, 14, 15, 16, 17,18, 19, 20, 21, 22]
      },
      {
        name:'处理中',
        type:'bar',
        barWidth : 10,
        stack: '数量',
        itemStyle:{
          color:'#01defd',
        },
        data:[22, 23, 23, 24, 25, 26, 27,28, 29, 30, 31, 32]
      },
      {
        name:'未处理',
        type:'bar',
        barWidth : 10,
        stack: '数量',
        itemStyle:{
          color:'#54f4cd',
        },
        data:[30, 31, 32, 33, 34, 35, 36,37, 38, 39, 40, 41]
      },
      {
        name:'故障率',
        type:'line',
        itemStyle:{
          color:'#ff00ff',
        },
        data:[10, 15, 34, 54, 12, 31, 12,10, 41, 21, 22, 40]
      },
      {
        name:'维修率',
        type:'line',
        itemStyle:{
          color:'#ff9f25',
        },
        data:[10, 58, 21, 12, 14, 38, 12,10, 54, 78, 32, 87]
      },
    ]
  };
  myChart4.setOption(option);
};
situationAnalysisChart();

//故障状态分布
let distributeByStatusChart = function() {
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    graphic:{
      type: 'text',
      left: 'center', // 相对父元素居中
      top: 'middle',  // 相对父元素居中
      style: {
        fill: 'white',
        text: 141,
        fontSize: '28',
      }
    },

    series: [
      {
        name: "",
        type: "pie",
        hoverAnimation: true,
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          formatter:'{a|{d}%}\n{b}',
          show: true,
          position: "outside",
          color:'#15a7f1',
          verticalAlign:'top',
          rich:{
            a:{
              color: 'white',
              lineHeight: 22,
              align: 'left',
            },

          }
        },
        labelLine: {
          show: true,
          length:20,
          length2:50,
          lineStyle:{
            color:'#15a7f1',
          }
        },
        data: [
          {
            value: 50,
            name: "待处理",
            itemStyle:{
              color:'#162959'
            }
          },
          { value: 32, name: "已处理",
            itemStyle:{
              color:'#1ac2fa'
            }
          },
          { value: 58, name: "处理中",
            itemStyle:{
              color:'#23548b'
            }
          }
        ]
      }
    ]
  };
  myChart5.setOption(option);
};
distributeByStatusChart();
//保修服务分布
let distributeByServerChart = function() {
  let option = {
    tooltip: {},

    radar: [
      {
        indicator: [
          { text: '主动服务',max:50 },
          { text: '微信' ,max:50},
          { text: '400电话',max:50 },
          { text: '后台保障' ,max:50},
          { text: 'QQ群' ,max:50},
          { text: '人工服务',max:50 }
        ],

        startAngle: 30,
        splitNumber: 4,
        shape: 'circle',
        name: {
          formatter:'{value}',
          textStyle: {
            color:'#1ab1ef'
          }
        },
        splitArea: {
          show:true,
          areaStyle: {
            color: ['#051d64','#041d64', '#03185f','#021358'],
            shadowColor: '#0f3ba8',
            shadowBlur: 10
          }
        },
        axisLine: {
          lineStyle: {
            color: '#2c8ebe',
            type:'dashed'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'transparent'
          }
        }
      },

    ],
    series: [
      {
        name: '服务分布',
        type: 'radar',
        itemStyle: {
          color:'#1f9cf5',
        },
        label: {
          normal: {
            show: true,
            color:'white',
          }
        },
        areaStyle: {
          normal: {
            opacity: 0.7,
            color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
              {
                color: '#093574',
                offset: 0
              },
              {
                color: '#093574',
                offset: 1
              }
            ])
          }
        },
        data: [
          {
            value: [21, 31, 25, 34, 12,21],

          }
        ]
      },

    ]
  }
  myChart6.setOption(option);
};
distributeByServerChart();


//图例适应屏幕变化
let chartResize = function(){
  myChart1.resize();
  myChart2.resize();
  myChart3.resize();
  myChart4.resize();
  myChart5.resize();
  myChart6.resize();
}
window.onresize = debounce(chartResize,500);
