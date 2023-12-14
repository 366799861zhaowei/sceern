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
                <div>
                    应出勤人数
                </div>
            </template>
        </Layout>
    </div>
</template>
  
<script>
import Time from './components/Time';
import Rate from './components/Rate';
import Condition from './components/Condition';
export default {
    name: "Food",
    components: { Time, Rate, Condition },
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
  
<style lang="less" scoped></style>