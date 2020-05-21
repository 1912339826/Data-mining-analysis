// 综合评估
<template>
  <div class="comprehensiveIndex">
    <div class="comprehensiveIndexLeft">
      <div class="datalist">
        <div
          v-for="(item, index) in leftlist"
          :class="item==istime?'active':''"
          :key="index"
          @click="leftlistclick(item)"
        >
          <img src="../../assets/images/项目检索页树ICON_03.png" alt />
          <span>{{item}}</span>
        </div>
      </div>
    </div>
    <div class="comprehensiveIndexRight">
      <div class="time">{{istime}}</div>
      <div class="content">
        <div
          class="list"
          v-for="(item, index) in contentlist"
          :key="index"
          @click="listclick(item.url)"
        >
          <img :src="item.src" alt />
          <span :style="item.color">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leftlist: [
        "2020年03月",
        "2020年02月",
        "2020年01月",
        "2019年12月",
        "2019年11月",
        "2019年10月",
        "2019年09月",
        "2019年08月",
        "2019年07月",
        "2019年06月",
        "2019年05月",
        "2019年04月",
        "2019年03月"
      ],
      istime: "2019年03月",
      contentlist: [
        {
          name: "综合风险评估",
          img: "综合风险评估_03",
          src: "",
          color: "color: #004b66;",
          url: "comprehensiveRisk"
        },
        {
          name: "营院安防能力评估",
          img: "营院安防能力评估_03",
          src: "",
          color: "color: #470066;",
          url: "comprehensiveSafety"
        },
        {
          name: "外协人员综合评估",
          img: "外协人员综合评估_03",
          src: "",
          color: "color: #66003f;",
          url: "comprehensiveForeignStaff"
        },
        {
          name: "内部人员日常行为评估",
          img: "内部人员日常行为评估_03",
          src: "",
          color: "color: #66003f;",
          url: "comprehensiveInsiderDailyActs"
        },
        {
          name: "营院日常及保障评估",
          img: "营院日常及保障评估_03",
          src: "",
          color: "color: #66003f;",
          url: "comprehensivePoliceYardManage"
        },
        {
          name: "大型工作情况综合评估",
          img: "大型工作情况综合评估_03",
          src: "",
          color: "color: #662700;",
          url: "comprehensiveassessment"
        }
      ]
    };
  },
  mounted() {
    // 赛图片
    this.contentlist.map(item => {
      item.src = this.srcimg(item.img);
    });
    this.istime = this.leftlist[0];
  },
  methods: {
    srcimg(img) {
      return require(`../../assets/images/${img}.png`);
    },
    leftlistclick(time) {
      this.istime = time;
    },
    listclick(url) {
      this.$router.push({
        name: "comprehensiveBox",
        params: {
          time: this.istime,
          url: url
        }
      });
    }
  }
};
</script>