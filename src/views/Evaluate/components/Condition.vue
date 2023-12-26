<template>
  <div class="wrapper">
    <div class="header">
      <SearchForm gradeSearch classSearch v-model="formVlaue" />
    </div>
    <div class="content">
        <div class="item">
            <el-progress type="circle" :percentage="chartData[0].percent"  :width="120" :stroke-width="30" :show-text="false" class="item-parogress"></el-progress>
            <div class="item-label">{{ `${chartData[0].typeName} ${chartData[0].percent}%` }}</div>
        </div>
        <div class="item">
            <el-progress type="circle" :percentage="chartData[1].percent"  :width="120" :stroke-width="30" status="success" :show-text="false" class="item-parogress"></el-progress>
            <div class="item-label">{{ `${chartData[1].typeName} ${chartData[1].percent}%` }}</div>
        </div>
        <div class="item">
            <el-progress type="circle" :percentage="chartData[2].percent"  :width="120" :stroke-width="30" status="warning" :show-text="false" class="item-parogress"></el-progress>
            <div class="item-label">{{ `${chartData[2].typeName} ${chartData[2].percent}%` }}</div>
        </div>
    </div>
  </div>
</template>
<script>
import { getFocusactivity } from "@/service/baseInfo.js";
export default {
  name: "Condition",
  data() {
    return {
      chartData: [],
      formVlaue: {
        gradeId: "all",
        clazzGroupId: "",
      },
    };
  },
  watch: {
    formVlaue: {
      handler(value) {
        this.getCount();
      },
      immediate: true,
      deep: true,
    },
  },
  computed: {},
  mounted() {},
  methods: {
    async getCount() {
      const data = await getFocusactivity({ ...this.formVlaue });
      if (data) {
        // 处理 数据
        this.chartData = data;
        console.log(data, "asdadgetFocusactivityas");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  position: relative;
  .header {
    width: 100%;
    font-size: 20px;
    color: #fff;
    margin-bottom: 16px;
  }

  .content {
    color: rgba(255, 255, 255, 0.8);
    font-size: 18px;
    text-align: left;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-around;
    .item {
      width: 30%;
      .item-parogress{
        width: 100%;
        text-align: center;
      }
      .item-label {
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>
