<template>
    <div class="wrapper">
        <div class="header">
            <SearchForm gradeSearch v-model="formVlaue" />
            <div class="cla-all-num">班段总人数：30人</div>
        </div>
        <div class="content">
            <div class="item">
                <div class="t-index">#</div>
                <div class="t-class">班级</div>
                <div class="t-all-num">总人数</div>
                <div class="t-num">视力达标数</div>
                <div class="t-rank">达标率</div>
            </div>
            <div class="item-box" v-for="(item,index) in test" :key="index">
                <div class="item">
                    <div class="t-index bor">{{ item.index }}</div>
                    <div class="t-class">{{ item.class }}</div>
                    <div class="t-all-num">{{ item.allNum }}</div>
                    <div class="t-num">{{ item.num }}</div>
                    <div class="t-rank">{{ item.rank + '%'}}</div>
                    
                </div>
                <el-progress style="margin-left: 35px;" :stroke-width="8" :show-text="false" :percentage="item.rank"
                        color="rgba(2, 136, 219, 1)">
                </el-progress>
            </div>




        </div>
    </div>
</template>
<script>
import { getVision } from "@/service/baseInfo.js";
export default {
    name: "SightCondition",
    components: {},
    data() {
        return {
            chartData: {},
            formVlaue: {
                gradeId: 'all',
            },
            test:[
                {
                    index:1,
                    class:'小班段',
                    allNum:91,
                    num:80,
                    rank:87,
                },
                {
                    index:2,
                    class:'托班段',
                    allNum:91,
                    num:80,
                    rank:84,
                },
                {
                    index:3,
                    class:'大班段',
                    allNum:91,
                    num:80,
                    rank:78,
                },
                {
                    index:4,
                    class:'中班段',
                    allNum:91,
                    num:80,
                    rank:75,
                },
                
            ]
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
            const data = await getVision({ id: this.formVlaue.gradeId })
            if (data) {
                console.log(data, 'getVision');
            }
        }
    }

}
</script>
  
<style lang="less" scoped>
.wrapper {
    .header {
        position: relative;
        display: flex;
        justify-content: space-around;
        font-size: 20px;
        color: #fff;
        margin-bottom: 16px;
        .cla-all-num{
            position: absolute;
            top: 10px;
            right: 0px;
        }
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
        color: #fff;
        font-size: 16px;
        position: relative;
        width: 100%;
        height: 200px;
        .item-box{
            margin-bottom: 10px;
        }
        .item {
            display: flex;
            align-items: center;

            .t-index {
                width: 30px;
                height: 30px;
                padding: 5px;
                box-sizing: border-box;
                text-align: center;
                margin-right: 10px;
                &.bor{
                    background-color: rgba(237, 174, 93, 1);
                }
            }

            .t-class {
                flex: 1;
            }

            .t-all-num {
                width: 80px;
            }

            .t-num {
                width: 100px;
            }

            .t-rank {
                width: 60px;
                text-align: end;
            }
        }
    }
}
</style>