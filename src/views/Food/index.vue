<template>
    <div class="componten-wrapper">
        <Layout>
            <template #left>
                <div>
                    <Panel title="用餐人数统计">
                        <PeopelNum></PeopelNum>
                    </Panel>
                    <Panel title="每日膳食营养摄入量">
                        <Nutrition/>
                    </Panel>
                    <Panel title="过敏源统计"></Panel>
                </div>
            </template>
        </Layout>
    </div>
</template>
  
<script>
import PeopelNum from './components/PeopelNum';
import Nutrition from './components/Nutrition';
export default {
    name: "Food",
    components: { PeopelNum,Nutrition },
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