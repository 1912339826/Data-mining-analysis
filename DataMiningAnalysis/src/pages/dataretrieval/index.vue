// 数据检索
<template>
  <div class="dataretrievalIndex">
    <div class="classify">
      <nav>数据分类目录</nav>
      <section>
        <el-tree
          :data="data"
          :highlight-current="true"
          :props="defaultProps"
          @node-click="handleNodeClick"
        ></el-tree>
      </section>
    </div>
    <div class="content">
      <el-input placeholder="请输入项目名称" v-model="input3">
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </el-input>

      <nav>找到相关结果 约 {{total}} 个， 当前显示: 1-7</nav>
      <section class="box">
        <div class="top">
          <div v-for="(item, index) in pages" :key="index" class="list">
            <div class="left">{{index+1}}</div>
            <div class="right">
              <div class="isimg">
                <img :src="item.src" alt />
              </div>
              <div class="txt">
                <div class="title">2018年度陆军装备编制表</div>
                <div class="tag" style="color: #333333;">
                  <div>
                    <span>匹配度：</span>
                    <span style="color: #ff2e2e;">99.32%</span>
                  </div>
                  <div>
                    <span>所属目录：</span>
                    <span style="color: #0065c3;">装备发展</span>
                  </div>
                  <div>
                    <span>数据类型：</span>
                    <span>采报数据</span>
                  </div>
                  <div>
                    <span>数据条数：</span>
                    <span>345条</span>
                  </div>
                  <div>
                    <span>填报单位：</span>
                    <span>陆军机关</span>
                  </div>
                  <div>
                    <span>填报时间：</span>
                    <span>2019年1月12日</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <el-pagination
          :hide-on-single-page="true"
          background
          prev-text="上一页"
          next-text="下一页"
          :page-size="7"
          layout="prev, pager, next"
          :total="total"
        ></el-pagination>
      </section>
    </div>
  </div>
</template>
<script>
import tree from '../../assets/json/dataretrievalIndexTree.json'
export default {
  data() {
    return {
      total: 220,
      input3: "",
      isfasle: false,
      data: [],
      defaultProps: {
        children: "children",
        label: "label"
      },
      pages: [
        { img: "数据检索页面doc文件ICON_03", src: "" },
        { img: "数据检索页面doc文件ICON_03", src: "" },
        { img: "数据检索页面doc文件ICON_03", src: "" },
        { img: "数据检索页面ecel文件ICON_03", src: "" },
        { img: "数据检索页面ecel文件ICON_03", src: "" },
        { img: "数据检索页面pdf文件ICON_03", src: "" },
        { img: "数据检索页面pdf文件ICON_03", src: "" }
      ]
    };
  },
  mounted() {
    this.data = tree.tree
    this.pages.map(item => {
      item.src = this.srcimg(item.img);
    });
  },
  methods: {
    srcimg(img) {
      return require(`../../assets/images/${img}.png`);
    },
    handleNodeClick(e) {
      console.log(e);
    },
    next(e) {
      console.log(e);
    }
  }
};
</script>