// 文档检索
<template>
  <div class="docretrievalIndex">
    <div class="classify">
      <nav>文档分类目录</nav>
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
      <div class="content-left">
        <el-input placeholder="武器装备" v-model="input3">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <div class="catalogue">
          <div class="box">
            <div v-for="(item, index) in catalogueList" :key="index">
              <span style="color: #0065c3;">{{item.name }}</span>
              <span style="color: #666666;">({{item.num}})</span>
            </div>
            <div style="color: #0065c3;" class="more">>></div>
          </div>
        </div>
        <div class="result-hint">找到相关结果 约 {{total}} 个， 当前显示: 1-7</div>
        <div class="pagesbox">
          <div class="box">
            <el-checkbox-group v-model="checkList">
              <div class="list" v-for="(item, index) in 3" :key="index">
                <el-checkbox text-color="#ffffff" :label="index+1">
                  <span
                    style="font-family: 'NotoSansHans-Bold';
                    font-size: 0.938vw;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0vw;
                    color: #0065c3;"
                  >
                    {{index+1}}. 新型
                    <span style="color: #ff8c26;">武器装备</span>作战流程设计与验证技术研究
                  </span>
                </el-checkbox>
                <div class="txt">
                  <div class="message">
                    <div>
                      <span>[期刊论文]</span>
                      <span style="color: #0065c3;">黄璐艺</span>
                      <span style="color: #0065c3;">杨继峰</span>
                      <span style="color: #0065c3;">李淑媛</span>
                      <span style="color: #0065c3;">金鑫</span>
                      <span>
                        -《
                        <span style="color: #0065c3;">计算机科学与应用</span>》- 2019年06期
                      </span>
                    </div>
                    <div class="left">
                      <div style="margin-right:2.344vw">填报单位：陆军机关</div>
                      <div>填报时间：2019年1月12日</div>
                    </div>
                  </div>
                  <div class="abstract">
                    摘要：作战流程设计是新型
                    <span>武器装备</span>作战运用研究工作的重要内容，立足于实现作战流程设计过程科学、结果可信，提出了包含作战使用任务剖面分析，作战流程建模，作战流程量化分析和作战流程设计是新型武器装备作战运用研究工作的重要内容，立足于实现作战流程设计过程科学、结果可信，提出了包含作战使用任务剖面分析，作战流程建模，作战流程量化分析和。
                  </div>
                  <div class="tag">
                    <div>流程设计</div>
                    <div>量化分析</div>
                    <div>流程建模</div>
                    <div>推演验证</div>
                    <div>Flow Design</div>
                    <div>Flow Modeling</div>
                    <div>Quantitative Analysis</div>
                    <div>Deduction Verification</div>
                  </div>
                  <div class="handle">
                    <div class="left">
                      <div>
                        <img src="../../assets/images/文档检索在线阅读icon_03.png" alt />
                        <span>在线阅读</span>
                      </div>
                      <div>
                        <img src="../../assets/images/文档检索下载icon_03.png" alt />
                        <span>下载</span>
                      </div>
                      <div>
                        <img src="../../assets/images/文档检索导出icon_03.png" alt />
                        <span>导出</span>
                      </div>
                    </div>
                    <div class="right">
                      <div>被引：0</div>
                      <div>下载: 0</div>
                    </div>
                  </div>
                </div>
              </div>
            </el-checkbox-group>
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
        </div>
      </div>
      <div class="content-right">
        <div class="box">
          <nav>热门关键词</nav>
          <section>
            <WordCloud :datas="antistops"/>
          </section>
        </div>
        <div class="box">
          <nav>最新文档</nav>
          <section>
            <div class="newest-list" v-for="(item, index) in newestData" :key="index">
              <span style="color: #0065c3;">{{item.name }}</span>
              <span style="color: #666666;">({{item.num}})</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tree from "../../assets/json/docretrievalIndexTree.json";
import Antistop from "../../components/Antistop";
import WordCloud from '../../components/echarts/WordCloud'
export default {
  components: {
    Antistop,
    WordCloud
  },
  data() {
    return {
      checkList: [1],
      total: 220,
      data: [],
      defaultProps: {
        children: "children",
        label: "label"
      },
      input3: "",
      catalogueList: [
        { name: "军事工业", num: "2281" },
        { name: "兵器工业", num: "1433" },
        { name: "国防工业", num: "903" },
        { name: "中华人民共和国", num: "302" },
        { name: "军工企业", num: "263" },
        { name: "北美洲", num: "232" },
        { name: "美利坚合众国", num: "232" },
        { name: "企业管理", num: "211" },
        { name: "国防科技工业", num: "191" },
        { name: "武器装备", num: "182" },
        { name: "军械装备", num: "175" },
        { name: "军工生产", num: "172" },
        { name: "总公司", num: "169" },
        { name: "俄罗斯", num: "162" },
        { name: "军转民", num: "157" }
      ],
      newestData: [
        { name: "军事教育训练", num: "3201" },
        { name: "军事条令研究", num: "3201" },
        { name: "特种作战模拟仿真研究", num: "3201" },
        { name: "重大项目规范流程", num: "3201" },
        { name: "十九大热点知识", num: "3201" },
        { name: "军事条令研究", num: "3201" }
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
    this.data = tree.tree;
  },
  methods: {
    // 随机数排序
    random() {},
    // 点击树
    handleNodeClick(e) {
      console.log(e);
    }
  }
};
</script>