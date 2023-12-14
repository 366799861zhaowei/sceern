<template>
    <div class="wrapper">
        <div class="header">
            <SearchForm gradeSearch time v-model="formVlaue" />
        </div>
        <div class="content">
            <CommonBar cross :data="chartData"></CommonBar>
        </div>
    </div>
</template>
<script>
import { getEatUpRank } from "@/service/baseInfo.js";
import CommonBar from '@/views/components/CommonBar.vue'
export default {
    name: "PeopleNum",
    components: { CommonBar },
    data() {
        return {
            chartData: {},
            formVlaue: {
                gradeId: 'all',
                timeLabel:'本日',
                timeValue:[new Date(new Date().setHours(0, 0, 0, 0)).getTime(), new Date(new Date().setHours(23, 59, 59, 999)).getTime()],
            },
            allNum: 0,
            mealNum: 0,
        }
    },
    watch: {
        formVlaue: {
            handler(value) {
                this.getCount()
            },
            immediate: true,
            deep: true
        },
    },
    computed: {
    },
    mounted() {
        this.getCount()
    },
    methods: {
        async getCount() {
            const data = await getEatUpRank({ gradeId: this.formVlaue.gradeId, startTime: this.formVlaue.timeValue[0], endTime: this.formVlaue.timeValue[1] })
            if (data) {
                this.chartData = {
                    x: data.map(item => item.clazzName),
                    y: data.map(item => item.cdNum)
                }
            }
        }
    }

}
</script>
  
<style lang="less" scoped>
.wrapper {
    .header {
        width: 100%;
        font-size: 20px;
        color: #fff;
        margin-bottom: 16px;

        .header-item {
            display: flex;
            align-items: flex-end;

            .item-label {
                margin-right: 12px;
            }

            .item-context {
                font-size: 28px;
            }
        }
    }

    .content {
        width: 100%;
        height: 200px;
    }
}
</style>