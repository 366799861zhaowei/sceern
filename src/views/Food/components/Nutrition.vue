<template>
    <div class="wrapper">
        <div class="header">
            <SearchForm gradeSearch v-model="formVlaue" />
        </div>
        <div class="content">
            <Cricle :data="chartData"></Cricle>
        </div>
    </div>
</template>
<script>
import { pelpleNumTableColumn } from '../config.js'
import { getNutrition } from "@/service/baseInfo.js";
import Cricle from '@/views/components/Cricle.vue'
export default {
    name: "PeopleNum",
    components:{Cricle},
    data() {
        return {
            chartData:[],
            formVlaue: {
                gradeId: 'all'
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
        column() {
            return pelpleNumTableColumn.call(this)
        }
    },
    mounted() {
        this.getCount()
    },
    methods: {
        async getCount() {
            const data = await getNutrition({ ...this.formVlaue })
            if (data) {
                console.log(data, 'data----------');
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
        .content-table {
            height: 180px;
            overflow-y: auto;
            font-size: 18px;
        }
    }
}
</style>