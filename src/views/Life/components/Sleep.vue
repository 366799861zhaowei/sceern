<template>
    <div class="wrapper">
        <div class="header">
            <div class="header-left">标准饮水 2 小时</div>
        </div>
        <div class="content">
            <CommonBar  :data="chartData"></CommonBar>
        </div>
    </div>
</template>
<script>
import { getSleep } from "@/service/baseInfo.js";
import CommonBar from '@/views/components/CommonBar.vue'
export default {
    name: "Sleep",
    components:{CommonBar},
    data() {
        return {
            chartData:{}
        }
    },
    watch: {
    },
    computed: {
    },
    mounted() {
    this.getCount()
    },
    methods: {
        async getCount() {
            const data = await getSleep()
            if (data) {
                console.log(data,'getSleep');
                this.chartData = {
                    x: data.map(item => item.clazzName),
                    y: data.map(item => item.number)
                }
            }
        }
    }

}
</script>
  
<style lang="less" scoped>
.wrapper {
    color: rgba(255, 255, 255, 1);
    font-size: 40px;
    text-align: left;

    .header {
        position: relative;
        .header-left{
            font-weight: 700;
        }
        .header-right {
            position: absolute;
            right: 0;
            bottom: 0px;
            font-size: 28px;
        }
    }
    .content{
        height: 200px;
        width: 100%;
    }

}
</style>