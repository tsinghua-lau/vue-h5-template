<template>
  <div id="box">
    <!-- 总流量 -->
    <div class="zll">
      <div class="left">
        <div class="title">
          总流量
        </div>
        <div id="jd">
         
        </div>
        <div class="po">
          <div class="top">
              <div class="name">
                环比
              </div>
              <div class="logo">
                  <img src="./img/bot.png" alt="" srcset="">
              </div>
              <div class="value">
                -2%
              </div>
          </div>
          <div class="bot">
 <div class="name">
                同比
              </div>
              <div class="logo">
                  <img src="./img/top.png" alt="" srcset="">
              </div>
              <div class="value">
                --%
              </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <div class="logo">
            <img src="./img/jin.png" alt="" />
          </div>
          <div class="content">
            <div class="title">
              今日累计
            </div>
            <div class="num"><span>4327896</span><i>辆</i></div>
          </div>
        </div>
        <div class="bot">
          <div class="logo">
            <img src="./img/zuo.png" alt="" />
          </div>
          <div class="content">
            <div class="title">
              昨日累计
            </div>
            <div class="num"><span>4327896</span><i>辆</i></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 今日省界流量 -->
    <div class="sjll">
      <div class="left">
        <div class="title">
          今日省界流量
        </div>
        <div class="contetnt">
          <div class="logo">
            <img src="./img/left.png" alt="" />
          </div>
          <div class="name">
            入苏
          </div>
          <div class="num">
            2148300
          </div>
        </div>
      </div>
      <div class="right">
        <div class="title"></div>

        <div class="contetnt">
          <div class="logo">
            <img src="./img/right.png" alt="" />
          </div>
          <div class="name">
            出苏
          </div>
          <div class="num">
            271890
          </div>
        </div>
      </div>
    </div>

    <!-- 走势对比 -->
    <div class="zsdb">
      <div class="title">
        昨日今日流量走势对比
      </div>
      <div id="echarts-db"></div>
    </div>

    <!-- 客车流量 -->
    <div class="kcll">
      <div class="title">
        客车流量
      </div>
      <div class="tj">
        <div class="left">
          <div class="logo">
            <img src="./img/jin.png" alt="" />
          </div>
          <div class="content">
            <div class="title">
              今日累计
            </div>
            <div class="num"><span>4327896</span><i>辆</i></div>
          </div>
        </div>
        <div class="right">
          <div class="logo">
            <img src="./img/zuo.png" alt="" />
          </div>
          <div class="content">
            <div class="title">
              昨日累计
            </div>
            <div class="num"><span>4327896</span><i>辆</i></div>
          </div>
        </div>
      </div>
      <div class="list" >
        <div class="item" v-for="item in list">
          <div class="label">
            {{item.label}}
          </div>
          <div class="num">
             {{item.label}}
          </div>
          <div class="pr">
            {{item.pr}}
          </div>
        </div>
      </div>
      <div class="thb">
        <div class="left">
<div class="name">
            同比
          </div>
          <div class="logo">
 <img src="./img/top.png" alt=""></img>
          </div>
          <div class="value">
-1%
          </div>
        </div>
        <div class="center">

        </div>
        <div class="right">
          <div class="name">
            环比
          </div>
          <div class="logo">
            <img src="./img/bot.png" alt="">
          </div>
          <div class="value">
--%
          </div>
        </div>
      </div>
    </div>

      <!-- 货车车流量 -->
    <div class="hcll">
      <div class="title">
        客车流量
      </div>
      <div class="tj">
        <div class="left">
          <div class="logo">
            <img src="./img/jin.png" alt="" />
          </div>
          <div class="content">
            <div class="title">
              今日累计
            </div>
            <div class="num"><span>4327896</span><i>辆</i></div>
          </div>
        </div>
        <div class="right">
          <div class="logo">
            <img src="./img/zuo.png" alt="" />
          </div>
          <div class="content">
            <div class="title">
              昨日累计
            </div>
            <div class="num"><span>4327896</span><i>辆</i></div>
          </div>
        </div>
      </div>
      <div class="list" >
        <div class="item" v-for="item in list">
          <div class="label">
            {{item.label}}
          </div>
          <div class="num">
             {{item.label}}
          </div>
          <div class="pr">
            {{item.pr}}
          </div>
        </div>
      </div>
      <div class="thb">
        <div class="left">
<div class="name">
            同比
          </div>
          <div class="logo">
 <img src="./img/top.png" alt=""></img>
          </div>
          <div class="value">
-1%
          </div>
        </div>
        <div class="center">

        </div>
        <div class="right">
          <div class="name">
            环比
          </div>
          <div class="logo">
            <img src="./img/bot.png" alt="">
          </div>
          <div class="value">
--%
          </div>
        </div>
      </div>
    </div>

    <!-- 流量排名 -->

    <div class="llpm">
      <div class="title">
        今日江苏高速路公司流量排名
      </div>
      <div class="content">
        <div class="item" v-for="(item,index) in pm">
          <div class="xh">
              {{index+1}}
          </div>
          <div class="name">
            {{item.name}}
          </div>
          <div class="pr">
            <div class="logo" v-show="item.logo">
              <span v-show="item.top">
                <img src="./img/top.png" alt="" srcset="">
              </span>
               <span v-show="!item.top">
                <img src="./img/bot.png" alt="" srcset="">
              </span>
              <i :style="{color:item.top?'#f12a55':'#3cb886'}">2</i>
            </div>
            <div class="num">1345667</div>
            <div class="jd" :style="{width:decimalToPercent(item.value)}"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/babel">
import * as api from "@/api/index";
import BaseTip from "@/component_basics/BaseTip";
// 组件
export default {
  name: "page-hello",
  components: {
    BaseTip,
  },
  data() {
    return {
      list:[{
        label:'货一',
        num:186399,
        pr:'39.87%'
      },{
        label:'货二',
        num:186399,
        pr:'39.87%'
      },{
        label:'货三',
        num:186399,
        pr:'39.87%'
      },{
        label:'货四',
        num:186399,
        pr:'39.87%'
      }],
      pm:[
        {name:'高管中心',value:50,logo:false,top:true,},
        {name:'连徐公司',value:60,logo:true,top:false,},
        {name:'苏通大桥公司',value:40,logo:false,top:true,},
        {name:'苏州高速',value:70,logo:true,top:true,},
        {name:'苏州绕城',value:65,logo:false,top:true,},
      ],
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    this.init();
  },
  methods: {
    decimalToPercent(value){
          let data = ((value/100)*100).toFixed(2)+'%'
                return data
    },
    init() {
      var myChart = this.$echarts.init(document.getElementById("echarts-db"));
      window.onresize = function() {
        myChart.resize();
      };
      let option = {
        // title: [
        //   {
        //     text: "昨日今日流量走势对比",
        //     subtext: "",
        //     left: 5,
        //     top: 10,
        //     textStyle: {
        //       //文字颜色
        //       color: "#000",
        //       //字体风格,'normal','italic','oblique'

        //       //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
        //       fontWeight: "600",
        //       //字体系列
        //       // fontFamily:'sans-serif',
        //       //字体大小
        //       fontSize: 15,
        //     },
        //   },
        // ],
        xAxis: {
          type: "category",
          	axisTick: {
              show: false
            },
            axisLine:{
              lineStyle:{
                color:"#6986a2"//x轴轴线颜色
              }
				  },

          boundaryGap: false,
          data: ["1:00", "4:00", "8:00", "12:00", "16:00", "18:00", "24:00"],
        },
        legend: [
           {
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              fontSize: 12,
              color: "#000",
            },
            top: "6%",
            left: "80%",
            data: [
              {
                name: "今日",
                icon: "rect",
              },
            ], //rect为矩形
          },
          {
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: "#4276aa",
              fontSize: 12,
              color: "#000",
            },
            top: "6%",
            left: "65%",
            data: [
              {
                name: "昨日",
                icon: "rect",
              },
            ], //rect为矩形
          },
         
        ],
        yAxis: {
          type: "value",
            axisLine:{
              lineStyle:{
                color:"#6986a2"//x轴轴线颜色
              }
				  },
        },
        grid: {
          bottom: "10%",
          left: "10%",
        },
        series: [
          {
            data: [5, 12, 7, 14, 8, 11, 9],
            type: "line",
            symbol: "none",
            smooth: true,
            name: "昨日",
            lineStyle: {
              color: "#0074f2", //改变折线颜色
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  // 渐变颜色
                  {
                    offset: 0,
                    color: "#bcdfff",
                  },
                  {
                    offset: 1,
                    color: "#ecfaff",
                  },
                ],
                global: false,
              },
            },
          },
          {
            data: [12, 4, 14, 5, 13, 4, 14],
            type: "line",
            symbol: "none",
            smooth: true,
            name: "今日",
            lineStyle: {
              color: "#00dae1", //改变折线颜色
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  // 渐变颜色
                  {
                    offset: 0,
                    color: "#b9fdfe",
                  },
                  {
                    offset: 1,
                    color: "#ecfaff",
                  },
                ],
                global: false,
              },
            },
          },
        ],
      };
      myChart.setOption(option);


      var myChart2 = this.$echarts.init(document.getElementById("jd"));
      window.onresize = function() {
        myChart2.resize();
      };
      let op = {
        angleAxis: {
	max: 100, // 满分
	clockwise: true, // 逆时针
    // 隐藏刻度线
	axisLine: {
		show: false
	},
	axisTick: {
		show: false
	},
	axisLabel: {
		show: false
	},
	splitLine: {
		show: false
	}
},
radiusAxis: {
	type: 'category',
    // 隐藏刻度线
	axisLine: {
		show: false
    },
    axisTick: {
		show: false
    },
    axisLabel: {
		show: false
    },
    splitLine: {
		show: false
    }
  },
polar: {
	center: ['50%', '50%'],
	radius: '160%' //图形大小
},
series: [{
	type: 'bar',
    data: [{
		name: '作文得分',
		value: 70,
		itemStyle: {
			normal: {
				color: { // 完成的圆环的颜色
                    colorStops: [{
                        offset: 1,
                        color: '#0091fe' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#0091fe' // 100% 处的颜色
                    }]
                }
			}
		},
    }],
	coordinateSystem: 'polar',
	roundCap: true,
	barWidth: 8,
	barGap: '-100%', // 两环重叠
	radius: ['50%', '51%'],
	z: 2,
},{ // 灰色环
    type: 'bar',
    data: [{
		value: 100,
		itemStyle: {
			color: '#00dae1',
		}
    }],
    coordinateSystem: 'polar',
    roundCap: true,
    barWidth:8,
    barGap: '-110%', // 两环重叠
    radius: ['48%', '53%'],
    z: 1
  }]
      }
       myChart2.setOption(op);
    },
    getData() {
      //  api.searchApi('ww', '').then(res => {
      //             this.$router.push({
      //                 name: 'details',
      //                 params: { need: res.data, car: this.carNum + '_' + value, time },
      //             });
      //         });
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less">
@import "./style.less";
</style>
