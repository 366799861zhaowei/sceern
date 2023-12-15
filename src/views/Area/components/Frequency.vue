<template>
    <div class="wrapper">
        <div class="header">
            <SearchForm gradeSearch classSearch time v-model="formVlaue" />
        </div>
        <div class="content">
            <!-- -------内容 -->
            <div class="content-item">
                <div class="item-img">图片</div>
                <div class="item-label">
                    <div class="label-top">大一班</div>
                    <div class="label-bottom">王子</div>
                </div>
                <div class="item-process"></div>
                <div class="item-num">80</div>
            </div>
        </div>
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
                console.log(data,'getAreaFrequency');
            }
        }
    }

}
</script>
  
<style lang="less" scoped>
.wrapper {
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
        height: 200px;
    }
}
</style>