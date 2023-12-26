<template>
  <div class="wrapper">
    <div class="header">
      <SearchForm gradeSearch classSearch v-model="formVlaue" />
    </div>
    <div class="content">
      <div class="item" v-for="(item, index) in options" :key="index">
        <div class="item-label">{{ item.archiveTypeName }}</div>
        <div class="item-content">
          <el-carousel height="220px">
            <el-carousel-item
              v-for="(
                innerItem, innerIndex
              ) in item.dpStudentGoodGrowthImageList"
              :key="innerIndex"
            >
              <img :src="innerItem.imageUrl" alt="图片丢失">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getFour } from "@/service/baseInfo.js";
export default {
  name: "Four",
  data() {
    return {
      infoData: [],
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
  computed: {
    options(){
      return this.infoData
    }
  },
  mounted() {},
  methods: {
    async getCount() {
      const data = await getFour({ ...this.formVlaue });
      if (data) {
        // // 处理 数据
        // let allNum = 0;
        // data.forEach((item) => {
        //   allNum += item.studentNum;
        //   this.allNum = allNum;
        // });
        // this.AttendschoolConditionList = data;
        console.log(data, "asdadas");
        this.infoData = data;
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
    height:800px;
    .item {
      width: 100%;
      height: 250px;
      background-color:rgba(2, 125, 180, 1) ;
      .item-label {
        width: 100%;
        height: 25px;
        text-align: center;
      }
      .item-content{
        width: 100%;
        height: calc(100% - 25px);
      }
      &:not(:last-child){
        margin-bottom: 16px;
      }
    }
    .height{
      height: 200px;
      width: 200px;
      background-color: red;
    }
  }
}
</style>
