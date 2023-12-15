<template>
    <div class="componten-wrapper">
        <Layout>
            <template #left>
                <div>
                    <Panel title="出入园时间">
                        <Time />
                    </Panel>
                    <Panel title="出勤率统计">
                        <Rate />
                    </Panel>
                    <Panel title="出勤情况统计">
                        <Condition />
                    </Panel>
                </div>
            </template>
            <template #mid>
                <div class="child-num">
                    <div class="c-n-item">
                        <div class="item-title">
                            应出勤人数 (人)
                        </div>
                        <div class="item-num-box">
                            <div class="string-item" v-for="(item,index) in count.studentNum ?? '000'" :key="index">
                                {{ item }}
                            </div>
                        </div>
                    </div>
                    <div class="c-n-item color">
                        <div class="item-title">
                            实际勤人数 (人)
                        </div>
                        <div class="item-num-box">
                            <div class="string-item color" v-for="(item,index) in count.attendNum ?? '000'" :key="index">
                                {{ item }}
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template #right>
                <div>
                    <Panel title="今日实到人数列表">
                        <List />
                    </Panel>
                    <Panel title="校园性别比例">
                        <Sex />
                    </Panel>
                    <Panel title="各年级人数比例">
                        <Number />
                    </Panel>
                </div>
            </template>
        </Layout>
    </div>
</template>
  
<script>
import Time from './components/Time';
import Rate from './components/Rate';
import Condition from './components/Condition';
import List from './components/List';
import Sex from './components/Sex';
import Number from './components/Number';
import { getAttendschoolNumberCount } from "@/service/baseInfo.js";
export default {
    name: "Food",
    components: { Time, Rate, Condition,List,Sex,Number },
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