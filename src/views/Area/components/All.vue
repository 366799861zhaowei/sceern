<template>
    <div class="wrapper">
        <div class="content">
            <CommonBar :data="chartData"></CommonBar>
        </div>
    </div>
</template>
<script>
import { getStandardCondition } from "@/service/baseInfo.js";
import CommonBar from '@/views/components/CommonBar.vue'
export default {
    name: "All",
    components:{CommonBar},
    data() {
        return {
            chartData:[],

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
            const data = await getStandardCondition({ id:this.formVlaue.gradeId })
            if (data) {
                // this.chartData = {
                //     x: data.map(item => item.gradeName),
                //     y: data.map(item => item.studentNum)
                // }
            }
        }
    }

}
</script>
  
<style lang="less" scoped>
.wrapper {
    width: 100%;
    height: 100%;

    .content {
        width: 100%;
        height: 100%;
    }
}
</style>