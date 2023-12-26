<template>
    <div class="componten-wrapper">
        <Layout>
            <template #left>
                <div>
                    <Panel title="学科介绍">
                        <Subject />
                    </Panel>
                </div>
            </template>
            <template #right>
                <div>
                    <Panel title="教师介绍">
                        <Teacher /> 
                    </Panel>
                    <Panel title="报名人数统计">
                        <Count /> 
                    </Panel>
                </div>
            </template>
        </Layout>
    </div>
</template>
  
<script>
import Subject from './components/Subject';
import Teacher from './components/Teacher';
import Count from './components/Count';
// import StandardCondition  from './components/StandardCondition ';
// import SightCondition from './components/SightCondition';
// import Weather from './components/Weather';
// import DrinkSituation from './components/DrinkSituation';
// import Sleep from './components/Sleep';
// import Shit from './components/Shit';
export default {
    name: "Num",
    components: { Teacher,Subject,Count},
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