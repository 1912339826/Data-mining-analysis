// 综合风险评估
<template>
  <div class="comprehensiveRisk">
    <div class="box">
      <div class="index piece">
        <nav>综合评估指数</nav>
        <section>
          <div id="meter" :style="{width: '15.156vw',height: '10.729vw'}"></div>
        </section>
      </div>
      <div class="radar piece boxmiddle">
        <nav>各项风险因素</nav>
        <section>
          <div id="radar" :style="{width: '17.083vw',height: '13.958vw'}"></div>
        </section>
      </div>
      <div class="istable piece boxleft">
        <nav>各项风险因素</nav>
        <section>
          <table border="1">
            <tr>
              <th>风险项</th>
              <th>指数</th>
              <th>环比</th>
            </tr>
            <tr>
              <th>安防</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>项目</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>管理</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>保障</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>人员</th>
              <td></td>
              <td></td>
            </tr>
          </table>
        </section>
      </div>
    </div>
    <div class="box">
      <div class="index piece">
        <nav>安防风险指数</nav>
        <section></section>
      </div>
      <div class="defenseNum piece boxmiddle">
        <nav>各项安防数值</nav>
        <section>
          <div class="list">
            <span class="name">当月访客人数</span>
            <div class="num">
              <span>300</span>
              <span>人</span>
            </div>
            <div class="lrr">
              <span>环比</span>
              <span>10</span>
              <span>%</span>
            </div>

            <img src alt />
          </div>
          <div class="list">
            <span class="name">异常报警事件</span>
            <div class="num">
              <span>30</span>
              <span>件</span>
            </div>
            <div class="lrr">
              <span>环比</span>
              <span class="up">10</span>
              <span>%</span>
            </div>

            <img src alt />
          </div>
          <div class="list">
            <span class="name">安防设备损坏</span>
            <div class="num">
              <span>300</span>
              <span>个</span>
            </div>
            <div class="lrr">
              <span>环比</span>
              <span class="up">5</span>
              <span>%</span>
            </div>

            <img src alt />
          </div>
        </section>
      </div>
      <div class="piece boxleft">
        <nav>报警类型分布</nav>
        <section>
          <EchartsPic :datas="echartsPic" :legend="false" />
        </section>
      </div>
    </div>
    <div class="box">
      <div class="index piece">
        <nav>人员风险指数</nav>
        <section></section>
      </div>
      <div class="piece boxmiddle personneLvalues">
        <nav>各项人员数值</nav>
        <section>
          <div class="list">
            <div class="title">人员在位率</div>
            <div class="value">
              <span>90</span>
              <span>%</span>
            </div>
          </div>
          <div class="list">
            <div class="title">人员在位率</div>
            <div class="value">
              <span>90</span>
              <span>%</span>
            </div>
          </div>
          <div class="list">
            <div class="title">人员在位率</div>
            <div class="value">
              <span>90</span>
              <span>%</span>
            </div>
          </div>
          <div class="list">
            <div class="title">人员在位率</div>
            <div class="value">
              <span>90</span>
              <span>%</span>
            </div>
          </div>
          <div class="list">
            <div class="title">人员在位率</div>
            <div class="value">
              <span>90</span>
              <span>%</span>
            </div>
          </div>
          <div class="list">
            <div class="title">人员在位率</div>
            <div class="value">
              <span>90</span>
              <span>%</span>
            </div>
          </div>
        </section>
      </div>
      <div class="piece boxleft">
        <nav>外出人数分布</nav>
        <section></section>
      </div>
    </div>
    <div class="box">
      <div class="index piece">
        <nav>项目风险指数</nav>
        <section></section>
      </div>
      <div class="boxmiddle piece projectValue">
        <nav>各项项目数值</nav>
        <section>
          <div class="list">
            <div class="title">人员在位率</div>
            <div class="value">
              <span>90</span>
              <span>%</span>
            </div>
          </div>
          <div class="list">
            <div class="title">人员在位率</div>
            <div class="value">
              <span style="color: #ff4343;">90</span>
              <span style="color: #ff4343;">%</span>
            </div>
          </div>
          <div class="list">
            <div class="title">人员在位率</div>
            <div class="value">
              <span style="color: #ff4343;">90</span>
              <span style="color: #ff4343;">%</span>
            </div>
          </div>
          <div class="list">
            <div class="title">人员在位率</div>
            <div class="value">
              <span style="color: #ff4343;">90</span>
              <span style="color: #ff4343;">%</span>
            </div>
          </div>
          <div class="list">
            <div class="title">人员在位率</div>
            <div class="value">
              <span>90</span>
              <span>%</span>
            </div>
          </div>
          <div class="list">
            <div class="title">人员在位率</div>
            <div class="value">
              <span>90</span>
              <span>%</span>
            </div>
          </div>
        </section>
      </div>
      <div class="boxleft piece">
        <nav>各项项目因素</nav>
        <section></section>
      </div>
    </div>
    <div class="box">
      <div class="index piece">
        <nav>管理风险指数</nav>
        <section></section>
      </div>
      <div class="index piece theNumerical">
        <nav>各项管理数值</nav>
        <section>
          <div
            v-for="(item, index) in theNumerical"
            :key="index"
            :class="index>4?'pink list':'blueness list'"
          >
            <div class="left">
              <div>{{item.name}}</div>
              <div>{{item.num}}</div>
            </div>
            <img :src="item.src" alt />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import EchartsPic from "../../../components/echarts/Pie";
export default {
  components: {
    EchartsPic
  },
  data() {
    return {
      theNumerical: [
        { name: "信函通知", img: "形状-54611_03_03", src: "", num: "45" },
        { name: "安排事项", img: "形状-549_03_03", src: "", num: "15" },
        { name: "涉密载体领用", img: "形状-561_03_03", src: "", num: "50" },
        { name: "动用枪支", img: "形状-5532_03", src: "", num: "50" },
        { name: "值班人次", img: "形状-557_03_03", src: "", num: "50" },
        { name: "未领信函通知", img: "形状-54611_03", src: "", num: "9" },
        { name: "延期事项", img: "形状-549_03", src: "", num: "3" },
        { name: "未还涉密载体", img: "形状-561_03", src: "", num: "5" },
        { name: "不在位枪支", img: "形状-553_03", src: "", num: "5" },
        { name: "不在位情况", img: "形状-557_03", src: "", num: "5" }
      ],
      echartsPic: [
        { value: 335, name: "周界报警" },
        { value: 310, name: "紧急报警" },
        { value: 234, name: "门禁异常报警" },
        { value: 135, name: "车辆超违" },
        { value: 1048, name: "动环监控报警" },
        { value: 135, name: "用水用电报警" },
        { value: 135, name: "安防设备报警" },
        { value: 135, name: "枪弹相关报警" }
      ]
    };
  },
  mounted() {
    this.radar();
    this.meter();
    // 赛图片
    this.theNumerical.map(item => {
      item.src = this.srcimg(item.img);
    });
  },
  methods: {
    srcimg(img) {
      return require(`../../../assets/images/${img}.png`);
    },
    radar() {
      let myChart = this.$echarts.init(document.getElementById("radar"));
      myChart.setOption({
        radar: [
          {
            indicator: [
              { text: "项目", max: 100 },
              { text: "管理", max: 100 },
              { text: "保障", max: 100 },
              { text: "人员", max: 100 },
              { text: "安防", max: 100 }
            ],
            center: ["50%", "50%"],
            radius: 100
          }
        ],
        series: [
          {
            name: "成绩单",
            type: "radar",
            radarIndex: 0,
            data: [
              {
                value: [90, 40, 20, 80, 100],
                name: "李四",
                label: {
                  show: true,
                  formatter: function(params) {
                    return params.value;
                  }
                },
                areaStyle: {
                  opacity: 0.9,
                  color: new this.$echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                    {
                      color: "#B8D3E4",
                      offset: 0
                    },
                    {
                      color: "#72ACD1",
                      offset: 1
                    }
                  ])
                }
              }
            ]
          }
        ]
      });
    },
    meter() {
      // var data = { value: 50, label: "良", color: "#24b375" };
      var max = 100;
      let myChart = this.$echarts.init(
        document.getElementById("meter"),
        "macarons"
      );
      myChart.setOption({
        color:["#24b375","#eee"],
        series: [
          {
            name: "彩虹仪表盘",
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            radius: "100%",
            center: ["50%", "70%"],
            axisLine: {
              show: true,
              lineStyle: {
                width: 20
                // color: [[data.value / max, data.color], [1, "#eee"]]
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
              show: false
            },
            detail: {
              show: false
            },
            data: [
              {
                value: 50,
                name: "50"
              }
            ]
          }
        ]
      });
    }
  }
};
</script>