<template>
  <div class="wrapper">
    <div class="content">
      <div class="content-item">
        <div class="item-top">
          <img class="img" src='@/assets/teacher_1.jpg' />
          <div class="right">
            <div class="right-top">
              <div class="top-item">张静</div>
              <div class="top-item">院长</div>
            </div>
            <div class="right-mind">
              <div class="mind-item">学历：大学本科</div>
              <div class="mind-item">教学经验：22年</div>
            </div>
            <div class="right-bottom">
              <div class="botom-label">职业资格:</div>
              <div class="botom-content">幼儿园园长证/ACEI国际托育职业园长证/幼儿教师资格/高级育婴师资格/心理学岗位能力证书</div>
            </div>
          </div>
        </div>
        <div class="item-main">
          <div class="main-label">教师寄语:</div>
          <div class="main-content">用欣赏的眼光看待孩子，让尊重伴随他们的成长</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Teacher",
  components: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.wrapper {
  color: rgba(255, 255, 255, 1);
  font-size: 40px;
  text-align: left;

  .header {
    position: relative;

    .header-left {
      font-weight: 700;
    }

    .header-right {
      position: absolute;
      right: 0;
      bottom: 0px;
      font-size: 28px;
    }
  }

  .content {
    height: 300px;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1%;
    font-size: 14px;
    .content-item{
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 8px;
        background-color: rgba(2, 167, 240, 0.67);
        padding: 8px;
        box-sizing: border-box;
        .item-top{
            display: flex;
            height: 70%;
            justify-content: space-between;
            .img{
                width: 40%;
                height: 100%;
            }
            .right{
                width: 55%;
                display: flex;
                flex-direction: column;
                gap: 12px;
                .right-top{
                  display: flex;
                  justify-content: space-around;
                  font-size: 18px;
                }
                .right-mind{
                  display: flex;
                  justify-content: space-around;
                }
            }
        }
        .item-main{
            padding: 8px;
        }
    }
  }
}
</style>
