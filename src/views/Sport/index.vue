<template>
    <div class="componten-wrapper">
        <Layout>
            <template #left>
                <div>
                    <Panel title="开放时间">
                        <Time />
                    </Panel>
                    <Panel title="运动区域使用率">
                        <UseRate />
                    </Panel>
                    <Panel title="出勤情况统计">
                        <!-- <Condition /> -->
                    </Panel>
                </div>
            </template>
            <template #mid>
                <Panel title="全校运动分析">
                        <All />
                    </Panel>
            </template>
            <template #right>
                <div>
                    <Panel title="今日实到人数列表">
                        <!-- <List /> -->
                    </Panel>
                    <Panel title="出勤率统计">
                        <!-- <Rate /> -->
                    </Panel>
                    <Panel title="出勤情况统计">
                        <!-- <Condition /> -->
                    </Panel>
                </div>
            </template>
        </Layout>
    </div>
</template>
  
<script>
import Time from './components/Time';
import UseRate from './components/UseRate';
import All from './components/All';
// import List from './components/List';
export default {
    name: "Sport",
    components: { Time, UseRate, All },
    data() {
        return {
            test:'280'
        }
    },
    computed: {

    },
    mounted() {
    },
    methods: {

    }

}
</script>
  
<style lang="less" scoped>
    .child-num{
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        font-size: 30px;
        .c-n-item{
            width: 255px;
            height: 150px;
            color: rgba(0, 255, 252, 1);
            text-align: center;
            &.color{
                color: rgba(35, 154, 255, 1);;
            }
        }
        .item-title{
            margin-bottom: 10px;
        }
        .item-num-box{
            display: flex;
            justify-content: center;
            .string-item{
                color: #fff;
                font-size: 48px;
                font-weight: 700;
                padding: 2px 5px;
                background-color: rgba(0, 255, 252, 1);
                border-radius: 3px;
                margin: 0 7px;
                &.color{
                background-color: rgba(35, 154, 255, 1);;
            }
            }
        }
    }
</style>