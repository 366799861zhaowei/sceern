<template>
    <div class="wrapper">
        <div class="header">
            <div class="header-item" v-for="(item, index) in tabConfig" :key="index"
                :class="{ active: tabValue === item.label }" @click="handleChangeTab(item.label)">{{ item.label }}</div>
        </div>
        <div class="content">
            <div class="content-item-wrapper" v-for="(index, item) in tabContent" :key="index">
                <div class="content-item" v-if="item.label === tabValue">
                    <div class="item-text">{{ item.text }}</div>
                    <img class="item-img" :src="item.src"/>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Introduce",
    components: {},
    data() {
        return {
            tabConfig: [
                { label: '美工区' },
                { label: '阅读区' },
                { label: '构建区' },
                { label: '科学区' },
            ],
            tabValue: '美工区',
            tabContent: [
                {
                    label: '美工区',
                    text: '111111111111111111111111111111',
                    src: 'sadasdadasdasdasd'
                },
                {
                    label: '阅读区',
                    text: '111111111111111111111111111111',
                    src: 'sadasdadasdasdasd'
                },
                {
                    label: '构建区',
                    text: '111111111111111111111111111111',
                    src: 'sadasdadasdasdasd'
                },
                {
                    label: '科学区',
                    text: '111111111111111111111111111111',
                    src: 'sadasdadasdasdasd'
                }
            ]
        }
    },
    computed: {

    },
    mounted() {
    },
    methods: {
        handleChangeTab(val) {
            this.tabValue = val
        }
    }

}
</script>
  
<style lang="less" scoped>
.wrapper {
    width: 100%;

    .header {
        width: 100%;
        height: 32px;
        color: #fff;
        font-size: 18px;
        display: flex;
        gap: 8px;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 16px;

        .header-item {
            width: 100%;
            height: 100%;
            text-align: center;
            border-radius: 8px;
            line-height: 32px;
            cursor: pointer;

            &.active {
                background-color: rgb(7, 72, 164);
            }
        }
    }

    .content {
        width: 100%;
        height: 200px;
        color: rgba(255, 255, 255, 1);
        background-color: rgb(5, 16, 31);
        ;
        font-size: 44px;
        text-align: center;
        line-height: 100px;
    }
}</style>