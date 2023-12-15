<template>
    <div class="wrapper">
        <div class="header">
            <SearchForm gradeSearch classSearch v-model="formVlaue" />
        </div>
        <div class="content">
            <LineBar  :data="chartData"></LineBar>
        </div>
    </div>
</template>
<script>
import { getAttendschoolCount } from "@/service/baseInfo.js";
import LineBar from '@/views/components/LineBar.vue'
export default {
    name: "Rate",
    components: { LineBar },
    data() {
        return {
            chartData: {},
            formVlaue: {
                gradeId: 'all',
                clazzGroupId: '',
            },
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
    },
    methods: {
        async getCount() {
            const data = await getAttendschoolCount({...this.formVlaue})
            if (data) {
                this.chartData = {
                    x: data.map(item => item.weekDay),
                    y: [
                        {name:'出勤人数',type:'bar',value:data.map(item => item.attendNum)},
                        {name:'百分比',type:'line',value:data.map(item => item.percent)},
                    ]
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