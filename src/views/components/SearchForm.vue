<template>
    <div class="form-wrapper">
        <div class="form">
            <div class="form-item" v-if="gradeSearch">
                <div class="item-label">班段:</div>
                <div class="item-input">
                    <el-select v-model="searchData.gradeId" placeholder="请选择" size="small"
                        @change="handleGradeSelectChange">
                        <el-option v-for="item in grade" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="form-item" v-if="classSearch">
                <div class="item-label">班级:</div>
                <div class="item-input">
                    <el-select v-model="searchData.clazzGroupId" placeholder="请选择" size="small">
                        <el-option v-for="item in classOption" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="form-item" v-if="time">
                <div class="item-label">时间:</div>
                <div class="item-input">
                    <el-select v-model="searchData.timeLabel" placeholder="请选择" size="small" @change = 'handleTimeChange'>
                        <el-option v-for="item in timeOption" :key="item.label" :label="item.label" :value="item.label">
                        </el-option>
                    </el-select>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers('common');
export default {
    name: "SearchForm",
    props: { formVlaue: Object, classSearch: { type: Boolean, default: false }, gradeSearch: { type: Boolean, default: false }, time: { type: Boolean, default: false } },
    model: {
        prop: 'formVlaue',
        event: 'change'
    },
    data() {
        return {
            searchData: {},
        }
    },
    watch: {
        searchData: {
            handler(value) {
                this.$emit('change', value)
            },
            immediate: true,
            deep: true
        },
        formVlaue: {
            handler(newValue) {
                if (newValue) {
                    for (const key in newValue) {
                        console.log(newValue[key],'newValue[key]newValue[key]');
                        this.$set(
                            this.searchData,
                            key,
                            newValue[key]
                        )
                    }
                }
            },
            immediate: true,
            deep: true
        }
    },
    computed: {
        ...mapState({
            class: (state) => state.class,
            grade: (state) => state.grade,
        }),
        classOption() {
            return this.class[this.searchData.gradeId]
        },
        timeOption() {
            return this.handleTime()
        }
    },
    mounted() {
        this.initDict()
    },
    methods: {
        ...mapActions(["GET_GRADE", "GET_CLASS"]),
        initDict() {
            console.log(this.mapActions);
            this.GET_GRADE()
        },
        handleGradeSelectChange() {
            if(this.searchData.clazzGroupId){
                this.searchData.clazzGroupId = ''
            }
            this.GET_CLASS(this.searchData.gradeId)
        },
        handleTime() {

            // 本日时间戳范围
            const startOfToday = new Date(new Date().setHours(0, 0, 0, 0)).getTime();
            const endOfToday = new Date(new Date().setHours(23, 59, 59, 999)).getTime();

            // 本周时间戳范围
            const startOfWeek = new Date(new Date().setHours(0, 0, 0, 0) - (new Date().getDay() - 1) * 24 * 60 * 60 * 1000).getTime();
            const endOfWeek = new Date(new Date().setHours(23, 59, 59, 999) + (7 - new Date().getDay()) * 24 * 60 * 60 * 1000).getTime();

            // 本月时间戳范围
            const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime();
            const endOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0, 23, 59, 59, 999).getTime();

            // 本季度时间戳范围
            const currentMonth = new Date().getMonth();
            const startOfQuarter = new Date(new Date().getFullYear(), Math.floor(currentMonth / 3) * 3, 1).getTime();
            const endOfQuarter = new Date(new Date().getFullYear(), Math.floor(currentMonth / 3) * 3 + 3, 0, 23, 59, 59, 999).getTime();

            // 本年时间戳范围
            const startOfYear = new Date(new Date().getFullYear(), 0, 1).getTime();
            const endOfYear = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59, 999).getTime();

            const timeRanges = [
                { label: '本日', value: [startOfToday, endOfToday] },
                { label: '本周', value: [startOfWeek, endOfWeek] },
                { label: '本月', value: [startOfMonth, endOfMonth] },
                { label: '本季度', value: [startOfQuarter, endOfQuarter] },
                { label: '本年', value: [startOfYear, endOfYear] },
            ];

            return timeRanges;
        },
        handleTimeChange(context){
            console.log(context,'context');
            this.searchData.timeValue = this.handleTime().find(item => item.label === context).value
        }
    }

}
</script>
  
<style lang="less" scoped>
.form-wrapper {
    width: 100%;

    .form {
        display: flex;
        gap: 16px;

        .form-item {
            display: flex;
            align-items: center;

            .item-label {
                font-size: 14px;
                margin-right: 8px;
            }

            .item-input {
                width: 120px;
            }
        }
    }
}
</style>