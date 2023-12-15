<template>
    <div class="wrapper">
        <div class="header">
            <SearchForm gradeSearch  v-model="formVlaue" />
        </div>
        <div class="content">
        </div>
    </div>
</template>
<script>
import { getVision } from "@/service/baseInfo.js";
export default {
    name: "SightCondition",
    components: {  },
    data() {
        return {
            chartData: {},
            formVlaue: {
                gradeId: 'all',
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
            const data = await getVision({ id:this.formVlaue.gradeId})
            if (data) {
                console.log(data,'getVision');
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