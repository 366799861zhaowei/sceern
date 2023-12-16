<template>
    <div class="base-wrapper">
        <div class="base-title">优禾悦幼儿全息数据画像</div>
        <div class="base-border"></div>
        <div class="base-mind">
            <div class="base-mind-bg line"></div>
            <div class="base-mind-bg point"></div>
            <div class="base-mind-bg item"  :style="{ transform: `translate(-50%,-50%) rotate(${tabsIndex * 45}deg)` }"></div>
            <div class="base-item-wrapper">
                <div class="base-item" v-for="(item, index) in mindOtpion" :key="index"
                    :style="{ transform: `translateX(-50%) rotate(${22 + (index * 45)}deg)` }" @click="handleChangeTab(item.value,index)">{{ item.label }}</div>
            </div>
            <div class="base-mind-bg base-mind-center">
                <div class="base-mind-center-num">{{ total.total }}</div>
                <div class="base-mind-center-label">全员人数</div>
            </div>
        </div>
        <Food v-if="tabsValue ==='food'"/>
        <Clocking v-if="tabsValue ==='clocking'"/>
        <Life v-if="tabsValue ==='life'"/>
        <!-- <Sport v-if="tabsValue ==='sport'"/> -->
        <Area v-if="tabsValue ==='area'"/>
    </div>
</template>
  
<script>
import { mindCircleLabel } from "./config.js";
import Food from '@/views/Food/index.vue'
import Clocking from '@/views/Clocking/index.vue'
import Life from '@/views/Life/index.vue'
import Sport from '@/views/Sport/index.vue'
import Area from '@/views/Area/index.vue'
import { getTotal } from "@/service/baseInfo.js";
export default {
    name: "index",
    components:{Food,Clocking,Life,Area},
    data() {
        return {
            tabsValue:'food',
            tabsIndex:-1,
            total:0
        }
    },
    computed: {
        mindOtpion() {
            return mindCircleLabel.call(this)
        }
    },
    created(){
        this.GET_CLASS('all')
    },
    mounted() {
        this.initCount()
    },
    methods: {
        handleChangeTab(val,index){
            this.tabsValue = val
            this.tabsIndex = index-1
        },
        async initCount(){
            const data = await getTotal()
            if(data){
                this.total = data
            }
        }
    },

}
</script>
  
<style lang="less" scoped>
.base-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background-image: url(~@/assets/home__bg.png), url(~@/assets/home__border.png);
    background-size: 100%;
    background-repeat: no-repeat;

    //标题 
    .base-title {
        background-image: url(~@/assets/home__title.png);
        width: 1649px;
        height: 100px;
        background-size: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        font-size: 38px;
        line-height: 70px;
        color: #fff;
        font-family: "微软雅黑-400";
    }

    //边框
    .base-border {
        background-image: url(~@/assets/home__border.png);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-size: 100%;
        background-repeat: no-repeat;
    }

    //中心区域
    .base-mind {
        width: 700px;
        height: 700px;
        position: absolute;
        top: 43%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url(~@/assets/home__circle__bg.png);
        background-size: 657px 658px;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 99999;
        .base-mind-bg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-size: 100%;
            background-repeat: no-repeat;
        }

        .line {
            width: 532px;
            height: 533px;
            background-image: url(~@/assets/home__circle__line.png);
        }

        .point {
            width: 542px;
            height: 387px;
            background-image: url(~@/assets/home__circle__point.png);
        }

        .item {
            width: 466px;
            height: 466px;
            background-image: url(~@/assets/home__circle__item.png);
            transform-origin: 50% 50%;
            transition: transform 0.3s;
        }

        .base-item-wrapper {
            width: 466px;
            height: 466px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            .base-item {
                color: #fff;
                font-size: 24px;
                font-family: Arial-700;
                width: 144px;
                height: 233px;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                transform-origin: 50% bottom;
                text-align: center;
                line-height: 60px;
                cursor: pointer;

            }
        }

        .base-mind-center {
            width: 288px;
            height: 234px;
            background-image: url(~@/assets/home__circle__mind.png);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 36px;
            color: #fff;
            font-family: Arial-regular;
        }
    }
}</style>