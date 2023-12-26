<template>
  <div class="wrapper">
    <div class="content">累计活动：{{ infoData.totalTimes }}人</div>
    <div class="list">
      <div
        class="list-item"
        v-for="(item, index) in infoData.detailsList"
        :key="index"
      >
        <div class="item index">{{ index + 1 }}</div>
        <div class="item">{{ item.clazzName }}</div>
        <div class="item">{{ item.typeNameList[0] ?? "" }}</div>
        <div class="item">{{ item.typeNameList[1] ?? "" }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSportTime } from "@/service/baseInfo.js";
export default {
  name: "List",
  components: {},
  data() {
    return {
      infoData: {},
    };
  },
  computed: {},
  mounted() {
    this.getCount();
  },
  methods: {
    async getCount() {
      const data = await getSportTime();
      if (data) {
        console.log(data, "----getSportTime");
        this.infoData = data;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 900px;
  .content {
    width: 100%;
    height: 100px;
    color: rgba(255, 255, 255, 1);
    background-color: rgb(5, 16, 31);
    font-size: 44px;
    text-align: center;
    line-height: 100px;
    margin-bottom: 20px;
  }
  .list {
    height: 760px;
    overflow-y: auto;
    font-size: 18px;
    color: #fff;

    .list-item {
      width: 100%;
      display: flex;
      height: 80px;
      align-items: center;
      justify-content: space-around;
      background-color: rgba(0, 102, 153, 1);
      border-radius: 8px;
      box-sizing: border-box;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
      .item {
        padding-right: 16px;
        border-right: 1px solid grey;
        width: 80px;

        &.index {
          position: relative;
          height: 100%;
          width: 40px;
          line-height: 80px;
          text-align: center;
          padding-right: 0;
          background-color: rgba(134, 194, 236, 0.886);
          transform: skewX(-20deg); /* 根据需要调整 */
          transform-origin: top;
        }
      }
    }
  }
}
</style>
