<template>
    <div class="chart-wrapper" ref="wrapper">
        <div class="echart-item" ref="echart"></div>
    </div>
</template>
  
<script>
export default {
    name: "Pie",
    props: {
        data: {
            type: Array,
            default: () => {
                return []
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
                charts.style.width = wi;
                charts.style.height = hi;
                resolve();
            });
        },
        initChart() {
            // 基于准备好的dom，初始化echarts实例
            this.myChart = this.echarts.init(this.$refs.echart);
            let option = {
                tooltip: {
                    trigger: 'item',
                    // textStyle: {
                    //     color: "#fff",
                    //     fontSize: 16
                    // }
                },
                legend: {
                    orient: "vertical",
                    top: 'top',
                    right: '0',
                    textStyle: {
                        color: "#fff",
                        fontSize: 16
                    }
                },
                series: [
                    {
                        type: 'pie',
                        radius: '80%',
                        data: this.data,
                        center: ['50%', '50%'],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
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
.chart-wrapper {
    width: 100%;
    height: 100%;
}
</style>
  