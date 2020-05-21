// 营院日常管理及保障评估
<template>
  <div class="comprehensivePoliceYardManage">
    <div id="top">
      <div class="box">
        <div class="left">
          <img src="../../../assets/images/今日用电量_03.png" alt />
          <div class="txt">
            <div>今日用电量</div>
            <div>
              <span>22</span>
              <span>kW·h</span>
            </div>
          </div>
        </div>
        <div class="Tools"></div>
        <div class="right">
          <div class="txt">
            <div class="txttop">
              <div class="this">本月</div>
              <div>
                <span>532</span>
                <span>kW·h</span>
              </div>
            </div>
            <div class="txtbottom">
              <div class="this">本年</div>
              <div>
                <span>7620</span>
                <span>kW·h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="left">
          <img src="../../../assets/images/今日用水量_03.png" alt />
          <div class="txt">
            <div>今日用水量</div>
            <div>
              <span>2</span>
              <span>吨</span>
            </div>
          </div>
        </div>
        <div class="Tools"></div>
        <div class="right">
          <div class="txt">
            <div class="txttop">
              <div class="this">本月</div>
              <div>
                <span>532</span>
                <span>吨</span>
              </div>
            </div>
            <div class="txtbottom">
              <div class="this">本年</div>
              <div>
                <span>7610</span>
                <span>吨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <img src="../../../assets/images/理发人数_03.png" alt />
        <div class="left">
          <div>理发人数</div>
          <div>
            <span>123</span>
            <span>人次</span>
          </div>
        </div>
      </div>
      <div class="box">
        <img src="../../../assets/images/洗车数量_03.png" alt />
        <div class="left">
          <div>洗车数量</div>
          <div>
            <span>123</span>
            <span>辆次</span>
          </div>
        </div>
      </div>
      <div class="box">
        <img src="../../../assets/images/停车场_03.png" alt />
        <div class="left">
          <div>停车场</div>
          <div>
            <span>123</span>
            <span>辆</span>
          </div>
        </div>
      </div>
    </div>
    <div id="two">
      <div class="box">
        <div class="piece">
          <div class="isnav">
            <nav>用电能耗趋势</nav>
            <div class="right">
              <div class="state">时间范围：</div>
              <el-date-picker
                v-model="valueTwo"
                type="datetimerange"
                align="right"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['12:00:00', '08:00:00']"
              ></el-date-picker>
              <div class="botton">
                <div class="el-icon-search"></div>
                <div>检索</div>
              </div>
            </div>
          </div>
          <section>
            <div style="width:31.25vw;height:17.708vw;">
              <Histogram :height="'300%'" />
            </div>
          </section>
        </div>
      </div>
      <div class="box">
        <div class="piece">
          <nav>分项能耗占比</nav>
          <section style="width: 30.677vw;height: 30.625vw;margin-top: 1.883vw;">
            <RinglikePie/>
          </section>
        </div>
      </div>
    </div>
    <div id="three">
      <div class="box">
        <div class="piece">
          <div class="isnav">
            <nav>用水能耗趋势</nav>
            <div class="right">
              <div class="state">时间范围：</div>
              <el-date-picker
                v-model="valueThree"
                type="datetimerange"
                align="right"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['12:00:00', '08:00:00']"
              ></el-date-picker>
              <div class="botton">
                <div class="el-icon-search"></div>
                <div>检索</div>
              </div>
            </div>
          </div>
          <section>
            <div style="width:31.25vw;height:17.708vw;">
              <Histogram :idName="'ISthree'" :Color="'#13b5b1'" :height="'300%'" />
            </div>
          </section>
        </div>
      </div>
      <div class="box">
        <div class="piece">
          <nav>
            <div>设备能耗排名</div>
            <div>更多></div>
          </nav>
          <section>
            <div class="filtrate">
              <div class="filtrate-list">
                <span>用能分类：</span>
                <el-select v-model="filtrateone" placeholder="请选择">
                  <el-option
                    v-for="item in optionsone"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="filtrate-list">
                <span>能耗分项：</span>
                <el-select v-model="filtratetwo" placeholder="请选择">
                  <el-option
                    v-for="item in optionstwo"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="filtrate-list">
                <span>排序：</span>
                <el-select v-model="filtratethree" placeholder="请选择">
                  <el-option
                    v-for="item in optionsthree"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div class="filtrate-button">
                <span class="el-icon-search"></span>
                <span>检索</span>
              </div>
            </div>
            <div class="istable">
              <table border="1">
                <tr>
                  <th>排名</th>
                  <th>缺勤</th>
                  <th>请假</th>
                  <th>休假</th>
                </tr>
                <tr v-for="(item, index) in 7" :key="index">
                  <th>{{item}}</th>
                  <td>XX用电设备</td>
                  <td>1000 kW·h</td>
                  <td class="trend">
                    <div>
                      <img src="../../../assets/images/上升箭头_03.png" alt />
                      <span>20%</span>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div id="four">
      <div class="box">
        <div class="piece">
          <nav>用水量趋势</nav>
          <section style="width: 35vw;height: 14.063vw;">
            <LineChart
              :idName="'Waterconsumptiontrend'"
              :color="'#7ac7d7'"
              :series="Waterconsumptiontrendseries"
              :name="'能耗(吨)'"
            />
          </section>
        </div>
      </div>
      <div class="box">
        <div class="piece">
          <nav>用电量趋势</nav>
          <section style="width: 35vw;height: 14.063vw;">
            <LineChart
              :idName="'Electricityconsumptiontrend'"
              :color="'#7ac7d7'"
              :series="Electricityconsumptiontrendseries"
              :name="'能耗(kW·h)'"
            />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Histogram from "../../../components/echarts/Histogram";
import LineChart from "../../../components/echarts/LineChart";
import RinglikePie from "../../../components/echarts/RinglikePie";
export default {
  components: {
    Histogram,
    LineChart,
    RinglikePie
  },
  data() {
    return {
      valueTwo: "",
      valueThree: "",
      // 下拉框
      // 用能分类：
      optionsone: [
        {
          value: "选项1",
          label: "电"
        }
      ],
      filtrateone: "",
      // 能耗分项：
      optionstwo: [
        {
          value: "选项1",
          label: "全部"
        }
      ],
      filtratetwo: "",
      // 排序：
      optionsthree: [
        {
          value: "选项1",
          label: "升序"
        },
        {
          value: "选项2",
          label: "降序"
        }
      ],
      filtratethree: "",
      Waterconsumptiontrendseries: [
        {
          data: [5, 2, 4, 6, 8, 6, 7],
          type: "line",
          smooth: false,
          symbol: "circle",
          symbolSize: 5,
          sampling: "average",
          itemStyle: {
            color: "#13b5b1"
          }
        }
      ],
      Electricityconsumptiontrendseries: [
        {
          data: [5, 2, 4, 6, 8, 6, 7],
          type: "line",
          smooth: false,
          symbol: "circle",
          symbolSize: 5,
          sampling: "average",
          itemStyle: {
            color: "#007099"
          }
        }
      ]
    };
  },
  watch: {
    valueTwo(news, olds) {
      console.log(news);
    },
    valueThree(news, olds) {
      console.log(news);
    }
  },
  mounted: {}
};
</script>