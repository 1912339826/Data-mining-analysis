// 纵向柱状图
<template>
  <div class="LengthwaysHistogram">
    <div :id="idName" :style="{width: '100%',height: height}"></div>
  </div>
</template>

<script>
export default {
  name: "LengthwaysHistogram",
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
            barHeight: 24,
            name: "left",
            data: [2, 4, 6, 5, 5, 7],
            barCategoryGap: "50%",
            type: "bar",
            itemStyle: {
              normal: {
                color: function(params) {
                  var myColor = [
                    "#ebdde3",
                    "#ebc5d6",
                    "#ebaec9",
                    "#eb96bc",
                    "#eb7faf",
                    "#ea68a2"
                  ];
                  var num = myColor.length;
                  return myColor[params.dataIndex];
                }
              }
            },
            label: {
              normal: {
                show: true,
                position: "right",
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
        return ["院机关", "1所", "2所", "3所", "4所", "5所"];
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
        grid: {
          left: "3%",
          right: "4%",
          bottom: "-15%",
          top: "0%",
          containLabel: true
        },
        legend: {
          data: ["1"],
          right: 10,
          top: 12,
          textStyle: {
            color: "#000000"
          },
          itemWidth: 12,
          itemHeight: 10
        },
        xAxis: {
          show: false,
          type: "value"
        },
        yAxis: {
          axisTick: {
            show: false,
            alignWithLabel: true
          },
          type: "category",
          data: ["周界", "营门", "办公楼", "办公楼周边", "主干道", "训练场"],
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
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
