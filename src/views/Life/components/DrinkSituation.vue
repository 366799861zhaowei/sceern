<template>
    <div class="wrapper">
        <div class="drink-title">
            <div class="title-left">标准饮水 800 ml</div>
            <div class="title-right">达标情况</div>
        </div>
        <div class="drink-content" v-for="(item,indexx) in testList" :key="indexx">
                <div class="class-name">{{item.name}}</div>
                <div class="progress">
                    <el-progress  :stroke-width="number" :show-text="false" :percentage="item.rade" color="rgba(136, 250, 200, 1)"
                    >
                    </el-progress>
                </div>
                
                <div class="drink-num">{{ item.num }}</div>
        </div>
    </div>
</template>
<script>

export default {
    name: "DrinkSituation",

    data() {
        return {
            number:10,
            testList:[
                {
                    name:'托班段',
                    num:'18人',
                    rade:18,
                },
                {
                    name:'小班段',
                    num:'91人',
                    rade:91,
                },
                {
                    name:'中班段',
                    num:'80人',
                    rade:80,
                },
                {
                    name:'大班段',
                    num:'84人',
                    rade:84,
                },
            ]
        }
    },
    watch: {
    },
    computed: {
    },
    mounted() {

    },
    methods: {

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