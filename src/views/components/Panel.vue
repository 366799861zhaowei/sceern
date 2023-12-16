<template>
    <div class="panel-wrapper">
        <div class="panel-title">
            <div class="title-context">{{ title }}</div>
            <div class="title-right">
                <slot name="right"></slot>
            </div>
            </div>
        <div class="panel-mind">
            <slot></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Panel",
    props:{title:String,titleRight:String},
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
.panel-wrapper{
    width: 100%;
    height: 100%;
    position: relative;
    background-color: rgba(12, 148, 226, 0.1);
    padding-top: 24px;
    border-radius: 8px;
    .panel-title{
        height: 67px;
        width: 100%;
        background-image: url(~@/assets/panel__title.png);
        background-size: 100%;
        position: absolute;
        top: -24px;
        font-size: 24px;
        color: #fff;
        text-align: center;
        line-height: 77px;
        .title-right{
            font-size: 18px;
            position: absolute;
            right: 24px;
            top: 24px;
        }
    }
    .panel-mind{
        width: 100%;
        padding: 24px;
        box-sizing: border-box;
    }
}
</style>