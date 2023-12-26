// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "@/router"
// import loading from '@/libs/loading.js' // 引入loading
import * as echarts from 'echarts';
import "@/libs/rem.js"// 引入 移动端适配
import dateUtil from "@/libs/dateUtil.js";
import store from '@/store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//全局注册组件
import Layout from '@/views/components/Layout.vue'
import Panel from '@/views/components/Panel.vue'
import SearchForm from '@/views/components/SearchForm.vue'
Vue.component('Layout', Layout)
Vue.component('Panel', Panel)
Vue.component('SearchForm', SearchForm)
Vue.use(ElementUI)
// Vue.use(loading) // 全局使用loading
Vue.config.productionTip = false
Vue.prototype.$dateUtil = dateUtil
Vue.prototype.echarts = echarts
Vue.use(echarts)

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app")
