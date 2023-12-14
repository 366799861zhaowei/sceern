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
        </Layout>
    </div>
</template>
  
<script>
import Standard from './components/Standard';
import StandardCondition  from './components/StandardCondition ';
import SightCondition from './components/Condition';
import Weather from './components/Weather';
export default {
    name: "Life",
    components: { Standard, StandardCondition , SightCondition,Weather },
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