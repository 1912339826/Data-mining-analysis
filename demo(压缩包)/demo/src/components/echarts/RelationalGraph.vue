// RelationalGraph 关系图
<template>
  <div class="RelationalGraph">
    <div :id="idName" :style="{width: '100%',height: '250%'}"></div>
  </div>
</template>

<script>
export default {
  name: "RelationalGraph",
  data() {
    return {};
  },
  props: {
    num: {
      type: Number,
      default: 20
    },
    idName: {
      type: String,
      default: "RelationalGraph"
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
        title: {
          text: ""
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 12
            }
          }
        },
        legend: {
          x: "center",
          show: true,
          data: ["绿色型号工程", "棕色型号工程", "蓝色型号工程","红色型号工程"]
        },
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [
              {
                name: "绿色型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985"
                  }
                }
              },
              {
                name: "棕色型号工程",
                itemStyle: {
                  normal: {
                    color: "#995e00"
                  }
                }
              },
              {
                name: "蓝色型号工程",
                itemStyle: {
                  normal: {
                    color: "#007099"
                  }
                }
              },
              {
                name: "红色型号工程",
                itemStyle: {
                  normal: {
                    color: "#993a00"
                  }
                }
              }
            ],
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 12
                }
              }
            },
            force: {
              repulsion: 1000
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 10
                },
                formatter: "{c}"
              }
            },
            data: [
              {
                name: "绿色型号工程",
                itemStyle: {
                  normal: {
                    color: "#009985"
                  }
                }
              },
              {
                name: "绿色型号工程1",
                itemStyle: {
                  normal: {
                    color: "#009985"
                  }
                }
              },
              {
                name: "棕色型号工程1",
                itemStyle: {
                  normal: {
                    color: "#995e00"
                  }
                }
              },
              {
                name: "蓝色型号工程1",
                itemStyle: {
                  normal: {
                    color: "#007099"
                  }
                }
              },
              {
                name: "红色型号工程1",
                itemStyle: {
                  normal: {
                    color: "#993a00"
                  }
                }
              },
              {
                name: "红色型号工程2",
                itemStyle: {
                  normal: {
                    color: "#993a00"
                  }
                }
              },
              {
                name: "棕色型号工程2",
                itemStyle: {
                  normal: {
                    color: "#995e00"
                  }
                }
              },
              {
                name: "绿色型号工程3",
                itemStyle: {
                  normal: {
                    color: "#009985"
                  }
                }
              },
              {
                name: "棕色型号工程3",
                itemStyle: {
                  normal: {
                    color: "#995e00"
                  }
                }
              },
              {
                name: "蓝色型号工程2",
                itemStyle: {
                  normal: {
                    color: "#007099"
                  }
                }
              }
            ],
            links: [
              {
                source: "绿色型号工程",
                target: "绿色型号工程1",
                value: ""
              },
              {
                source: "绿色型号工程",
                target: "蓝色型号工程1",
                value: ""
              },
              {
                source: "绿色型号工程",
                target: "棕色型号工程1",
                value: ""
              },
              {
                source: "绿色型号工程",
                target: "红色型号工程1",
                value: ""
              },
              {
                source: "棕色型号工程1",
                target: "红色型号工程2",
                value: ""
              },
              {
                source: "棕色型号工程1",
                target: "绿色型号工程3",
                value: ""
              },
              {
                source: "红色型号工程1",
                target: "棕色型号工程2",
                value: ""
              },
              {
                source: "红色型号工程1",
                target: "棕色型号工程3",
                value: ""
              },
              {
                source: "红色型号工程1",
                target: "蓝色型号工程2",
                value: ""
              }
            ],
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 1,
                curveness: 0
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
