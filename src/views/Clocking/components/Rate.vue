<template>
    <div class="wrapper">
        <div class="header">
            <SearchForm gradeSearch classSearch v-model="formVlaue" />
        </div>
        <div class="content">
            <CommonBar  :data="chartData"></CommonBar>
        </div>
    </div>
</template>
<script>
import { getAttendschoolCount } from "@/service/baseInfo.js";
import CommonBar from '@/views/components/CommonBar.vue'
export default {
    name: "Rate",
    components: { CommonBar },
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
        this.getCount()
    },
    methods: {
        async getCount() {
            const data = await getAttendschoolCount({...this.formVlaue})
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