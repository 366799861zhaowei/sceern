<template>
  <div class="wrapper">
    <div class="header">
      <SearchForm gradeSearch v-model="formVlaue" />
    </div>
    <div class="content">
      <CommonBar :data="chartData" more></CommonBar>
    </div>
  </div>
</template>
<script>
import { getEtiquettepolite } from "@/service/baseInfo.js";
import CommonBar from "@/views/components/CommonBar.vue";
export default {
  name: "Num",
  components: { CommonBar },
  data() {
    return {
      chartData: {},
      formVlaue: {
        gradeId: "all",
      },
      allNum: 0,
      mealNum: 0,
    };
  },
  watch: {
    "formVlaue.clazzGroupId": {
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
      const data = await getEtiquettepolite({ ...this.formVlaue });
      if (data) {
        this.chartData = {
          x: data.map((item) => item.clazzName),
          y: [
            { name: "优秀", value: data.map((item) => item.superNum) },
            { name: "一般", value: data.map((item) => item.commonNum) },
            { name: "良好", value: data.map((item) => item.goodNum) },
            { name: "较差", value: data.map((item) => item.poorNum) },
          ],
        };
      }
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  .header {
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    color: #fff;
    margin-bottom: 16px;

    .header-item {
      display: flex;
      align-items: flex-end;

      .item-label {
        margin-right: 12px;
      }

      .item-context {
        font-size: 28px;
      }
    }
  }

  .content {
    width: 100%;
    height: 200px;
  }
}
</style>
