// 甘特图（项目进度表）
<template>
  <div class="ProgressChart">
    <div :id="idName" :style="{width: '100%',height: '250%'}"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressChart",
  data() {
    return {};
  },
  props: {
    datas: {
      type: Array,
      default: () => {
        return [];
      }
    },
    idName: {
      type: String,
      default: "ProgressChartsssssss"
    }
  },
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
        backgroundColor: "#fff",
        legend: {
          data: ["项目实施阶段", "项目验收阶段"],
          align: "right",
          right: 0,
          top: 0
        },
        grid: {
          containLabel: true,
          show: true,
          right: 25,
          left: 10,
          bottom: 5,
          top: 30
        },
        xAxis: {
          type: "time",
          axisLine: {
            lineStyle: {
              show: false,
              color: "rgba(0,0,0,0)"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              color: "#1a1a1a" //X轴文字颜色
            }
          },
          position: "top"
        },
        yAxis: {
          axisLabel: {
            show: true,
            interval: 0
          },
          data: ["任务7", "任务6", "任务5", "任务4", "任务3", "任务2", "任务1"]
        },
        // tooltip: {
        //   trigger: "axis",
        //   formatter: function(params) {
        //     var res = "";
        //     var name = "";
        //     var start0 = "";
        //     var start = "";
        //     var end0 = "";
        //     var end = "";
        //     for (var i in params) {
        //       var k = i % 2;
        //       if (!k) {
        //         //偶数
        //         start0 = params[i].data;
        //         console.log(start0);
        //         start =
        //           start0.getFullYear() +
        //           "-" +
        //           (start0.getMonth() + 1) +
        //           "-" +
        //           start0.getDate();
        //       }
        //       if (k) {
        //         //奇数
        //         name = params[i].seriesName;
        //         end0 = params[i].data;
        //         end =
        //           end0.getFullYear() +
        //           "-" +
        //           (end0.getMonth() + 1) +
        //           "-" +
        //           end0.getDate();
        //         res += name + " : " + end + "~" + start + "</br>";
        //       }
        //     }
        //     return res;
        //   }
        // },
        series: [
          {
            name: "项目实施阶段",
            type: "bar",
            stack: "总量5",
            itemStyle: {
              normal: {
                color: "#0f91c0",
                borderColor: "#fff",
                borderWidth: 2
              }
            },
            zlevel: -1,
            data: [
              new Date(""),
              new Date(""),
              new Date(""),
              new Date("2019-10-10 00:00:00"),
              new Date("2019-10-10 00:00:00"),
              new Date("2019-10-06 00:00:00"),
              new Date("2019-10-04 00:00:00")
            ]
          },
          {
            name: "项目实施阶段",
            type: "bar",
            stack: "总量5",
            itemStyle: {
              normal: {
                color: "white"
              }
            },
            zlevel: -1,
            z: 3,
            data: [
              new Date(""),
              new Date(""),
              new Date(""),
              new Date("2019-10-08 12:00:00"),
              new Date("2019-10-15 18:00:00"),
              new Date("2019-10-03 12:00:00"),
              new Date("2019-10-03 00:00:00")
            ]
          },
          {
            name: "项目验收阶段",
            type: "bar",
            stack: "总量6",
            itemStyle: {
              normal: {
                color: "#c2e1f2",
                borderColor: "#fff",
                borderWidth: 2
              }
            },
            zlevel: -1,
            data: [
              new Date("2019-10-21 00:00:00"),
              new Date("2019-10-19 12:00:00"),
              new Date("2019-10-16 18:00:00"),
              new Date("2019-10-12 12:00:00"),
              new Date("2019-10-11 00:00:00"),
              new Date(""),
              new Date("")
            ]
          },
          {
            name: "项目验收阶段",
            type: "bar",
            stack: "总量6",
            itemStyle: {
              normal: {
                color: "white"
              }
            },
            zlevel: -1,
            z: 3,
            data: [
              new Date("2019-10-18 00:00:00"),
              new Date("2019-10-14 12:00:00"),
              new Date("2019-10-12 12:00:00"),
              new Date("2019-10-10 00:00:00"),
              new Date("2019-10-10 00:00:00"),
              new Date(""),
              new Date("")
            ]
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
</style>
