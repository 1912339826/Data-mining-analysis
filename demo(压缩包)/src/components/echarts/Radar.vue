// 仪表
<template>
  <div class="radar">
    <div :id="idName" :style="{width: '17.083vw',height: '15.958vw'}"></div>
  </div>
</template>

<script>
export default {
  name: "Radar",
  data() {
    return {
      Color: "#24b375"
    };
  },
  props: {
    idName: {
      type: String,
      default: "radar"
    }
  },
  mounted() {
    this.visitor();
  },
  methods: {
    visitor() {
      let myChart = this.$echarts.init(document.getElementById(this.idName));
      myChart.setOption({
        radar: [
          {
            name: {
              textStyle: {
                color: "#fff"
              }
            },
            indicator: [
              { text: "人员", max: 100 },
              { text: "保障", max: 100 },
              { text: "管理", max: 100 },
              { text: "项目", max: 100 },
              { text: "安防", max: 100 }
            ],
            polar:{

            },
            tooltip: {
              //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
              confine: true,
              enterable: true //鼠标是否可以移动到tooltip区域内
            },
            name: {
              formatter: "{value}",
              textStyle: {
                color: "#333333" // 文字颜色
              }
            },
            axisLine: {
              //指向外圈文本的分隔线样式
              lineStyle: {
                color: ["#e9f6f4"]
              }
            },
            splitLine: {
              // 格子
              lineStyle: {
                color: ["#a1dad2"],
                width: 2
              }
            },
            splitArea: {
              areaStyle: {
                color: ["transparent"]
              }
            },
            center: ["50%", "50%"],
            radius: 60
          }
        ],
        series: [
          {
            name: "成绩单",
            type: "radar",
            radarIndex: 0,
            data: [
              {
                value: [80, 20, 40, 90, 100],
                name: "李四",
                symbol: "circle",
                itemStyle: {
                  normal: {
                    color: "rgba(12, 173, 255, 1)"
                  }
                },
                label: {
                  normal: {
                    show: true
                  }
                },
                areaStyle: {
                  normal: {
                    color: "#bde8d5"
                  }
                },
                lineStyle: {
                  normal: {
                    width: 0,
                    type: "dashed"
                  }
                }
              }
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
