<template>
    <div class="polo-ball-box" ref="wrapper">
        <div class="echart-item" :ref="id" :id="id"></div>
    </div>
</template>
  
<script>
import echarts from "echarts";
export default {
    name: "Cricle-chart",
    props: {
        data:{
            type:Array,
        }
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
            let option = option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
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
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ]
                    }
                ]
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
.polo-ball-box {
    position: relative;
    border: 1px solid #3686e1;
    border-radius: 50%;
    margin: auto;
    margin-bottom: 16px;
}

.polo-ball-box::after {
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
  