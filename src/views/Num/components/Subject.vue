<template>
  <div class="wrapper">
    <div class="content">
      <div class="content-item" v-for="(item, index) in info" :key="index">
        <div class="item-top">
          <img class="img" :src="item.img" />
          <div class="right">
            <div class="right-item" v-for="innerItem,innerIndex in item.class" :key="innerIndex">
              <div class="right-label">{{ innerItem.label }}:</div>
              <div class="right-content">{{ innerItem.value }}</div>
            </div>
          </div>
        </div>
        <div class="item-main">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Subject",
  components: {},
  data() {
    return {
      info: [
        {
          img: require("@/assets/area__1.png"),
          class: [
            {
              label: "课程名字",
              value: "数学",
            },
            {
              label: "课程名字",
              value: "数学",
            },
            {
              label: "课程名字",
              value: "数学",
            },
            {
              label: "课程名字",
              value: "数学",
            },
          ],
          content: "水水水水水水水水水水水水水水水水水水水",
        },
        {
          img: require("@/assets/area__1.png"),
          class: [
            {
              label: "课程名字",
              value: "数学",
            },
            {
              label: "课程名字",
              value: "数学",
            },
            {
              label: "课程名字",
              value: "数学",
            },
            {
              label: "课程名字",
              value: "数学",
            },
          ],
          content: "水水水水水水水水水水水水水水水水水水水",
        },
        {
          img: require("@/assets/area__1.png"),
          class: [
            {
              label: "课程名字",
              value: "数学",
            },
            {
              label: "课程名字",
              value: "数学",
            },
            {
              label: "课程名字",
              value: "数学",
            },
            {
              label: "课程名字",
              value: "数学",
            },
          ],
          content: "水水水水水水水水水水水水水水水水水水水",
        },
        {
          img: require("@/assets/area__1.png"),
          class: [
            {
              label: "课程名字",
              value: "数学",
            },
            {
              label: "课程名字",
              value: "数学",
            },
            {
              label: "课程名字",
              value: "数学",
            },
            {
              label: "课程名字",
              value: "数学",
            },
          ],
          content: "水水水水水水水水水水水水水水水水水水水",
        },
      ],
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
    height: 900px;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1%;
    font-size: 14px;
    .content-item{
        width: 100%;
        height: 24%;
        overflow: hidden;
        border-radius: 8px;
        background-color: rgba(2, 167, 240, 0.67);
        padding: 8px;
        box-sizing: border-box;
        .item-top{
            display: flex;
            height: 60%;
            justify-content: space-between;
            .img{
                width: 40%;
                height: 100%;
            }
            .right{
                width: 55%;
                .right-item{
                    display: flex;
                    .right-label{
                        margin-right: 8px;
                    }
                    &:not(:last-child){
                        margin-bottom: 10px;
                    }
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
