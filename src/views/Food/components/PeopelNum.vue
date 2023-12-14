<template>
    <div class="wrapper">
        <div class="header">
            <div class="header-item">
                <div class="item-label">全员总人数:</div>
                <div class="item-context">{{ allNum }}</div>
            </div>
            <div class="header-item">
                <div class="item-label">用餐总人数:</div>
                <div class="item-context">{{ mealNum }}</div>
            </div>
        </div>
        <div class="content">
            <el-table :data="tableData" class="content-table">
                <el-table-column v-for="(item, index) in column" :key="index" :prop="item.prop" :label="item.label"
                    :width="item.width" align="center">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import { pelpleNumTableColumn } from '../config.js'
import { dpStudentMealList } from "@/service/baseInfo.js";
export default {
    name: "PeopleNum",
    data() {
        return {
            tableData: [],
            allNum: 0,
            mealNum: 0,
        }
    },
    computed: {
        column() {
            return pelpleNumTableColumn.call(this)
        }
    },
    mounted() {
        this.init()
        this.init()
    },
    methods: {
        async init() {
            const data = await dpStudentMealList()
            if (data) {
                this.tableData = data ?? []
                let allNum = 0;
                let mealNum = 0
                this.tableData.forEach(item => {
                    allNum += parseInt(item.allNum)
                    mealNum += parseInt(item.mealNum)
                })
                this.allNum = allNum;
                this.mealNum = mealNum
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
            font-size: 14px;
        }
    }
}
</style>