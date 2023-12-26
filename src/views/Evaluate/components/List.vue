<template>
    <div class="wrapper">
        <div class="content">
            <CommonBar :data="chartData" more></CommonBar>
        </div>
    </div>
</template>
<script>
import { getEtiquettepoliteAndSelf } from "@/service/baseInfo.js";
import CommonBar from '@/views/components/CommonBar.vue'
export default {
    name: "List",
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
            const data = await getEtiquettepoliteAndSelf()
            if (data) {
                this.chartData = {
                    x: data.map(item => item.monthStr),
                    y: [
                        {name:'自理能力人数',type:'bar',value:data.map(item => item.selfNum)},
                        {name:'文明礼仪人数',type:'bar',value:data.map(item => item.etiquettePoliteNum)},
                    ]
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
        height: 200px;
    }
}
</style>