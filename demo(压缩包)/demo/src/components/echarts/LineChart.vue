// 有背景的折线图
<template>
  <div class="lineChart">
    <div :id="idName" :style="{width: '100%',height: '200%' }"></div>
  </div>
</template>

<script>
export default {
  name: "LineChart",
  data() {
    return {};
  },
  props: {
    color: {
      type: String,
      default: "#f26262"
    },
    idName: {
      type: String,
      default: "lineChart"
    },
    name:{
      type: String,
      default: "次数"
    },
    series: {
      type: Array,
      default: function() {
        return [
          {
            data: [3, 1, 4, 5, 4, 5, 8],
            type: "line",
            smooth: false,
            symbol: "circle",
            symbolSize: 5,
            sampling: "average",
            itemStyle: {
              color: this.color
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: this.color
                },
                {
                  offset: 1,
                  color: "#fff"
                }
              ])
            }
          }
        ];
      }
    }
  },
  watch: {},
  mounted() {
    console.log(this.height);
    this.visitor();
  },
  methods: {
    visitor() {
      let myChart = this.$echarts.init(
        document.getElementById(this.idName),
        "macarons"
      );
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#aaaaaa"
            }
          }
        },
        legend: {
          data: ["进", "出"],
          top: "15%",
          textStyle: {
            color: "#000000"
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["2:00", "4:00", "6:00", "8:00", "10:00", "12:00", "14:00"],
          axisLine: {
            show: true,
            lineStyle: {
              color: "#333333",
              fontSize: "0.625vw"
            }
          }
        },
        yAxis: {
          name: this.name,
          type: "value",
          axisLine: {
            show: true,
            lineStyle: {
              color: "#333333",
              fontSize: "0.625vw"
            }
          }
        },
        series: this.series
      });
    }
  }
};
</script>
<style scoped>
</style>
