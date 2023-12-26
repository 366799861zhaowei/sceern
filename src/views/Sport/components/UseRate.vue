<template>
    <div class="wrapper">
        <div class="content">
            <CommonBar cross :data="chartData"></CommonBar>
        </div>
    </div>
</template>
<script>
import { getUsage } from "@/service/baseInfo.js";
import CommonBar from '@/views/components/CommonBar.vue'
export default {
    name: "UseRate",
    components: { CommonBar },
    data() {
        return {
            chartData: {},
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
            const data = await getUsage()
            if (data) {
                console.log(data,'----------s');
                this.chartData = {
                    x: data.map(item => item.typeName),
                    y: data.map(item => item.percentage)
                }
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
        height: 300px;
    }
}
</style>