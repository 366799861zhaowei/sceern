<template>
    <div class="wrapper">
        <div class="header">
            <SearchForm classSearch v-model="formVlaue" class="header-left"/>
            <div class="header-right">班级总人数：{{ infoData.clazzNumber }}</div>
        </div>
        <div class="content">
            <div class="content-header">
                <div class="left">
                    <div class="left-label">报名人数：</div>
                    <div class="left-content" v-for="item,index in text" :key="index">{{ item }}</div>
                </div>
                <div class="right">
                    <el-progress type="circle" :percentage="infoData.percentage" :width="120" :stroke-width="12" text-color="#fff" :format="format"></el-progress>
                </div>
            </div>
            <div class="main">
                <Pie :data="chartData" radius="60%" :center="['30%','50%']"></Pie>

            </div>
        </div>
    </div>
</template>
<script>
import { getNumPeopel } from "@/service/baseInfo.js";
import Pie from '@/views/components/Pie.vue'
export default {
    name: "Count",
    components:{Pie},
    data() {
        return {
            infoData:{},
            chartData:[],
            formVlaue: {
                clazzGroupId: ''
            },
            text:'111'
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
            const data = await getNumPeopel({...this.formVlaue})
            if (data) {
                console.log(data,'getNumPeopel');
                const {detailsList} = data
                this.infoData = data
                let arr = []
                detailsList.forEach(item => {
                    arr.push({ ...item, name: item.name ,value:item.number})
                })
                this.chartData = arr
            }
        },
        format(val){
            return `${val}%报名率`
        }
    }

}
</script>
  
<style lang="less" scoped>
.wrapper {
    color: #fff;
    font-size: 16px;
    .header {
        display: flex;
        justify-content: space-around;


        margin-bottom: 16px;
        align-items: center;

        .header-left{
            width: 50%;
        }
    }

    .content {
        width: 100%;
        height: 450px;
        .content-header{
            height: 120px;
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            .left{
                display: flex;
                align-items: center;
                .left-label{
                    color:  rgba(0, 255, 252, 1);
                    margin-right: 12px;
                }
                .left-content{
                    font-family: DIN , DIN-700;
                    background-color:rgb(3, 85, 84) ;
                    padding: 8px;
                    border-radius: 8px;
                    font-size: 48px;
                    &:not(:last-child){
                        margin-right: 4px;
                    }
                }
            }
            .right{
                width: 50%;
                display: flex;
                justify-content: center;
                .el-progress{
                    margin: 0 auto;
                }
            }
        }
        .main{
            width: 100%;
            height: 270px;
        }
    }
}
</style>