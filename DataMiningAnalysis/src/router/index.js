import Vue from "vue";
import Router from "vue-router";

// 人员检索
import personnelretrieveIndex from "../pages/personnelretrieve/index";
// 项目检索
import projectretrievalIndex from "../pages/projectretrieval/index";
// 数据检索
import dataretrievalIndex from "../pages/dataretrieval/index";
// 文档检索
import docretrievalIndex from "../pages/docretrieval/index";
// 综合评估
import comprehensiveIndex from "../pages/comprehensive/index";
// 综合评估盒子
import comprehensiveBox from "../pages/comprehensive/box";
// 综合风险评估
import comprehensiveRisk from "../pages/comprehensive/risk/index";
// 营院安防情况评估
import comprehensiveSafety from "../pages/comprehensive/safety/index";
// 大型工作情况综合评估
import comprehensiveassessment from "../pages/comprehensive/assessment/index";
// 外协人员综合评估
import comprehensiveForeignStaff from "../pages/comprehensive/ForeignStaff/index";
// 内部人员日常行为评估
import comprehensiveInsiderDailyActs from "../pages/comprehensive/insiderDailyActs/index";
// 营院日常管理及保障评估
import comprehensivePoliceYardManage from "../pages/comprehensive/PoliceYardManage/index";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/comprehensiveBox"
    },
    {
      path: "/personnelretrieveIndex",
      name: "personnelretrieveIndex",
      component: personnelretrieveIndex
    },
    {
      path: "/projectretrievalIndex",
      name: "projectretrievalIndex",
      component: projectretrievalIndex
    },
    {
      path: "/dataretrievalIndex",
      name: "dataretrievalIndex",
      component: dataretrievalIndex
    },
    {
      path: "/docretrievalIndex",
      name: "docretrievalIndex",
      component: docretrievalIndex
    },
    {
      path: "/comprehensiveIndex",
      name: "comprehensiveIndex",
      component: comprehensiveIndex
    },
    {
      path: "/comprehensiveBox",
      name: "comprehensiveBox",
      component: comprehensiveBox,
      children: [
        {
          path: "comprehensiveRisk",
          name: "comprehensiveRisk",
          component: comprehensiveRisk
        },
        {
          path: "comprehensiveSafety",
          name: "comprehensiveSafety",
          component: comprehensiveSafety
        },
        {
          path: "comprehensiveassessment",
          name: "comprehensiveassessment",
          component: comprehensiveassessment
        },
        {
          path: "comprehensiveForeignStaff",
          name: "comprehensiveForeignStaff",
          component: comprehensiveForeignStaff
        },
        {
          path: "comprehensiveInsiderDailyActs",
          name: "comprehensiveInsiderDailyActs",
          component: comprehensiveInsiderDailyActs
        },
        {
          path: "comprehensivePoliceYardManage",
          name: "comprehensivePoliceYardManage",
          component: comprehensivePoliceYardManage
        }
      ]
    }
  ]
});
