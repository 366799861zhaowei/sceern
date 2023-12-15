<template>
    <div class="wrapper">
        <div class="header">
            <SearchForm area v-model="formVlaue" />
        </div>
        <div class="pos-time">
            停留时长: 分钟
        </div>
        <div class="content">
            <div class="item" v-for="(item,index) in AreaPeopleList" :key="index">
                <img :src="item.pictureUrl" alt="">
                <div class="item-nane">
                    <div class="cla">{{ item.clazzGroupName }}</div>
                    <div class="name">{{ item.studentName }}</div>
                </div>
                <div class="rank">
                    <el-progress  :stroke-width="10" :show-text="false" :percentage="100" 
                        color="rgba(62, 205, 126, 1)"
                        >
                    </el-progress>
                </div>
                
                <div class="time">
                    {{ item.duration }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getAreaPeople } from "@/service/baseInfo.js";
export default {
    name: "Trainee",
    data() {
        return {
            chartData: {},
            formVlaue: {
                areaType: '美工区',
            },
            AreaPeopleList:[],
        }
    },
    watch: {
        formVlaue: {
            handler(value) {
                this.getCount()
            },
            immediate: true,
            deep: true
        },
    },
    computed: {
    },
    mounted() {
    },
    methods: {
        async getCount() {
            const data = await getAreaPeople({...this.formVlaue})
            if (data) {
                // 处理 数据
                this.AreaPeopleList = data
                console.log(data,'getAreaPeople');
            }
        }
    }

}
</script>
  
<style lang="less" scoped>
.wrapper {
    font-size: 20px;
        color: #fff;
        margin-bottom: 16px;
    position: relative;
    .pos-time{
        position: absolute;
        top: 10px;
        right: 20px;
    }
    .header {
        width: 100%;
        

        .header-item {
            display: flex;
            align-items: flex-end;

            .item-label {
                margin-right: 12px;
            }

            .item-context {
                font-size: 28px;
            }
        }
    }

    .content {
        width: 100%;
        height: 350px;
        overflow-y: auto;
        color: rgba(255, 255, 255, 0.8);
        font-size: 14px;
        text-align: left;
        .item{
            display: flex;
            align-items: center;
            padding: 10px 0;
            width: 100%;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            img{
                width: 40px;
                height: 40px;
                margin-right: 20px;
            }
            .item-nane{
                width: 100px;
                line-height: 20px;
            }
            .rank{
                flex: 1;
            }
            .time{
                width: 50px;
                text-align: center;
            }

        }
    }
}
</style>