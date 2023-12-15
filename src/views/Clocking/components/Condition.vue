<template>
    <div class="wrapper">
        <div class="header">
            <SearchForm gradeSearch classSearch v-model="formVlaue" />
        </div>
        <div class="content">
            <!-- -------内容 -->
            <div class="content-item">
                <div class="item-header">
                    <div class="item-header-left">正常出勤</div>
                    <div class="item-header-left">29</div>
                </div>
                <div class="item-content">
                    <!-- 进度条 -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getAttendschoolCondition } from "@/service/baseInfo.js";
export default {
    name: "Condition",
    data() {
        return {
            chartData: {},
            formVlaue: {
                gradeId: 'all',
                clazzGroupId: '',
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
            const data = await getAttendschoolCondition({...this.formVlaue})
            if (data) {
                // 处理 数据
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