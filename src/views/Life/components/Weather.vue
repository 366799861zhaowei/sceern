<template>
    <div class="wrapper">
        <div class="weather-item purple">
            <div class="icon-img"><i class="el-icon-sunny"></i></div>
            <div class="weather-item-right">
                <div class="item-num">{{ count.airTemperature || '0' }}</div>
                <div class="item-name">日均气温</div>
            </div>
        </div>
        <div class="weather-item blue">
            <div class="icon-img"><i class="el-icon-link"></i></div>
            <div class="weather-item-right">
                <div class="item-num">{{ count.humidity || '0' }}</div>
                <div class="item-name">相对湿度</div>
            </div>
        </div>
        <div class="weather-item green">
            <div class="icon-img"><i class="el-icon-partly-cloudy"></i></div>
            <div class="weather-item-right">
                <div class="item-num">{{ count.airQuality || '0' }}</div>
                <div class="item-name">空气质量</div>
            </div>
        </div>
    </div>
</template>
<script>
import { getWeather } from "@/service/baseInfo.js";
export default {
    name: "Weather",

    data() {
        return {
            count:{}
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
            const data = await getWeather()
            if (data) {
                this.count = data
            }
        }
    }

}
</script>
  
<style lang="less" scoped>
.wrapper {
    margin-top: 20px;
    color: rgba(255, 255, 255, 1);
    font-size: 36px;
    text-align: center;
    display: flex;
    justify-content: space-between;

    .weather-item {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 210px;
        height: 96px;
        border-radius: 3px;

        // background-color: red;
        &.purple {
            background-color: rgba(149, 142, 255, 1);
        }

        &.blue {
            background-color: rgba(134, 187, 255, 1);
        }

        &.green {
            background-color: rgba(102, 255, 255, 1);
        }

        .icon-img {
            font-size: 60px;
        }

        .item-name {
            font-size: 22px;
            // margin-right: 20px;
        }
    }
}</style>