// 综合风险评估
<template>
  <div class="comprehensiveRisk">
    <div class="box">
      <div class="index piece">
        <nav>综合评估指数</nav>
        <section  >
          <Meter :num="onenum" :idName="one" />
        </section>
      </div>
      <div class="radar piece boxmiddle">
        <nav>各项风险因素</nav>
        <section>
          <Radar />
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
            <tr v-for="(item, index) in istable" :key="index">
              <th>{{item.name}}</th>
              <td>{{item.num}}</td>
              <td>
                <img :src="item.src" alt />
              </td>
            </tr>
          </table>
        </section>
      </div>
    </div>
    <div class="box">
      <div class="index piece">
        <nav>安防风险指数</nav>
        <section>
          <Meter :num="twonum" :idName="two" />
        </section>
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
        <section>
          <Meter :num="threenum" :idName="three" />
        </section>
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
        <section>
          <Histogram />
        </section>
      </div>
    </div>
    <div class="box">
      <div class="index piece">
        <nav>项目风险指数</nav>
        <section>
          <Meter :num="fournum" :idName="four" />
        </section>
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
        <section>
          <Radar :idName="'projectValue'" />
        </section>
      </div>
    </div>
    <div class="box">
      <div class="index piece">
        <nav>管理风险指数</nav>
        <section>
          <Meter :num="fivenum" :idName="five" />
        </section>
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
import Meter from "../../../components/echarts/Meter";
import Radar from "../../../components/echarts/Radar";
import Histogram from "../../../components/echarts/Histogram";
export default {
  components: {
    EchartsPic,
    Meter,
    Radar,
    Histogram
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
      ],
      one: "idone",
      onenum: 20,
      two: "idtwo",
      twonum: 80,
      three: "idthree",
      threenum: 80,
      four: "idfour",
      fournum: 70,
      five: "idfive",
      fivenum: 50,
      istable: [
        { name: "安防", num: "80", img: "下降蓝箭头_03", src: "" },
        { name: "项目", num: "70", img: "下降蓝箭头_03", src: "" },
        { name: "管理", num: "40", img: "上升箭头_03", src: "" },
        { name: "保障", num: "20", img: "上升箭头_03", src: "" },
        { name: "人员", num: "60", img: "下降蓝箭头_03", src: "" }
      ]
    };
  },
  mounted() {
    // 赛图片
    this.theNumerical.map(item => {
      item.src = this.srcimg(item.img);
    });
    this.istable.map(item => {
      item.src = this.srcimg(item.img);
    });
  },
  methods: {
    srcimg(img) {
      return require(`../../../assets/images/${img}.png`);
    }
  }
};
</script>