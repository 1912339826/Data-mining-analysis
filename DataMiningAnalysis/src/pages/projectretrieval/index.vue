// 项目检索
<template>
  <div class="projectretrievalIndex">
    <div class="searching">
      <div class="search">
        <el-input placeholder="搜索人员姓名" v-model="input3">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="datalist">
        <div
          v-for="(item, index) in 10"
          :class="index==leftlistactive?'active':''"
          :key="index"
          @click="leftlist(index)"
        >
          <img src="../../assets/images/项目检索页树ICON_03.png" alt />
          <span>某型号工程项目</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="box">
        <div class="survey">
          <nav>项目概况</nav>
          <section>
            <table border="1">
              <tr>
                <th>项目名称</th>
                <td colspan="3" class="name">某某某某某型号工程</td>
              </tr>
              <tr>
                <th>任务单位</th>
                <td>HJJ装备发展部</td>
                <th>项目类型</th>
                <td>型号工程</td>
              </tr>
              <tr>
                <th>结束时间</th>
                <td>2021年12月31日</td>
                <th>项目周期</th>
                <td>1年</td>
              </tr>
              <tr>
                <th>责任单位</th>
                <td>1所总体部</td>
                <th>项目经费</th>
                <td>3000万</td>
              </tr>
              <tr>
                <th>项目概况</th>
                <td class="txt" colspan="3">
                  <div>
                    本项目建设地点位于山东省枣庄市薛城区，交通、通讯薛城区，交通便利，生产区外围生态环境良好，与居民集居地间隔一定的距离，周围无有毒有害、周围无有毒有害、烟尘、噪音等污染源，是项目建设的理想地址
                    <span>...</span>
                  </div>
                </td>
              </tr>
            </table>
          </section>
        </div>
        <div class="earlywarning">
          <nav>风险预警</nav>
          <section style="margin-top:1.979vw">
            <div class="minor">
              <fieldset class="schedule">
                <legend>项目进度</legend>
                <section>
                  <div class="left">
                    <span>60</span>
                    <span>%</span>
                    <img src="../../assets/images/上升箭头_03.png" alt />
                  </div>
                  <div class="right">
                    <div>
                      <span>预计延期：</span>
                      <span>30天</span>
                    </div>
                    <div>
                      <span>进度指标：</span>
                      <span>80%</span>
                    </div>
                  </div>
                </section>
              </fieldset>
              <fieldset class="expenditure">
                <legend>项目经费</legend>
                <section>
                  <div class="left">
                    <span>6000</span>
                    <span>万元</span>
                    <img src="../../assets/images/上升箭头_03.png" alt />
                  </div>
                  <div class="right">
                    <div>
                      <span>预计延期：</span>
                      <span>30天</span>
                    </div>
                    <div>
                      <span>进度指标：</span>
                      <span>80%</span>
                    </div>
                  </div>
                </section>
              </fieldset>
            </div>
            <div class="minor">
              <fieldset class="units">
                <legend>外协单位评级</legend>
                <section>
                  <div class="left">
                    <img :src="item.src" alt v-for="(item, index) in unitsData" :key="index" />
                  </div>
                  <div class="right">
                    <span>2</span>
                    <span>级</span>
                  </div>
                </section>
              </fieldset>
              <fieldset class="rate">
                <legend>人员情况评级</legend>
                <section>
                  <div class="left">
                    <img :src="item.src" alt v-for="(item, index) in rateData" :key="index" />
                  </div>
                  <div class="right">
                    <span>80</span>
                    <span>分</span>
                  </div>
                </section>
              </fieldset>
            </div>
          </section>
        </div>
      </div>
      <div class="box">
        <div class="schedule">
          <nav>项目进度</nav>
          <section>

          </section>
        </div>
      </div>
      <div class="box">
        <div class="atlas">
          <nav>项目关系图谱</nav>
          <section></section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input3: "",
      leftlistactive: 0,
      unitsData: [
        { img: "外协单位评级（亮）_03", src: "" },
        { img: "外协单位评级（亮）_03", src: "" },
        { img: "外协单位评级（灰）_03", src: "" },
        { img: "外协单位评级（灰）_03", src: "" },
        { img: "外协单位评级（灰）_03", src: "" }
      ],
      rateData: [
        { img: "人员情况评级（亮）_03", src: "" },
        { img: "人员情况评级（亮）_03", src: "" },
        { img: "人员情况评级（亮）_03", src: "" },
        { img: "人员情况评级（亮）_03", src: "" },
        { img: "人员情况评级（亮）_03", src: "" },
        { img: "人员情况评级（亮）_03", src: "" },
        { img: "人员情况评级（亮）_03", src: "" },
        { img: "人员情况评级（亮）_03", src: "" },
        { img: "人员情况评级（灰）_03", src: "" },
        { img: "人员情况评级（灰）_03", src: "" }
      ]
    };
  },
  mounted() {
    this.unitsData.map(item => {
      item.src = this.srcimg(item.img);
    });
    this.rateData.map(item=>{
      item.src = this.srcimg(item.img);
    })
  },
  methods: {
    srcimg(img) {
      return require(`../../assets/images/${img}.png`);
    },
    leftlist(is) {
      this.leftlistactive = is;
    }
  }
};
</script>
<style lang="less" scoped>
</style>