<template>
    <div class="wrapper">
        <div class="child-table">
            <div class="table-content">
                <div class="item man-sex">男</div>
                <div class="item head-man-height">身高</div>
                <div class="item head-man-width">体重</div>
            </div>  
            <div class="table-content" v-for="(item,index) in childList.manList">
                <div class="item man-sex">{{ item.year }}</div>
                <div class="item height">{{ item.height }}</div>
                <div class="item width">{{ item.weight }}</div>
            </div>  
        </div>
        <div class="child-table">
            <div class="table-content">
                <div class="item woman-sex">女</div>
                <div class="item head-woman-height">身高</div>
                <div class="item head-woman-width">体重</div>
            </div>  
            <div class="table-content" v-for="(item,index) in childList.womanList">
                <div class="item woman-sex">{{ item.year }}</div>
                <div class="item height">{{ item.height }}</div>
                <div class="item width">{{ item.weight }}</div>
            </div> 
        </div>
    </div>
</template>
<script>
import { getStandardBody } from "@/service/baseInfo.js";
export default {
    name: "Standard",

    data() {
        return {
            childList:{},
        }
    },
    watch: {
    },
    computed: {
    },
    mounted() {
        this.getCount()
    },
    methods: {
        async getCount() {
            const data = await getStandardBody()
            if (data) {
                this.childList = data;
                console.log(data, 'Standarddata-----222222222222222-----');
            }
        }
    }

}
</script>
  
<style lang="less" scoped>
.wrapper {
    display: flex;
        
        justify-content: space-between;
    .child-table{
        // width: 48%;
        // background-color: red;
        font-size: 14px;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        .table-content{
            display: flex;
            line-height: 40px;
            
            .item{
                background-color: rgba(96, 104, 119, 1);
                height: 40px;
                border: 1px solid rgb(171, 176, 187);
                &.man-sex{
                    width: 60px;
                    background-color: rgba(1, 84, 120, 0.69);
                }
                &.woman-sex{
                    width: 60px;
                    background-color: rgba(236, 128, 141, 0.75);
                }
                &.height{
                    width: 80px;
                }
                &.width{
                    width: 80px;
                }
                &.head-man-height{
                    width: 80px;
                    background-color: rgba(1, 84, 120, 0.69);
                }
                &.head-man-width{
                    width: 80px;
                    background-color: rgba(1, 84, 120, 0.69);
                }
                &.head-woman-height{
                    width: 80px;
                    background-color: rgba(236, 128, 141, 0.75);
                }
                &.head-woman-width{
                    width: 80px;
                    background-color: rgba(236, 128, 141, 0.75);
                }
            }
     

        }
    }
    
}
</style>