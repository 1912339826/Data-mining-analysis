// 外协人员综合评估
<template>
  <div class="comprehensiveForeignStaff">
    <div class="box">
      <div class="FSSynthesize piece">
        <nav>外协人员综合情况</nav>
        <section>
          <div v-for="(item, index) in FSSynthesizeList" :key="index" class="list">
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
      <div class="TheTopTenVisitor piece">
        <nav>外协单位来访前十</nav>
        <section>
          <LengthwaysHistogram
            :idName="'TheTopTenVisitorIsId'"
            :Color="'#2884d2'"
            :series="TheTopTenVisitordata"
          />
        </section>
      </div>
      <div class="causeKeyword piece">
        <nav>来访事由关键字</nav>
        <section style="width: 20.26vw;height: 10.417vw;">
          <wordCloud :idName="'causeKeyword'" :height="'15.417vw'" :datas="antistops" />
        </section>
      </div>
      <div class="TheTopTenCause piece">
        <nav>来访事由前十</nav>
        <section style="width: 20.938vw;height: 13.698vw;">
          <LengthwaysHistogram
            :idName="'TheTopTenCauseIsId'"
            :Color="'#24b39f'"
            :series="TheTopTenCausedata"
          />
        </section>
      </div>
    </div>
    <div class="box">
      <div class="everydayCTVNumAnalyze piece">
        <nav>每日来访次数分析</nav>
        <section>
          <LineChart :idName="'lineChart'" :color="'#7ac7d7'"/>
        </section>
      </div>
      <div class="frameCTVAnalyze piece">
        <nav>来访时段分析</nav>
        <section>
          <LineChart :idName="'frameCTVAnalyze'" :color="'#7ac7d7'" />
        </section>
      </div>
    </div>
    <div class="box">
      <div class="interviewee piece">
        <nav>被访单位情况分析</nav>
        <section>
          <img src="../../../assets/images/被访单位情况分析大地图_03.png" alt="" style="width: 49.844vw;height: 15.521vw;">
        </section>
      </div>
      <div class="ranking piece">
        <nav>各单位被访次数排名</nav>
        <section>
          <LengthwaysHistogram :idName="'ranking'" :Color="'#45bbe6'" :series="rankingdata" />
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import LengthwaysHistogram from "../../../components/echarts/LengthwaysHistogram";
import wordCloud from "../../../components/echarts/WordCloud";
import LineChart from "../../../components/echarts/LineChart";
export default {
  components: {
    LengthwaysHistogram,
    wordCloud,
    LineChart
  },
  data() {
    return {
      FSSynthesizeList: [
        { name: "来访外协人员", num: "4500", img: "来访外协人员_03", src: "" },
        { name: "外协单位", num: "4500", img: "外协单位_03", src: "" },
        { name: "外协单位车辆", num: "4500", img: "外协单位车辆_03", src: "" },
        { name: "来访次数", num: "4500", img: "来访次数_03", src: "" },
        { name: "拜访人次", num: "4500", img: "拜访人数_03", src: "" },
        { name: "访客档案", num: "4500", img: "访客档案_03", src: "" },
        { name: "访客记录", num: "4500", img: "访客记录_03", src: "" }
      ],
      TheTopTenVisitordata: [
        {
          barHeight: 24,
          name: "left",
          data: [2, 4, 6, 5, 5, 7],
          barCategoryGap: "50%",
          type: "bar",
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{c}",
              textStyle: {
                color: "#2884d2"
              }
            }
          }
        }
      ],
      TheTopTenCausedata: [
        {
          barHeight: 24,
          name: "left",
          data: [2, 4, 6, 5, 5, 7],
          barCategoryGap: "50%",
          type: "bar",
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{c}",
              textStyle: {
                color: "#24b39f"
              }
            }
          }
        }
      ],
      rankingdata: [
        {
          barHeight: 24,
          name: "left",
          data: [2, 4, 6, 5, 5, 7],
          barCategoryGap: "50%",
          type: "bar",
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{c}",
              textStyle: {
                color: "#45bbe6"
              }
            }
          }
        }
      ],
      antistops: [
        { name: "白宫", value: 1 },
        { name: "朝韩会谈", value: 11 },
        { name: "美台关系", value: 11 },
        { name: "太平洋", value: 111 },
        { name: "外交部", value: 1 },
        { name: "澳门", value: 111 },
        { name: "美国", value: 12 },
        { name: "日韩关系", value: 31 },
        { name: "经贸关系", value: 14 },
        { name: "法案", value: 1321 },
        { name: "关系", value: 441 },
        { name: "演习", value: 1321 },
        { name: "国务院", value: 1421 },
        { name: "共和党", value: 3211 },
        { name: "AI", value: 14321 },
        { name: "台湾", value: 541 },
        { name: "国防部", value: 54311 },
        { name: "国防部", value: 611 },
        { name: "民主党", value: 5411 },
        { name: "工党", value: 5431 },
        { name: "英国", value: 64311 },
        { name: "特朗普", value: 1541 },
        { name: "马来西亚", value: 15431 },
        { name: "俄罗斯", value: 1513 }
      ]
    };
  },
  mounted() {
    // 赛图片
    this.FSSynthesizeList.map(item => {
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