<template>
    <div class="wrapper">
    </div>
</template>
<script>
import { getStandardBody } from "@/service/baseInfo.js";
export default {
    name: "Standard",

    data() {
        return {
        }
    },
    watch: {
    },
    computed: {
    },
    mounted() {
        this.getCount()
    },
    methods: {
        async getCount() {
            const data = await getStandardBody()
            if (data) {
                console.log(data, 'Standarddata----------');
            }
        }
    }

}
</script>
  
<style lang="less" scoped>
.wrapper {
}
</style>