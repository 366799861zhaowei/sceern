<template>
    <div class="time-besic">
        <div class="t-b-content">
            <div class="c-title">
                入园时间
            </div>
            <div class="c-time">
                8: 00
            </div>
        </div>
        <div class="t-b-centen"></div>
        <div class="t-b-content">
            <div class="c-title">
                入园时间
            </div>
            <div class="c-time">
                16: 20
            </div>
        </div>
    </div>
</template>
  
<script>


export default {
    name: "time",
    components:{},
    data() {
        return {
            
        }
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
    .time-besic{
        
        display: flex;
        justify-content: space-around;
        .t-b-centen{
            width: 1px;
            height: 100px;
            background-color: rgba(121, 121, 121, 1);
            // border: 1px solid rgba(121, 121, 121, 1);

        }
        .t-b-content{
            box-sizing:border-box;
            padding: 5px 10px;
            width: 190px;
            height: 100px;
            color: rgba(255, 255, 255, 1);
            background-color: rgb(5, 16, 31);;
            font-size: 16px;
            text-align: center;
            .c-title{
                
            }
            .c-time{
                font-size: 48px;
            }

        }
    }
    
</style>