<template>
    <div class="wrapper">
        <div class="header">
            <SearchForm gradeSearch v-model="formVlaue" />
        </div>
        <div class="content">
            <CommonBar :data="chartData"></CommonBar>
        </div>
    </div>
</template>
<script>
import { getStandardCondition } from "@/service/baseInfo.js";
import CommonBar from '@/views/components/CommonBar.vue'
export default {
    name: "StandardCondition",
    components: { CommonBar },
    data() {
        return {
            chartData: {},
            formVlaue: {
                gradeId: 'all'
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
            const res = await getStandardCondition({ id: this.formVlaue.gradeId })
            if (res) {
                const {detailsList:data} = res
                console.log(data, 'StandardCondition');
                this.chartData = {
                    x: data.map(item => item.name),
                    y: [{ name: '身高', value: data.map(item => item.heightNumber) },
                    { name: '体重', value: data.map(item => item.weightNumber) },]
                }
            }
        }
    }

}
</script>
  
<style lang="less" scoped>
.wrapper {
    .header {
        display: flex;
        justify-content: space-around;
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