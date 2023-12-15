<template>
    <div class="wrapper">
        <div class="drink-title">
            <div class="title-left">标准饮水 800 ml</div>
            <div class="title-right">达标情况</div>
        </div>
        <div class="drink-content" v-for="(item,indexx) in testList" :key="indexx">
                <div class="class-name">{{item.gradeName}}</div>
                <div class="progress">
                    <el-progress  :stroke-width="number" :show-text="false" :percentage="100" color="rgba(136, 250, 200, 1)"
                    >
                    </el-progress>
                </div>
                
                <div class="drink-num">{{ item.number }}</div>
        </div>
    </div>
</template>
<script>
import { getDrink } from "@/service/baseInfo.js";
export default {
    name: "DrinkSituation",
    data() {
        return {
            number:10,
            testList:[
                
            ]
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
            const data = await getDrink()
            if (data) {
                this.testList = data
            }
        }
    }

}
</script>
  
<style lang="less" scoped>
.wrapper {
    color: rgba(255, 255, 255, 1);
    font-size: 40px;
    text-align: left;

    .drink-title {
        position: relative;
        .title-left{
            font-weight: 700;
        }
        .title-right {
            position: absolute;
            right: 0;
            bottom: 0px;
            font-size: 28px;
        }
    }
    .drink-content{
        margin: 35px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .class-name{
            font-size: 16px;
            width: 10%;
        }
        .progress{
            width: 70%;
        }
        .drink-num{
            font-size: 16px;
            width: 10%;
            color: rgba(102, 187, 249, 1);
        }
    }
}
</style>