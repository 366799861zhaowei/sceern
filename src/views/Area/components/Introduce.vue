<template>
    <div class="wrapper">
        <div class="header">
            <div class="header-item" v-for="(item, index) in tabConfig" :key="index"
                :class="{ active: tabValue === item.label }" @click="handleChangeTab(item.label)">{{ item.label }}</div>
        </div>
        <div class="content">
            <div class="content-item-wrapper" v-for="(item,index) in tabContent" :key="index">
                <div class="content-item" v-if="item.label == tabValue">
                    <div class="item-text">{{item.text}}</div>
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
            a:'111',
            tabContent: [
                {
                    label: '美工区',
                    text: '定义：培养幼儿的创造力和想象力创造力；观察力和细致耐心；对美的认知和欣赏能力。促进幼儿的社交和合作能力。',
                    src: 'sadasdadasdasdasd'
                },
                {
                    label: '阅读区',
                    text: '定义：通过提供多种图书材料，发展幼儿的想象能力和思维能力。',
                    src: 'sadasdadasdasdasd'
                },
                {
                    label: '构建区',
                    text: '定义：尝试运用不同的材料进行建构，提升空间想象力、创造力和合作能力。',
                    src: 'sadasdadasdasdasd'
                },
                {
                    label: '科学区',
                    text: this.a+ '/n' + this.a,
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
    font-size: 20px;
        color: #fff;
        margin-bottom: 16px;
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
        // height: 200px;
        color: rgba(255, 255, 255, 1);
        background-color: rgb(5, 16, 31);
        ;
        font-size: 24px;
        text-align: left;
        line-height: 24px;
    }
}</style>