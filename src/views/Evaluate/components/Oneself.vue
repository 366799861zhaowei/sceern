<template>
    <div class="wrapper">
        <div class="header">
            <SearchForm gradeSearch  v-model="formVlaue" />
        </div>
        <div class="content">
            <LineBar  :data="chartData"></LineBar>
        </div>
    </div>
</template>
<script>
import { getSelf } from "@/service/baseInfo.js";
import LineBar from '@/views/components/LineBar.vue'
export default {
    name: "Oneself",
    components: { LineBar },
    data() {
        return {
            chartData: {},
            formVlaue: {
                gradeId: 'all',
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
            const data = await getSelf({...this.formVlaue})
            if (data) {
                this.chartData = {
                    x: data.map(item => item.clazzName),
                    y: [
                        {name:'自理能力人数',type:'bar',value:data.map(item => item.selfNum)},
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