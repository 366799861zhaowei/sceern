<template>
    <div class="componten-wrapper">
        <Layout>
            <template #left>
                <div>
                    <Panel title="安全赋能文化介绍">
                        <Introduce />
                    </Panel>
                    <Panel title="安全教育内容">
                        <Content />
                    </Panel>
                </div>
            </template>
            <template #mid>
                <Panel title="安全教育次数统计/安全教育形式">
                    <Count />
                </Panel>
            </template>
            <template #right>
                <div>
                    <Panel title="安全知识我知道">
                        <Know /> 
                    </Panel>
                    <Panel title="园区危险区域">
                        <Dangerous /> 
                    </Panel>
                    <Panel title="校车实时路线">
                        <Bus /> 
                    </Panel>
                </div>
            </template>
        </Layout>
    </div>
</template>
  
<script>
import Content from './components/Content';
import Introduce from './components/Introduce';
import Dangerous from './components/Dangerous';
import Know from './components/Know';
import Bus from './components/Bus';
import Count from './components/Count';
export default {
    name: "Num",
    components: { Introduce,Content,Dangerous,Know,Bus,Count},
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