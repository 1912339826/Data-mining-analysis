<template>
  <div class="box">
    <div id="top">
      <div class="topleft">
        <div class="logo">
          <img src="../assets/images/logo_03.png" alt />
          <div>数据检索导航</div>
        </div>
        <div class="tab">
          <div
            data-isid="111"
            :class="nameroutenew==item.url?'active':''"
            @click="topage(item.url)"
            v-for="(item, index) in toptabarr"
            :key="index"
          >{{item.name}}</div>
        </div>
      </div>
      <div class="topright">
        <img src="../assets/images/提醒_03.png" class="warn" alt />
        <span></span>
        <img src="../assets/images/人像_03.png" class="portrait" alt />
      </div>
    </div>
    <div style="width: 100%;overflow: hidden;">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toptabarr: [
        { name: "人员检索", url: "personnelretrieveIndex" },
        { name: "项目检索", url: "projectretrievalIndex" },
        { name: "数据检索", url: "dataretrievalIndex" },
        { name: "文档检索", url: "docretrievalIndex" },
        { name: "综合评估", url: "comprehensiveIndex" }
      ],
      nameroutenew: ""
    };
  },
  watch: {
    $route(news, lods) {
      // 监听
      console.log(news);
      let isstring = "";
      isstring = news.path;

      if (isstring.split("/")[1] == "comprehensiveBox") {
        this.nameroutenew = "comprehensiveIndex";
      } else {
        this.nameroutenew = isstring.split("/")[1];
      }
    }
  },
  mounted() {
    let isstring = "";
    isstring = this.$route.path;
    if (isstring.split("/")[1] == "comprehensiveBox") {
      this.nameroutenew = "comprehensiveIndex";
    } else {
      this.nameroutenew = isstring.split("/")[1];
    }
  },
  methods: {
    topage(url) {
      this.$router.push({
        name: url
      });
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  #top {
    padding-left: 0.833vw;
    padding-right: 1.042vw;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 3.125vw;
    background-image: linear-gradient(90deg, #009985 1%, #00997d 100%);
    .topleft {
      display: flex;
      align-items: center;
      .logo {
        display: flex;
        align-items: center;
        margin-right: 4.01vw;
        img {
          width: 1.354vw;
          height: 1.354vw;
          margin-right: 0.781vw;
        }
        div {
          height: 1.406vw;
          line-height: 1.406vw;
          font-family: "NotoSansHans-Medium";
          font-size: 1.458vw;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0vw;
          color: #ffffff;
        }
      }
      .tab {
        display: flex;
        align-items: center;
        .active {
          background-color: #00806f;
        }
        div {
          width: 6.25vw;
          height: 3.125vw;
          line-height: 3.125vw;
          text-align: center;
          font-family: "NotoSansHans-Medium";
          font-size: 0.938vw;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0vw;
          color: #ffffff;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .topright {
      display: flex;
      align-items: center;
      .warn {
        width: 1.146vw;
        height: 1.354vw;
      }
      .portrait {
        width: 1.354vw;
        height: 1.25vw;
      }
      span {
        display: block;
        width: 0.052vw;
        height: 1.563vw;
        margin-left: 0.729vw;
        margin-right: 0.781vw;
        background-image: linear-gradient(#11438f, #11438f),
          linear-gradient(#e7ebf6, #e7ebf6);
        background-blend-mode: normal, normal;
        box-shadow: 0.052vw 0vw 0vw 0vw rgba(255, 255, 255, 0.1);
      }
    }
  }
}
</style>