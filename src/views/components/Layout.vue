<template>
    <div class="layout-wrapper">
        <div class="layout-left">
            <slot name="left"></slot>
        </div>
        <div class="layout-center-bottom">
            <slot name="mid"></slot>
        </div>
        <div class="layout-right">
            <slot name="right"></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Layout",
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
  
<style lang="less" scoped>
.layout-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    align-items: flex-end;
    gap: 25px;
    padding: 100px 50px 50px;

    .layout-left {
        width: 550px;
        height: 100%;
        box-sizing: border-box;
        /deep/.panel-wrapper:not(:last-child){
            margin-bottom: 16px;
        }

    }
    .layout-center-bottom{
        width: 700px;
        height: 250px;
        margin-bottom: 30px;
    }
    .layout-right {
        width: 550px;
        height: 100%;
        box-sizing: border-box;
        /deep/.panel-wrapper:not(:last-child){
            margin-bottom: 16px;
        }
    }

}</style>