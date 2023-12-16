<template>
    <div class="componten-wrapper">
        <Layout>
            <template #left>
                <div>
                    <Panel title="用餐人数统计">
                        <PeopelNum></PeopelNum>
                    </Panel>
                    <Panel title="每日膳食营养摄入量">
                        <Nutrition />
                    </Panel>
                    <Panel title="过敏源统计">
                        <Allergy />
                    </Panel>
                </div>
            </template>
            <template #mid>
                <!-- <Panel title="膳食营养分析"> -->
                    <Analys />
                <!-- </Panel> -->
            </template>
            <template #right>
                <div>
                    <Panel title="光盘子小达人排名">
                        <EatUpRank></EatUpRank>
                    </Panel>
                    <Panel title="光盘小达人">
                        <EatUp />
                    </Panel>
                </div>
            </template>
        </Layout>
    </div>
</template>
  
<script>
import PeopelNum from './components/PeopelNum';
import Nutrition from './components/Nutrition';
import Allergy from './components/Allergy';
import Analys from './components/Analys';
import EatUpRank from './components/EatUpRank';
import EatUp from './components/EatUp';
export default {
    name: "Food",
    components: { PeopelNum, Nutrition, Allergy, Analys,EatUpRank,EatUp },
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