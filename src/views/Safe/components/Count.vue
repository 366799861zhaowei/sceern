<template>
  <div class="wrapper">
    <div class="content">
      <div class="left">
        <div class="left-label">累计开展</div>
        <div class="left-label">安全教育次数</div>
        <div class="left-num">
          <div class="left-content" v-for="(item, index) in text" :key="index">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="right">
        <CommonBar cross :data="chartData"></CommonBar>
      </div>
    </div>
  </div>
</template>
<script>
import { getSafeCount } from "@/service/baseInfo.js";
import CommonBar from '@/views/components/CommonBar.vue'
export default {
  name: "Count",
  components: { CommonBar },
  data() {
    return {
      text: "1111",
      chartData:{}
    };
  },
  watch: {},
  computed: {},
  mounted() {
    this.getCount()
  },
  methods: {
    async getCount() {
            const data = await getSafeCount()
            if (data) {
              console.log(data,'data');
              this.chartData = {
                    x: data.map(item => item.typeName),
                    y: data.map(item => item.countNum)
                }
            }
        },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  .content {
    height: 250px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .left {
      width: 30%;
      font-size: 16px;
      color: rgba(146, 137, 252, 1);
      .left-label {
        width: 100%;
        text-align: center;
      }
      .left-num{
        display: flex;
        margin-top: 16px;
        .left-content {
          color: #fff;
          font-family: DIN, DIN-700;
          background-color: rgb(3, 85, 84);
          padding: 8px;
          border-radius: 8px;
          font-size: 48px;
          &:not(:last-child) {
            margin-right: 4px;
          }
        }
      }
    }
    .right{
      width: 65%;
      height: 180px;
    }
  }
}
</style>
