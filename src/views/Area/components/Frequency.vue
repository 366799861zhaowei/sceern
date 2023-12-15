<template>
    <div class="wrapper">
        <div class="header">
            <SearchForm gradeSearch classSearch time v-model="formVlaue" />
        </div>
        <div class="content">
            <div class="c-item" v-for="(item,index) in areaUserRankList" :key="index">
                <div class="item">
                    <!-- <div class="item-index"> -->
                    <div :class="[index < 3 ? 'item-index' : 'item-index color']">
                        {{ 'No.' + item.index }}
                    </div>
                </div>
                <div class="item">
                    {{ item.areaTypeName }}
                </div>
                <div class="item">
                    {{ item.activityAreaNum + '人次' }}
                </div>
                <div class="item">
                    <div class="item-box">
                        <el-progress  :stroke-width="10" :show-text="false" :percentage="item.percent" 
                        color="rgba(62, 205, 126, 1)"
                        >
                        </el-progress>
                    </div>
                    
                </div>
                <div class="item">
                    {{ item.percent + '%'}}
                </div>
            </div>
        </div>
        <!-- <div class="content">
            <div class="content-item">
                <div class="item-img">图片</div>
                <div class="item-label">
                    <div class="label-top">大一班</div>
                    <div class="label-bottom">王子</div>
                </div>
                <div class="item-process"></div>
                <div class="item-num">80</div>
            </div>
        </div> -->
    </div>
</template>
<script>
import { getAreaFrequency } from "@/service/baseInfo.js";
export default {
    name: "Frequency",
    data() {
        return {
            chartData: {},
            formVlaue: {
                timeLabel:'本日',
                timeValue:[new Date(new Date().setHours(0, 0, 0, 0)).getTime(), new Date(new Date().setHours(23, 59, 59, 999)).getTime()],
                clazzGroupId:'',
                gradeId:'all',
            },
            areaUserRankList:[],
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
            const data = await getAreaFrequency({startTime: this.formVlaue.timeValue[0], endTime: this.formVlaue.timeValue[1] ,clazzGroupId:this.formVlaue.clazzGroupId})
            if (data) {
                // 处理 数据
                this.areaUserRankList = data;
                console.log(data,'getAreaFrequency');
            }
        }
    }

}
</script>
  
<style lang="less" scoped>
.wrapper {
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    text-align: left;
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
        .c-item{
            display: flex;
            align-items: center;
            .item{
                box-sizing: border-box;
                height: 40px;
                line-height: 40px;
                padding-left: 5px;
                
            }
            .item:nth-child(1){
                padding: 10px 0;
                box-sizing: border-box;
                width: 85px;
                background-color: rgba(96, 104, 119, 1);
                border: 1px solid rgba(165, 168, 175, 1);
                
                .item-index{
                    box-sizing: border-box;
                    margin-left: 10px;
                    padding-left: 5px;
                    line-height: 20px;
                    height: 20px;
                    width: 60px;
                    background-color: rgba(237, 165, 78, 1);
                    border-radius: 5px;
                    &.color{
                        background-color: rgba(102, 186, 248, 1);
                    }
                }
            }
            .item:nth-child(2){
                width: 81px;
                background-color: rgba(96, 104, 119, 1);
                border: 1px solid rgba(165, 168, 175, 1);
            }
            .item:nth-child(3){
                width: 80px;
                background-color: rgba(96, 104, 119, 1);
                border: 1px solid rgba(165, 168, 175, 1);
            }
            .item:nth-child(4){
                flex: 1;
                background-color: rgba(96, 104, 119, 1);
                border: 1px solid rgba(165, 168, 175, 1);
                .item-box{
                    margin-top: 15px;
                }
                // display: flex;
                // align-items: center;
            }
            .item:nth-child(5){
                width: 65px;
                background-color: rgba(96, 104, 119, 1);
                border: 1px solid rgba(165, 168, 175, 1);
            }
        }
    }
}
</style>