// 仪表
<template>
  <div class="pie">
    <div :id="idName" :style="{width: '15.156vw',height: '10.729vw'}"></div>
  </div>
</template>

<script>
export default {
  name: "Meter",
  data() {
    return {
      Color: "#24b375"
    };
  },
  props: {
    num: {
      type: Number,
      default: 20
    },
    idName: {
      type: String,
      default: "meter"
    }
  },
  watch: {
    num(news, olds) {
      if (news < 50) {
        this.Color = "#24b375";
        this.visitor();
      } else if (news > 50) {
        this.Color = "#ff704a";
        this.visitor();
      } else if (news == 50) {
        this.Color = "#1f98c4";
        this.visitor();
      }
    }
  },
  mounted() {
    if (this.num < 50) {
      this.Color = "#24b375";
      this.visitor();
    } else if (this.num > 50) {
      this.Color = "#ff704a";
      this.visitor();
    } else if (this.num == 50) {
      this.Color = "#1f98c4";
      this.visitor();
    }
  },
  methods: {
    visitor() {
      var data = { value: this.num, label: "良", color: this.Color };
      var max = 100;
      let myChart = this.$echarts.init(
        document.getElementById(this.idName),
        "macarons"
      );
      myChart.setOption({
        series: [
          {
            name: "",
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            radius: "100%",
            center: ["50%", "70%"],
            axisLine: {
              show: true,
              lineStyle: {
                width: 20,
                color: [[data.value / max, data.color], [1, "#eee"]]
              }
            },
            axisTick: {
              show: false //小刻度
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false
            },
            pointer: {
              show: false,
              fontSize: 10
            },
            detail: {
              offsetCenter: [0, -5],
              formatter: `{b|${this.num}}`,
              rich: {
                b: {
                  color: this.Color,
                  fontSize: 20,
                  fontWeight: 550,
                  fontFamily: "Bahnschrift",
                  fontWeight: "normal",
                  fontStretch: "normal",
                  letterSpacing: 0,
                  padding: [10, 0, 10, 0]
                }
              }
            }
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
</style>
