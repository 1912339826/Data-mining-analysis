// 环状的饼图
<template>
  <div class="RinglikePie">
    <div :id="idName" :style="{width: '100%',height: '200%'}"></div>
  </div>
</template>

<script>
export default {
  name: "RinglikePie",
  data() {
    return {};
  },
  props: {
    datas: {
      type: Array,
      default: () => {
        return [
          { value: 20, name: "动力" },
          { value: 40, name: "照明" },
          { value: 30, name: "空调" },
        ];
      }
    },
    idName: {
      type: String,
      default: "RinglikePie"
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
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["50%", "60%"],
            center:["50%","50%"],
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
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
</style>
