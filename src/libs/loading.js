import Vue from 'vue'
import loadingComponent from '@/components/loading.vue'
let loadingCount = 0

const LoadingConstructor = Vue.extend(loadingComponent)

const instance = new LoadingConstructor({
	el: document.createElement('div')
})

const disableLoadingApis = [
	"getPersonInfo"
]

instance.show = false // 默认隐藏
const loading = {
	show(url) {
		if (url) {
			const apiArr = url.split("/");
			const api = apiArr[apiArr.length - 1];
			if (disableLoadingApis.indexOf(api) >= 0) return;
		}
		if (loadingCount === 0) {
			instance.show = true
			document.body.appendChild(instance.$el)
		}
		loadingCount += 1
	},
	hide() {
		if (loadingCount <= 0) {
			return
		}
		loadingCount -= 1
		if (loadingCount === 0) {
			instance.show = false
		}
	}
}
// export default loading
export default {
	install() {
		if (!Vue.$loading) {
			Vue.$loading = loading
			// Vue.prototype.$loading = loading
		}
		Vue.mixin({
			created() {
				this.$loading = Vue.$loading
			}
		})
	}
}