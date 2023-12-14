<template>
    <div class="polo-ball-box" ref="wrapper">
        <div class="echart-item" ref="echart"></div>
    </div>
</template>
  
<script>
export default {
    name: "CommonBar",
    props: {
        data: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data() {
        return {
            myChart: null,
        };
    },
    computed: {
    },
    watch: {
        data: {
            handler() {

                this.$nextTick(async () => {
                    await this.chartssize(this.$refs["wrapper"], this.$refs.echart); //必须等图表容器宽高获取后才能渲染
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
                console.log(wi,hi);
                resolve();
            });
        },
        initChart() {
            // 基于准备好的dom，初始化echarts实例
            console.log(this.data, '----------------------');
            this.myChart = this.echarts.init(this.$refs.echart);
            let option = {
                xAxis: {
                    type: 'category',
                    data: this.data.x
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: this.data.y,
                        type: 'bar',
                        large: true,
                        backgroundStyle: {
                            borderRadius: [50, 50, 0, 0]
                        }
                    }
                ]
            };
            this.myChart.setOption(option);
        },
        async handleResizeCharts() {
            if (!this.myChart) return;
            await this.chartssize(this.$refs["wrapper"], this.$refs.echart);
            this.myChart.resize();
        },
    },
};
</script>
  
<style scoped lang="less">
.polo-ball-box {
    width: 100%;
    height: 100%;
}
</style>
  