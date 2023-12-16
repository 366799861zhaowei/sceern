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
        },
        cross: {
            type: Boolean,
            default: false
        },
        more: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            myChart: null,
        };
    },
    computed: {
        barShaft() {
            if (!this.cross) {
                return {
                    xAxis: {
                        type: 'category',
                        data: this.data.x
                    },
                    yAxis: {
                        type: 'value'
                    },
                }
            } else {
                return {
                    xAxis: {
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        data: this.data.x
                    },
                }
            }
        },
        series() {
            if (!this.more) {
                return [{
                    data: this.data.y,
                    type: 'bar',
                    backgroundStyle: {
                        borderRadius: [50, 50, 0, 0]
                    }
                }]
            } else {
                let arr = []
                this.data.y.forEach(item => {
                    arr.push({
                        name: item.name,
                        data: item.value,
                        type: 'bar',
                        backgroundStyle: {
                            borderRadius: [50, 50, 0, 0]
                        }
                    })
                })
                return arr
            }
        },
        legend() {
            if (!this.more) {
                return {}
            } else {
                let arr = []
                this.data.y.forEach(item => {
                    arr.push(
                        item.name
                    )
                })
                return {
                    data:arr
                }
            }
        },
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
                grid: {
                    left: '5',
                    right: '15',
                    bottom: '5',
                    top: '25',
                    containLabel: true // 这个属性确保标签不会溢出容器
                },
                legend: {
                    ...this.legend,
                    top: '0',
                    right: '0',
                    textStyle: {
                        color: "#fff"
                    }
                },
                ...this.barShaft,
                series: this.series
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
  