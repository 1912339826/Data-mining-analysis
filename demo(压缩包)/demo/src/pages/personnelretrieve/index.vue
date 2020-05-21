// 人员检索
<template>
  <div class="personnelretrieveIndex">
    <section class="searching">
      <div class="search">
        <el-input placeholder="搜索人员姓名" v-model="input3">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <el-table :data="tableData" height="49.948vw" stripe style="width: 100%">
        <el-table-column prop="date" label="单位"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="address" label="职务"></el-table-column>
      </el-table>
    </section>
    <section class="content">
      <div class="situation">
        <nav>信息概况</nav>
        <section>
          <div v-for="(item, index) in situationlist" :key="index" class="situationlist">
            <img :src="item.src" alt />
            <div class="right">
              <div class="top">
                <span>{{item.num}}</span>
                <span>次</span>
              </div>
              <div class="name">{{item.name}}</div>
            </div>
          </div>
        </section>
      </div>
      <div class="atlas">
        <nav>人员关系图谱</nav>
        <section style="width: 52.708vw;height: 24.479vw;">
          <RelationalGraph/>
        </section>
      </div>
      <div class="participation">
        <div class="item">
          <nav>参与重大项目</nav>
          <section>
            <el-table :data="participationItemData" height="6vw" stripe style="width: 100%">
              <el-table-column prop="name" label="项目名称"></el-table-column>
              <el-table-column prop="money" label="经费(元)"></el-table-column>
            </el-table>
          </section>
        </div>
        <div class="manoeuvre">
          <nav>参与军演保障</nav>
          <section>
            <el-table :data="participationManoeuvreData" height="6vw" stripe style="width: 100%">
              <el-table-column prop="name" label="项目名称"></el-table-column>
            </el-table>
          </section>
        </div>
      </div>
      <div class="condition">
        <div class="visitor">
          <nav>访客来访情况</nav>
          <section>
            <!-- <div id="visitor" :style="{width: '32.083vw',height: '13.854vw'}"></div> -->
            <EchartsPic :datas="echartsPic" :legend="true"/>
          </section>
        </div>
        <div class="illegal">
          <nav>违规情况</nav>
          <section>
            <el-table :data="visitorIllegalData" height="19.844vw" stripe style="width: 100%">
              <el-table-column prop="name" label="违规行为"></el-table-column>
              <el-table-column prop="time" label="发生时间"></el-table-column>
            </el-table>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import EchartsPic from "../../components/echarts/Pie";
import RelationalGraph from "../../components/echarts/RelationalGraph";
export default {
  components: {
    EchartsPic,
    RelationalGraph
  },
  data() {
    return {
      input3: "",
      tableData: [
        {
          date: "1所",
          name: "王小虎",
          address: "室主任"
        },
        {
          date: "1所",
          name: "王小虎",
          address: "室主任"
        },
        {
          date: "1所",
          name: "王小虎",
          address: "室主任"
        },
        {
          date: "1所",
          name: "王小虎",
          address: "室主任"
        }
      ],
      participationItemData: [
        { name: "某型号导弹可行性论证报告", money: "1000万" },
        { name: "某型号导弹可行性论证报告", money: "1000万" }
      ],
      participationManoeuvreData: [
        {
          name: "某型号导弹试验"
        },
        {
          name: "中部战区某联合军演"
        }
      ],
      situationlist: [
        {
          img: "形状-1400_03",
          num: 1,
          name: "重大项目",
          src: ""
        },
        {
          img: "形状-1398_03",
          num: 1,
          name: "军演保障",
          src: ""
        },
        {
          img: "形状-1399_03",
          num: 1,
          name: "访客来访",
          src: ""
        },
        {
          img: "形状-1397_03_03",
          num: 1,
          name: "值班次数",
          src: ""
        },
        {
          img: "形状-1396_03_03",
          num: 1,
          name: "考勤情况",
          src: ""
        },
        {
          img: "形状-1395_03",
          num: 1,
          name: "休假次数",
          src: ""
        },
        {
          img: "形状-1394_03",
          num: 1,
          name: "违规次数",
          src: ""
        }
      ],
      visitorIllegalData: [
        { name: "军容不整齐", time: "12月24日  10:23" },
        { name: "车辆在院内超速行驶", time: "12月04日  14:51" },
        { name: "开会时手机未放入保密柜", time: "09月13日  15:00" }
      ],
      echartsPic: [
        { value: 335, name: "单位1" },
        { value: 310, name: "单位2" },
        { value: 234, name: "单位3" },
        { value: 135, name: "单位4" },
        { value: 1048, name: "单位5" }
      ]
    };
  },
  mounted() {
    // 赛图片
    this.situationlist.map(item => {
      item.src = this.srcimg(item.img);
    });
  },
  methods: {
    srcimg(img) {
      return require(`../../assets/images/${img}.png`);
    }
  }
};
</script>
<style lang="less" scoped>
</style>