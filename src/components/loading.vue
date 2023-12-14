<template>
    <van-popup
        v-model="show"
        :style="{ width: '100px', borderRadius: '10px', lineHeight: '50px', paddingTop: '20px' }"
    >
        <van-loading vertical color="#0094ff">加载中...</van-loading>
    </van-popup>
</template>

<script>
import { Loading, Popup } from "vant";
export default {
    name: "loading",
    props: {
        show: Boolean
    },
    components: {
        [Loading.name]: Loading,
        [Popup.name]: Popup
    },
    methods: {

    },
    data () {
        return {
        };
    }
};
</script>
