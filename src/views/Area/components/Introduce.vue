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
                { label: '益智区' },
                { label: '建构区' },
                { label: '阅读区' },
                { label: '生活区' },
                { label: '科学区' },
            ],
            tabValue: '美工区',
            // a:'111',
            tabContent: [
                {
                    label: '美工区',
                    text: '培养幼儿的创造力和想象力创造力；观察力和细致耐心；对美的认知和欣赏能力。促进幼儿的社交和合作能力。',
                    src: require("@/assets/area__1.png")
                },
                {
                    label: '益智区',
                    text: '培养幼儿的观察力、注意力逻辑、思维能力、空间想象、构建能力、语言表达能力',
                    src: require("@/assets/area__2.png")
                },
                {
                    label: '建构区',
                    text: '尝试运用不同的材料进行建构，提升空间想象力、创造力和合作能力。',
                    src: require("@/assets/area__3.png")
                },
                {
                    label: '阅读区',
                    text: '通过提供多种图书材料，发展幼儿的想象能力和思维能力。',
                    src: require("@/assets/area__4.png")
                },
                {
                    label: '生活区',
                    text: '养成良好的生活习惯及卫生习惯，有基本的生活自理能力;指导一定的安全保健常识，学会保护自己',
                    src: require("@/assets/area__5.png")
                },
                {
                    label: '科学区',
                    text: '对自然和科学现象感兴趣，有好奇心和探究欲望;学习运用多种感官感知事物现象，发展观察力;活跃思维，发展分析、判断和推理能力;提供尝试、探究、实验的机会，通过实地操作，发现问题，提高解决问题的能力。',
                    src: require("@/assets/area__6.png")
                },

                
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
        color: rgba(255, 255, 255, 1);
        background-color: rgb(5, 16, 31);
        font-size: 24px;
        text-align: left;
        line-height: 24px;
        .content-item-wrapper{
            .content-item{
                height: 300px;
                padding: 15px;
                background-color: rgba(2, 167, 240, 1);
                border-radius: 10px;
                overflow-y: auto;
                .item-text{
                    color: rgba(51, 51, 51, 1);
                    margin-bottom: 10px;
                }
                .item-img{
                    width: 100%;
                    height: 200px;
                    background-size: 100%;
                }
            }
        }
    }
}</style>