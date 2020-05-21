// 内部人员日常行为评估
<template>
  <div class="comprehensiveInsiderDailyActs">
    <div class="box">
      <div class="generalSituation piece">
        <nav>人员日常行为概况</nav>
        <section>
          <div class="list" v-for="(item, index) in generalSituationList" :key="index">
            <img :src="item.src" alt />
            <div class="right">
              <div>{{item.num}}</div>
              <div>{{item.name}}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="box">
      <div class="ActivityDistribution piece">
        <nav>人员活动热力分布</nav>
        <section></section>
      </div>
      <div class="InOutSituation piece">
        <nav>人员进出情况</nav>
        <section></section>
      </div>
    </div>
    <div class="box">
      <div class="piece">
        <nav>人员缺勤情况</nav>
        <section>
          <div class="left"></div>
          <div class="right">
            <table border="1">
              <tr>
                <th>单位</th>
                <th>缺勤</th>
                <th>请假</th>
                <th>休假</th>
                <th>出差</th>
                <th>迟到</th>
                <th>小计</th>
              </tr>
              <tr v-for="(item, index) in 11" :key="index">
                <th>{{item}}所</th>
                <td>88</td>
                <td>88</td>
                <td>88</td>
                <td>88</td>
                <td>88</td>
                <td>88</td>
              </tr>
            </table>
          </div>
        </section>
      </div>
    </div>
    <div class="box">
      <div class="participationItem piece">
        <nav>人员参与项目情况</nav>
        <section>
          <EchartsPic :idNmae="idNmae" :datas="echartsPicLeft" :legend="false" />
        </section>
      </div>
      <div class="participationManoeuvre piece">
        <nav>人员参与军演保障情况</nav>
        <section>
          <EchartsPic :datas="echartsPicRight" :legend="false" />
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
      generalSituationList: [
        { name: "在位人数", num: "1200", img: "形状-1406-副本_03", src: "" },
        { name: "外出人数", num: "1200", img: "外出人数_03", src: "" },
        {
          name: "参与项目人数",
          num: "1200",
          img: "参与项目人数_03 (2)",
          src: ""
        },
        { name: "军演保障人数", num: "1200", img: "军演保障人数_03", src: "" },
        { name: "休假人数", num: "1200", img: "休假人数_03", src: "" },
        { name: "请假人数", num: "1200", img: "请假人数_03", src: "" },
        { name: "领导不在位", num: "1200", img: "领导不在位_03", src: "" }
      ],
      echartsPicLeft: [
        { value: 335, name: "周界报警" },
        { value: 310, name: "紧急报警" },
        { value: 234, name: "门禁异常报警" },
        { value: 135, name: "车辆超违" },
        { value: 1048, name: "动环监控报警" },
        { value: 135, name: "用水用电报警" },
        { value: 135, name: "安防设备报警" },
        { value: 135, name: "枪弹相关报警" }
      ],
      idNmae:"thisleft",
      echartsPicRight:[
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
    this.generalSituationList.map(item => {
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