<template>
  <div class="wrapper" ref="wrapper">
    <div class="echart-item" :ref="id" :id="id"></div>
  </div>
</template>

<script>
import "echarts-liquidfill";
import echarts from "echarts";
export default {
  name: "Liquid",
  props: {
    id: {
      type: String,
      default: "",
    },
    percentData: {
      type: Number,
    },
    colorStops: {
      type: Array,
      default() {
        return [
          {
            offset: 1,
            color: ["#71E9DC"], // 100% 处的颜色
          },
          {
            offset: 0,
            color: ["#43A9FF"], // 0% 处的颜色
          },
        ];
      },
    },
  },
  data() {
    return {
      myChart: null,
    };
  },
  watch: {
    percentData: {
      handler() {
        this.$nextTick(async () => {
          await this.chartssize(this.$refs["wrapper"], this.$refs[this.id]); //必须等图表容器宽高获取后才能渲染
          this.initChart(); //必须等dom元素挂载完后才能进行图表初始化
        });
      },
      deep: true,
      immediate: true,
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResizeCharts);
  },
  methods: {
    //参数container为图表盒子节点. charts为图表节点
    chartssize(container, charts) {
      new Promise((resolve) => {
        function getStyle(el) {
          if (window.getComputedStyle) {
            return window.getComputedStyle(el, null);
          } else {
            return el.currentStyle;
          }
        }
        var wi = getStyle(container, "width").width;
        var hi = getStyle(container, "height").height;
        // console.log("宽：", wi, "高：", hi);
        charts.style.width = wi;
        charts.style.height = hi;
        resolve();
      });
    },
    initChart() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(this.$refs[this.id]);
      let option = {
        series: [
          {
            type: "liquidFill",
            radius: "90%",
            center: ["50%", "50%"],
            data: [
              this.percentData,
              this.percentData > 0.2 ? this.percentData - 0.1 : 0,
            ],
            backgroundStyle: {
              borderWidth: 1,
              color: "#0D2538",
            },
            label: {
              normal: {
                color: "#fff",
                insideColor: "transparent",
                textStyle: {
                  fontSize: 20,
                  color: "#fff",
                },
                formatter: (val) => {
                  return `${(val.value * 100).toFixed(2)}%`;
                },
              },
            },
            color: [
              {
                type: "linear",
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: this.colorStops,
                global: false, // 缺省为 false
              },
            ],
            outline: {
              show: true,
              borderDistance: 1,
              itemStyle: {
                borderColor: "rgba(67,209,100,1)",
                borderWidth: 0,
              },
            },
          },
        ],
      };
      this.myChart.setOption(option);
    },
    async handleResizeCharts() {
      if (!this.myChart) return;
      await this.chartssize(this.$refs["wrapper"], this.$refs[this.id]);
      this.myChart.resize();
    },
  },
};
</script>

<style scoped lang="less">
.wrapper {
  position: relative;
  border: 1px solid #3686e1;
  border-radius: 50%;
  margin: auto;
  margin-bottom: 16px;
}
.wrapper::after {
  position: absolute;
  content: "";
  right: 17px;
  top: 10px;
  width: 8px;
  height: 8px;
  background: #4aa0ff;
  border-radius: 50%;
}
.echart-item {
  width: 100%;
  height: 100%;
}
</style>
