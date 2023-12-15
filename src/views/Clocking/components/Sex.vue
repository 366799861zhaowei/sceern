<template>
    <div class="wrapper">
        <div class="content">
            <Pie :data="chartData"></Pie>
        </div>
    </div>
</template>
<script>
import { getAttendschoolSex } from "@/service/baseInfo.js";
import Pie from '@/views/components/Pie.vue'
export default {
    name: "Sex",
    components: { Pie },
    data() {
        return {
            chartData: [],
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
            const data = await getAttendschoolSex()
            if (data) {
                let arr = []
                data.forEach(item => {
                    arr.push({ ...item, name: item.type === 1? '男': '女' ,value:item.studentNum})
                })
                this.chartData = arr
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