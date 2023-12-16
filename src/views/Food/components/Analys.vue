<template>
    <div class="wrapper">
        <Panel title="膳食营养分析">
            <div class="header">
                <div class="item-wrapper">
                    <div class="item" v-for="(item,index) in option" :key="index" @click="handleChange(item.value)">{{ item.label }}</div>
                </div>
            </div>
            <div class="content" v-if="visible">
                <Liquid v-for="(item, index) in chartData" :key="item.foodTypeId" :id="item.foodTypeId" :percentData="item.value/total" :nameData="item.foodTypeCn"></Liquid>
            </div>
        </Panel>

    </div>
</template>
<script>
import { getFoodAnylise } from "@/service/baseInfo.js";
import Liquid from '@/views/components/Liquid.vue'
export default {
    name: "PeopleNum",
    components: { Liquid },
    data() {
        return {
            chartData: [],
            originData: {},
            option:[
                {label:"热量来源分布",value:'energy'},
                {label:"蛋白质来源分布",value:'protein'},
                {label:"脂肪来源分布",value:'fat'},
            ],
            value:'energy',
            visible:true,
        }
    },
    watch: {

    },
    computed: {
        total(){
            let num = 0 
            this.chartData.forEach(item=>{
                num += item.value
            })
            return num
        }
    },
    mounted() {
        this.getCount()
    },
    methods: {
        async getCount() {
            const data = await getFoodAnylise({ ...this.formVlaue })
            if (data) {
                this.originData = data
                this.chartData = data[this.option[0].value]
            }
        },
        handleChange(val){
            console.log(val,this.originData[val],'val');
            this.visible= false
            this.$set(this.chartData,this.originData[val])
            setTimeout(()=>{
                this.visible = true
            },0)

            // this.chartData = this.originData[val]
        }
    },


}
</script>
  
<style lang="less" scoped>
.wrapper {
    width: 100%;
    height: 100%;
    .header{
        .item-wrapper{
            display: flex;
            justify-content: flex-end;
            .item{
                height: 16px;
                width: fit-content;
                padding: 5px;
                font-size: 12px;
                line-height: 16px;
                color:  rgba(12, 178, 224, 1);
                border: 1px solid  rgba(12, 178, 224, 1);
                cursor: pointer;
            }
        }
    }
    .content {
        width: 100%;
        height: 160px;
        display: flex;
    }
}
</style>