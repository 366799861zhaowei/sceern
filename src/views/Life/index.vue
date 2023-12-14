<template>
    <div class="componten-wrapper">
        <Layout>
            <template #left>
                <div>
                    <Panel title="身高体重标准值">
                        <Standard />
                    </Panel>
                    <Panel title="身高体重达标情况">
                        <StandardCondition  />
                    </Panel>
                    <Panel title="视力达标请款">
                        <SightCondition />
                    </Panel>
                </div>
            </template>
            <template #mid>
                <div>
                    <Weather/>
                </div>
            </template>
            <template #right>
                <div>
                    <Panel title="饮水情况">
                        <DrinkSituation /> 
                    </Panel>
                    <Panel title="午休">
                        <Sleep /> 
                    </Panel>
                    <Panel title="大便">
                        <Shit /> 
                    </Panel>
                </div>
            </template>
        </Layout>
    </div>
</template>
  
<script>
import Standard from './components/Standard';
import StandardCondition  from './components/StandardCondition ';
import SightCondition from './components/SightCondition';
import Weather from './components/Weather';
import DrinkSituation from './components/DrinkSituation';
import Sleep from './components/Sleep';
import Shit from './components/Shit';
export default {
    name: "Life",
    components: { Standard, StandardCondition , SightCondition,Weather,DrinkSituation ,Sleep,Shit},
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