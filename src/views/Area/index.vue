<template>
    <div class="componten-wrapper">
        <Layout>
            <template #left>
                <div>
                    <Panel title="区域介绍">
                        <Introduce />
                    </Panel>
                    <Panel title="当前区域学员">
                        <Trainee />
                    </Panel>
                </div>
            </template>
            <template #mid>
                <Panel title="区域活动分析">
                        <Anylise />
                    </Panel>
            </template>
            <template #right>
                <div>
                    <Panel title="区域累计使用排名">
                        <Rank />
                    </Panel>
                    <Panel title="区域累计使用频率">
                        <Frequency />
                    </Panel>
                </div>
            </template>
        </Layout>
    </div>
</template>
  
<script>
import Introduce from './components/Introduce';
import Trainee from './components/Trainee';
import Anylise from './components/Anylise';
import Rank from './components/Rank';
import Frequency from './components/Frequency';
export default {
    name: "Area",
    components: { Introduce, Trainee,Anylise,Rank ,Frequency},
    data() {
        return {
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