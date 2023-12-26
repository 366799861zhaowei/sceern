<template>
    <div class="componten-wrapper">
        <Layout>
            <template #left>
                <div>
                    <Panel title="礼仪礼貌次数">
                        <Num />
                    </Panel>
                    <Panel title="自理能力">
                        <Oneself />
                    </Panel>
                    <Panel title="集中活动">
                        <Condition />
                    </Panel>
                </div>
            </template>
            <template #mid>
                <Panel title="">
                        <List />
                    </Panel>
            </template>
            <template #right>
                <div>
                    <Panel title="四方协同 ·  美好成长">
                        <Four />
                    </Panel>
                </div>
            </template>
        </Layout>
    </div>
</template>
  
<script>
import Num from './components/Num';
import Oneself from './components/Oneself';
import Condition from './components/Condition';
import List from './components/List';
import Sex from './components/Sex';
import Number from './components/Number';
import Four from './components/Four';
import { getAttendschoolNumberCount } from "@/service/baseInfo.js";
export default {
    name: "Evaluate",
    components: { Num, Oneself, Condition,List,Sex,Number,Four },
    data() {
        return {
            count:{}
        }
    },
    computed: {

    },
    mounted() {
        this.getCount()
    },
    methods: {
        async getCount() {
            const data = await getAttendschoolNumberCount({gradeId:'all'})
            if (data) {
                console.log(data,'------------------data');
                this.count = data
            }
        }
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