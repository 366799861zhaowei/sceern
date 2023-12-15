<template>
    <div class="wrapper">
        <div class="header">
            <SearchForm gradeSearch time classSearch v-model="formVlaue" />
        </div>
        <div class="content">
            <div class="content-top">
                <div class="name">光盘人次</div>
                <div class="num">222</div>
                <div class="name">光盘率</div>
                <div class="redo">
                    <el-progress type="circle" color="rgba(255, 138, 72, 1)" :width="90" :stroke-width="8"
                        :percentage="100"></el-progress>
                </div>
            </div>
            <div class="eat-list">
                <EatItem v-for="(item, index) in eatList" :key="index" :eatData="item" :index="index"></EatItem>
            </div>
        </div>
    </div>
</template>
<script>
import { getEatUp } from "@/service/baseInfo.js";
import EatItem from "./EatItem.vue"
export default {
    name: "EatUp",
    components: { EatItem },
    data() {
        return {
            chartData: {},
            eatList: [],
            eatLists: [
            ],
            formVlaue: {
                gradeId: 'all',
                timeLabel: '本日',
                timeValue: [new Date(new Date().setHours(0, 0, 0, 0)).getTime(), new Date(new Date().setHours(23, 59, 59, 999)).getTime()],
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
    },
    methods: {
        async getCount() {
            const data = await getEatUp({ gradeId: this.formVlaue.gradeId, startTime: this.formVlaue.timeValue[0], endTime: this.formVlaue.timeValue[1], clazzGroupId: this.formVlaue.clazzGroupId })
            if (data) {
                // this.chartData = {
                //     x: data.map(item => item.clazzName),
                //     y: data.map(item => item.cdNum)
                // }
                this.eatList = data
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
        color: rgba(255, 255, 255, 1);
        font-size: 16px;

        .content-top {
            height: 100px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-bottom: 20px;

            .num {
                font-size: 42px;
                margin-right: 100px;
            }

            .redo {
                height: 100px;
                width: 100px;
            }
        }

        .eat-list {
            height: 400px;
            overflow-y: auto
        }
    }
}</style>