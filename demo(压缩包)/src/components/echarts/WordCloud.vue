// ECharts的词云图wordCloud,https://www.jianshu.com/p/94279368b6f9
<template>
  <div class="wordCloud">
    <div :id="idName" :style="{width: '100%', height: height}"></div>
  </div>
</template>

<script>
require("echarts-wordcloud");
export default {
  name: "WordCloud",
  data() {
    return {};
  },
  props: {
    height: {
      type: String,
      default: "14.417vw"
    },
    idName: {
      type: String,
      default: "myChart"
    },
    datas: {
      type: Array,
      default: () => {
        [];
      }
    }
  },
  mounted() {
    this.domes();
  },
  methods: {
    domes() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(this.idName));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          show: true
        },
        series: [
          {
            type: "wordCloud",
            gridSize: 1,
            shape: "hexagon",
            sizeRange: [12, 20],
            width: 200,
            height: 200,
            textStyle: {
              normal: {
                color: function() {
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(",") +
                    ")"
                  );
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            data: this.datas
            // [
            //   { name: "白宫", value: 1 },
            //   { name: "朝韩会谈", value: 11 },
            //   { name: "美台关系", value: 11 },
            //   { name: "太平洋", value: 111 },
            //   { name: "外交部", value: 1 },
            //   { name: "澳门", value: 111 },
            //   { name: "美国", value: 12 },
            //   { name: "日韩关系", value: 31 },
            //   { name: "经贸关系", value: 14 },
            //   { name: "法案", value: 1321 },
            //   { name: "关系", value: 441 },
            //   { name: "演习", value: 1321 },
            //   { name: "国务院", value: 1421 },
            //   { name: "共和党", value: 3211 },
            //   { name: "AI", value: 14321 },
            //   { name: "台湾", value: 541 },
            //   { name: "国防部", value: 54311 },
            //   { name: "国防部", value: 611 },
            //   { name: "民主党", value: 5411 },
            //   { name: "工党", value: 5431 },
            //   { name: "英国", value: 64311 },
            //   { name: "特朗普", value: 1541 },
            //   { name: "马来西亚", value: 15431 },
            //   { name: "俄罗斯", value: 1513 }
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
