<template>
    <div class="eat-item-box">
        <div class="eat-index">{{ eatData.index }}</div>
        <img :src="eatData.pictureUrl" alt="">
        <div class="e-t-content">
            <div class="c-top">
                <div class="name">{{eatData.studentName}}</div>
                <div class="num" v-if="sport">运动时长：{{ eatData.cdNum }} 小时</div>
                <div class="num" v-else>{{ eatData.cdNum }}次</div>
            </div>
            <div class="c-bottom">
                <el-progress  :stroke-width="10" :show-text="false" :percentage="100" 
                :color="index==0?'rgba(243, 90, 76, 1)':(index==1?'rgba(234, 156, 71, 1)':'rgba(62, 205, 126, 1)')"
                >
                </el-progress>
            </div>
            
        </div>
    </div>
</template>
<script>

export default {
    name: "EatItem",
    components: { },
    props: {
        eatData: {
            type: Object,
            default: () => {
                return {}
            }
        },
        index: {
            type: Number,
            default: () => {
                return 0
            }
        },
        sport: {
            type: Boolean,
            default: false
        },
        
    },
    data() {
        return {
            
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
.eat-item-box {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 102, 153, 0.5);
    border-radius: 10px;
    padding: 0 20px;
    margin-bottom: 7px;
    font-size: 16px;
    color: #fff;
    .eat-index{
        width: 50px;
        font-size: 28px;
        font-weight: 700;
    }
    img{
        width: 30px;
        height: 30px;
    }
    .e-t-content{
        padding: 5px 0;
        margin-left: 16px;
        flex-grow: 1;
        height: 41px;
        .c-top{
            display: flex;
            justify-content: space-between;
        }
        .c-bottom{
         
        }
        
    }
   
}
</style>