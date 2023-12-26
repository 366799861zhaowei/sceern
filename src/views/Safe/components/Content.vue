<template>
  <div class="wrapper">
    <div class="header">
      <div class="btns">
        <div class="btn" v-for="(item, index) in btns" :key="index" :class="{active:item.value === btnValue}" @click="handleClick(item.value)">
          {{ item.label }}
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content-item">
        <div class="item" v-for="item,index in contentList" :key="index">
          <div class="item-label">{{ item.label }}</div>
          <div class="item-content">{{ item.ctx }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Content",
  components: {},
  data() {
    return {
      btnValue:'food',
      btns: [
        {
          label: "食品安全",
          value: "food",
        },
        {
          label: "交通安全",
          value: "food2",
        },
        {
          label: "消防安全",
          value: "food3",
        },
        {
          label: "校园安全",
          value: "food4",
        },
      ],
      contentList:[
        {label:'绿色食品标志',ctx:'绿色食品标志是由绿色食品发展中心在国家工商行政管理总局商'},
        {label:'保健食品标志',ctx:'正规的保健食品会在产品的外包装盒上标出蓝色的，形如“蓝帽'},
        {label:'质量安全标志',ctx:'食品安全是大家都关注的话题，在关注食品本身的同时，大家还'},
        {label:'食材包装标准',ctx:'中国现行有效的食品包装材料相关标准目录（国家标准）'},
        {label:'注意事项',ctx:'一、注意看经营者是否有营业执照，其主体资格是否合法。'},
      ]
    };
  },
  watch: {},
  computed: {},
  mounted() {},
  methods: {
    handleClick(val){
      this.btnValue = val
    }
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  color: rgba(255, 255, 255, 1);
  text-align: left;
  .header {
    font-size: 16px;
    margin-bottom: 10px;
    .btns{
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid gray ;
      .btn{
        height: 45px;
        width: 25%;
        line-height: 45px;
        text-align: center;
        cursor: pointer;
        &.active{
          background-color: rgba(35, 145, 255, 0.2);
        }
      }
    }
  }
  .content {
    height: 600px;
    width: 100%;
    font-size: 16px;

    .content-item{
      height: 100%;
      width: 100%;
      overflow-y: auto;
      color:  rgba(255, 255, 255, 0.8);
      .item{
        width: 100%;
        background-color: rgba(35, 145, 255, 0.2);
        padding: 16px 20px 16px 60px;
        box-sizing: border-box;
        .item-content{
          width: 100%;
          word-wrap: break-word;
        }
        &:not(:last-child){
          margin-bottom: 8px;
        }
      }
    }
  }
}
</style>
