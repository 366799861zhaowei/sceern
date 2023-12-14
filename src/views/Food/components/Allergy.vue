<template>
    <div class="wrapper">
        <div class="header">
            <SearchForm gradeSearch classSearch v-model="formVlaue" />
        </div>
        <div class="content">
            <CommonBar :data="chartData"></CommonBar>
        </div>
    </div>
</template>
<script>
import { pelpleNumTableColumn } from '../config.js'
import { getAllergen } from "@/service/baseInfo.js";
import CommonBar from '@/views/components/CommonBar.vue'
export default {
    name: "PeopleNum",
    components: { CommonBar },
    data() {
        return {
            chartData: [],
            formVlaue: {
                gradeId: 'all',
                clazzGroupId: ''
            },
            allNum: 0,
            mealNum: 0,
        }
    },
    watch: {
        "formVlaue.clazzGroupId": {
            handler(value) {
                this.getCount()
            },
            immediate: true,
            deep: true
        },
    },
    computed: {
        column() {
            return pelpleNumTableColumn.call(this)
        }
    },
    mounted() {
        this.getCount()
    },
    methods: {
        async getCount() {
            const data = await getAllergen({ ...this.formVlaue })
            if (data) {
                this.chartData = {
                    x:data.map(item => item.allergenName),
                    y:data.map(item => item.allergenNum)
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