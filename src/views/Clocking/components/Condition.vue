<template>
    <div class="wrapper">
        <div class="header">
            <SearchForm gradeSearch classSearch v-model="formVlaue" />
            <div class="all-num">{{ '总人数：'+ allNum +'人' }}</div>
        </div>
        <div class="content">
            <!-- -------内容 -->
            <div class="content-item" v-for="(item,index) in AttendschoolConditionList" :key="index">
                <div class="item-header">
                    <div class="item-header-left">{{ item.typeName }}</div>
                    <div class="item-header-left">{{ item.studentNum }}</div>
                </div>
                <div class="item-content">
                    <el-progress  :stroke-width="10" :show-text="false" :percentage="((item.studentNum/allNum ?? 0)*100).toFixed(0)" 
                    :color="index==0?'rgba(35, 145, 255, 1)':(index==1?'rgba(90, 216, 166, 1)':(index==2?'rgba(255, 195, 40, 1)':'rgba(255, 116, 90, 1)'))"
                        >
                        </el-progress>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getAttendschoolCondition } from "@/service/baseInfo.js";
export default {
    name: "Condition",
    data() {
        return {
            allNum:0,
            chartData: {},
            formVlaue: {
                gradeId: 'all',
                clazzGroupId: '',
            },
            AttendschoolConditionList:[],
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
            const data = await getAttendschoolCondition({...this.formVlaue})
            if (data) {
                // 处理 数据
                let allNum = 0;
                data.forEach(item => {
                    allNum += item.studentNum
                    this.allNum = allNum
                });
                this.AttendschoolConditionList = data
                console.log(data,'asdadas')
            }
        }
    }

}
</script>
  
<style lang="less" scoped>
.wrapper {
    position: relative;
    .header {
        width: 100%;
        font-size: 20px;
        color: #fff;
        margin-bottom: 16px;
        .all-num{
            position: absolute;
            right: 0px;
            top: 10px;
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
        color: rgba(255, 255, 255, 0.8);
        font-size: 18px;
        text-align: left;
        width: 100%;
        height: 300px;
        .content-item{
            margin-bottom: 10px;
            .item-header{
                display: flex;
                justify-content: space-between;
                line-height: 44px;
                
            }
        }
    }
}
</style>