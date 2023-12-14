<template>
    <div class="polo-ball-box" ref="wrapper">
        <div class="echart-item" ref="echart"></div>
    </div>
</template>
  
<script>
export default {
    name: "Cricle-chart",
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
                console.log('金娜娜娜娜',this.data);
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
                resolve();
            });
        },
        initChart() {
            // 基于准备好的dom，初始化echarts实例
            console.log(this.data, '----------------------');
            this.myChart = this.echarts.init(this.$refs.echart);
            let option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    right: '25',
                    top: 'center',
                    orient: "vertical",
                    textStyle: {
                        color: "#fff",
                        fontSize: 16
                    }
                },

                series: [
                    {
                        name: 'Access From',
                        width: '100%',
                        height: '100%',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        center: ["30%", "50%"],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            // borderRadius: 10,
                            borderColor: '#fff',
                            // borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: this.data,
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
  