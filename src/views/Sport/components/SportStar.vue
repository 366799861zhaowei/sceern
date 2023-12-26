<template>
  <div class="wrapper">
    <div class="header">
      <SearchForm classSearch v-model="formVlaue" class="header-left" />
      <div class="header-right">班级总人数：{{ infoData.totalNumber }}</div>
    </div>
    <div class="content">
      <div class="content-header">
        <div class="btns">
          <div
            class="btn"
            v-for="(item, index) in infoData.detailsList"
            :key="index"
            :class="{ active: index === btnValue }"
            @click="handleClick(index)"
          >
            {{ item.typeName }}
          </div>
        </div>
      </div>
      <div class="main">
        <EatItem
          sport
          v-for="(item, index) in infoData.detailsList[btnValue].students"
          :key="index"
          :index="index"
          :eatData="{
            index: index + 1,
            pictureUrl: item.pictureUrl,
            cdNum: item.sportsTime,
            studentName: item.name,
          }"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { getSportStar } from "@/service/baseInfo.js";
import EatItem from "@/views/Food/components/EatItem.vue";
export default {
  name: "Count",
  components: { EatItem },
  data() {
    return {
      infoData: {},
      btnValue: 0,
      formVlaue: {
        clazzGroupId: "",
      },
      text: "111",
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
      const data = await getSportStar({ id: this.formVlaue.clazzGroupId });
      if (data) {
        console.log(data, "getNumPeopel");
        this.infoData = data;
        // this.btnValue = data.detailsList[0].typeName;
      }
    },
    handleClick(val) {
      this.btnValue = val;
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  color: #fff;
  font-size: 16px;
  .header {
    display: flex;
    justify-content: space-around;

    margin-bottom: 16px;
    align-items: center;

    .header-left {
      width: 50%;
    }
  }

  .content {
    width: 100%;
    height: 280px;
    display: flex;
    flex-direction: column;
    .content-header {
      font-size: 14px;
      margin-bottom: 10px;
      .btns {
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid gray;
        flex-wrap: wrap;
        .btn {
          height: 45px;
          width: fit-content;
          padding: 0 4px;
          border-radius: 4px;
          line-height: 45px;
          text-align: center;
          cursor: pointer;
          &.active {
            background-color: rgba(35, 145, 255, 0.2);
          }
        }
      }
    }
    .main {
      width: 100%;
      height: calc(100% - 90px);
      overflow-y: auto;
    }
  }
}
</style>
