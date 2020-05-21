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
        <section></section>
      </div>
      <div class="causeKeyword piece">
        <nav>来访事由关键字</nav>
        <section></section>
      </div>
      <div class="TheTopTenCause piece">
        <nav>来访事由前十</nav>
        <section></section>
      </div>
    </div>
    <div class="box">
      <div class="everydayCTVNumAnalyze piece">
        <nav>每日来访次数分析</nav>
        <section></section>
      </div>
      <div class="frameCTVAnalyze piece">
        <nav>来访时段分析</nav>
        <section></section>
      </div>
    </div>
    <div class="box">
      <div class="interviewee piece">
        <nav>被访单位情况分析</nav>
        <section></section>
      </div>
      <div class="ranking piece">
        <nav>各单位被访次数排名</nav>
        <section></section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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