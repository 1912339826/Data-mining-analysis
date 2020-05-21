// 饼图
<template>
  <div class="pie">
    <div :id="idName" :style="{width: '32.083vw',height: '13.854vw'}"></div>
  </div>
</template>

<script>
export default {
  name: "Pie",
  data() {
    return {};
  },
  props: {
    datas: {
      type: Array,
      default: []
    },
    legend: {
      type: Boolean,
      default: true
    },
    idName: {
      type: String,
      default: "myChart"
    },
    legendRight: {
      type: Number,
      default: 80
    },
    legendTop: {
      type: Number,
      default: 20
    },
    legendBottom: {
      type: Number,
      default: -10
    },
    seriesCenter: {
      type: Array,
      default: () => {
       return  ["21%", "50%"];
      }
    }
  },
  mounted() {
    if (this.legend) {
      this.visitor();
    } else {
      this.visitorLegend();
    }
  },
  methods: {
    visitor() {
      let myChart = this.$echarts.init(
        document.getElementById(this.idName),
        "macarons"
      );
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: [0, "75%"],
            label: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：} {per|{d}%}  ",
              backgroundColor: "#fff",
              borderColor: "#fff",
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: {
                  color: "#fff",
                  lineHeight: 0,
                  height: 0,
                  align: "center"
                },
                abg: {
                  backgroundColor: "#fff",
                  width: "100%",
                  align: "right",
                  height: 0
                },
                hr: {
                  width: "100%",
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: "0.729vw",
                  lineHeight: 0
                },
                per: {
                  color: "#000",
                  backgroundColor: "#fff",
                  padding: [2, 4],
                  fontSize: "0.729vw"
                }
              }
            },
            data: this.datas
            // [
            //   { value: 335, name: "单位1" },
            //   { value: 310, name: "单位2" },
            //   { value: 234, name: "单位3" },
            //   { value: 135, name: "单位4" },
            //   { value: 1048, name: "单位5" }
            // ]
          }
        ]
      });
    },
    visitorLegend() {
      let myChart = this.$echarts.init(
        document.getElementById(this.idName),
        "macarons"
      );
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: this.legendRight,
          top: this.legendTop,
          bottom: this.legendBottom
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: [0, "75%"],
            center: this.seriesCenter,
            label: {
              normal: {
                show: false,
                position: "center"
              }
            },
            data: this.datas
            // [
            //   { value: 335, name: "周界报警" },
            //   { value: 310, name: "紧急报警" },
            //   { value: 234, name: "门禁异常报警" },
            //   { value: 135, name: "车辆超违" },
            //   { value: 1048, name: "动环监控报警" },
            //   { value: 135, name: "用水用电报警" },
            //   { value: 135, name: "安防设备报警" },
            //   { value: 135, name: "枪弹相关报警" }
            // ]
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
</style>
