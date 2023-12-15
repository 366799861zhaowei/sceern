<template>
    <div class="wrapper">
        <div class="content">
            <CommonBar :data="chartData"></CommonBar>
        </div>
    </div>
</template>
<script>
import { getAllergen } from "@/service/baseInfo.js";
import CommonBar from '@/views/components/CommonBar.vue'
export default {
    name: "PeopleNum",
    components: { CommonBar },
    data() {
        return {
            chartData: {},
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
            const data = await getAllergen({ ...this.formVlaue })
            if (data) {
                this.chartData = {
                    x: data.map(item => item.allergenName),
                    y: data.map(item => item.allergenNum)
                }
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