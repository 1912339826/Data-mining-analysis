// 营院安防情况评估
<template>
  <div class="comprehensiveSafety">
    <div class="box">
      <div class="riskindex piece">
        <nav>安防安全风险指数</nav>
        <section>
           <Meter :num="20" :idName="'onenum'"/>
        </section>
      </div>
      <div class="numerical piece">
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
      <div class="deviceStatistics piece">
        <nav>安防设备统计</nav>
        <section>
          <div v-for="(item, index) in deviceStatisticsList" :key="index" class="list">
            <div class="left">
              <div>{{item.name}}</div>
              <div>{{item.num}}</div>
            </div>
            <img :src="item.src" alt />
          </div>
        </section>
      </div>
    </div>
    <div class="box">
      <div class="eventDistribution piece">
        <nav>安防报警事件分布</nav>
        <section></section>
      </div>
      <div class="regionalDistribution piece">
        <nav>安防报警区域分布</nav>
        <section style="width: 23.906vw; height: 14.583vw;margin-top:2.552vw">
          <LengthwaysHistogram :idName="'lengthways'"/>
        </section>
      </div>
    </div>
    <div class="box">
      <div class="boxleft piece">
        <nav>安防报警时段分布</nav>
        <section style="width: 22.917vw;height: 12.188vw;">
          <LineChart :idName="'ssdsa'" />
        </section>
      </div>
      <div class="boxmiddle piece">
        <nav>安防报警类型分布</nav>
        <section style="height: 12.188vw;">
          <EchartsPic :datas="echartsPic" :legend="false"/>
        </section>
      </div>
      <div class="boxright piece">
        <nav>安防报警单位分布</nav>
        <section style="height: 11.51vw">
          <Histogram :Color="'#ffbf5a'" />
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import EchartsPic from "../../../components/echarts/Pie";
import Histogram from "../../../components/echarts/Histogram";
import LengthwaysHistogram from "../../../components/echarts/LengthwaysHistogram";
import Meter from '../../../components/echarts/Meter'
import LineChart from '../../../components/echarts/LineChart'
export default {
  components: {
    EchartsPic,
    Histogram,
    LengthwaysHistogram,
    Meter,
    LineChart
  },
  data() {
    return {
      deviceStatisticsList: [
        { name: "摄像头", num: "2000", img: "摄像头_03", src: "" },
        { name: "门禁机", num: "2000", img: "门禁机_03", src: "" },
        { name: "车辆卡口", num: "2000", img: "车辆卡口_03", src: "" },
        { name: "紧急报警点位", num: "2000", img: "紧急报警点位_03", src: "" },
        { name: "周界", num: "2000", img: "周界_03", src: "" },
        { name: "智能分析设备", num: "2000", img: "智能分析设备_03", src: "" }
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
    // 赛图片
    this.deviceStatisticsList.map(item => {
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