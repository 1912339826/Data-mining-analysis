// 柱状图
<template>
  <div class="histogram">
    <div :id="idName" :style="{width: '100%',height: height}"></div>
  </div>
</template>

<script>
export default {
  name: "Histogram",
  data() {
    return {};
  },
  props: {
    num: {
      type: Number,
      default: 20
    },
    Color: {
      type: String,
      default: "#248cb3"
    },
    idName: {
      type: String,
      default: "meter"
    },
    height: {
      type: String,
      default: "200%"
    },
    series: {
      type: Array,
      default: () => {
        return [
          {
            name: "left",
            data: [2, 4, 6, 5, 5, 7, 8, 5, 6, 7, 5, 2],
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "top",
                formatter: "{c}",
                textStyle: {
                  color: this.Color
                }
              }
            }
          }
        ];
      }
    },
    datas: {
      type: Array,
      default: () => {
        return [
          "院机关",
          "1所",
          "2所",
          "3所",
          "4所",
          "5所",
          "6所",
          "7所",
          "8所",
          "9所",
          "10所",
          "11所"
        ];
      }
    }
  },
  watch: {},
  mounted() {
    this.visitor();
  },
  methods: {
    visitor() {
      let myChart = this.$echarts.init(
        document.getElementById(this.idName),
        "macarons"
      );
      myChart.setOption({
        color: [this.Color],
        tooltip: {
          show: true,
          formatter: "{b}:{c}"
        },
         legend: {
          data: ["迟到", "缺勤"],
          textStyle: {
            color: "#000000"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          axisTick: {
            alignWithLabel: true
          },
          data: this.datas,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#333333",
              fontSize: "0.625vw"
            }
          }
        },
        yAxis: {
          type: "value",
          name: "次数",
          min: 0,
          max: 8,
          interval: 1,
          axisLabel: {
            formatter: "{value}"
          },
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
