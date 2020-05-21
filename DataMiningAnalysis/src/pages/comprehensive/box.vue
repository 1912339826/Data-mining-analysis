<template>
  <div id="comprehensiveBox">
    <div class="comprehensiveBoxLeft">
      <div class="back" @click="goIndex">
        <img src="../../assets/images/返回_03.png" alt />
        <span>返回</span>
      </div>
      <div class="datalist">
        <div
          v-for="(item, index) in leftlist"
          :class="item.url==clickturl?'active':''"
          :key="index"
          @click="leftlistclick(item.url)"
        >
          <img src="../../assets/images/项目检索页树ICON_03.png" alt />
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="comprehensiveBoxRight">
      <div id="istitle">{{title}}</div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leftlist: [
        {
          name: "综合风险评估",
          url: "comprehensiveRisk"
        },
        {
          name: "营院安防能力评估",
          url: "comprehensiveSafety"
        },
        {
          name: "外协人员综合评估",
          url: "comprehensiveForeignStaff"
        },
        {
          name: "内部人员日常行为评估",
          url: "comprehensiveInsiderDailyActs"
        },
        {
          name: "营院日常管理及保障评估",
          url: "comprehensivePoliceYardManage"
        },
        {
          name: "大项工作情况综合评估",
          url: "comprehensiveassessment"
        }
      ],
      title: "",
      clickturl: "comprehensiveRisk",
      time: ""
    };
  },
  mounted() {
    this.clickturl = this.$route.params.url;
    this.time = this.$route.params.time;
    this.leftlistclick(this.clickturl);
    this.istitle()
  },
  activated() {
    this.clickturl = this.$route.params.url;
    this.time = this.$route.params.time;
    this.leftlistclick(this.clickturl);
    this.istitle()
  },
  methods: {
    leftlistclick(url) {
      this.clickturl = url;
      this.istitle()
      this.$router.push({
        name: url
      });
    },
    // 回到
    goIndex() {
      this.$router.push({
        name: "comprehensiveIndex"
      });
    },
    // 标题
    istitle() {
      let name = "";
      this.leftlist.map(item => {
        if (item.url == this.clickturl) {
          name = item.name;
        }
      });
      this.title = `[${this.time}]${name}`;
    }
  }
};
</script>
<style lang="less">
#comprehensiveBox {
  background-color: #f5faf9;
  display: flex;
  .comprehensiveBoxLeft {
    width: 15.75vw;
    height: 53.125vw;
    background-color: #ffffff;
    border-right: 0.052vw solid #dddddd;
    .back {
      display: inline-block;
      margin-top: 0.833vw;
      margin-left: 1.51vw;
      &:hover {
        cursor: pointer;
      }
      img {
        width: 0.625vw;
        height: 0.625vw;
      }
      span {
        margin-left: 0.365vw;
        font-family: "NotoSansHans-Regular";
        font-size: 0.729vw;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0.031vw;
        color: #009985;
      }
    }
    .datalist {
      padding-top: 0.99vw;
      div {
        padding-left: 1.667vw;
        display: flex;
        align-items: center;
        height: 1.458vw;
        margin-top: 0.052vw;
        &:hover {
          cursor: pointer;
          text-decoration: underline #009985;
        }
        img {
          margin-right: 0.365vw;
          width: 0.417vw;
          height: 0.417vw;
        }
        span {
          font-family: "NotoSansHans-Regular";
          font-size: 0.729vw;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0vw;
          color: #1a1a1a;
        }
      }
      .active {
        background-color: #e6f5f3;
        span {
          color: #009985;
        }
      }
    }
  }
  .comprehensiveBoxRight {
    #istitle {
      width: 84.323vw;
      height: 3.125vw;
      background-color: #ffffff;
      box-shadow: 0vw 0.104vw 0.313vw 0vw rgba(0, 0, 0, 0.1);
      text-align: center;
      line-height: 3.125vw;
      font-family: "NotoSansHans-Medium";
      font-size: 1.042vw;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0vw;
      color: #1a1a1a;
    }
  }
}
</style>
