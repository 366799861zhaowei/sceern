<template>
    <div class="wrapper">
        <div class="header">
            <SearchForm gradeSearch v-model="formVlaue" />
        </div>
        <div class="content">
            <CommonBar :data="chartData" more></CommonBar>
        </div>
    </div>
</template>
<script>
import { getShit } from "@/service/baseInfo.js";
import CommonBar from '@/views/components/CommonBar.vue'
export default {
    name: "Shit",
    components:{CommonBar},
    data() {
        return {
            chartData:{},
            formVlaue: {
                gradeId: 'all'
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
    },
    methods: {
        async getCount() {
            const data = await getShit({clazzGroupId:'all'})
            if (data) {
                console.log(data,'getShit');
                this.chartData = {
                    x: data.map(item => item.clazzName),
                    y: [
                        {name:'正常',value:data.map(item => item.number)},
                        {name:'较稀',value:data.map(item => item.dilutedNumber)},
                        {name:'较硬',value:data.map(item => item.hardNumber)},
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
        display: flex;
        justify-content: space-around;
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