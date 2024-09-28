import Vue from 'vue'
// import App from './App.vue'
// import e1 from './views/example1View.vue'
// import e3 from './views/example3View.vue'
// import e4 from './views/example4View.vue'
// import e5 from './views/example5View.vue'
// import e6 from './views/example6View.vue'
// import e7 from './views/example7View.vue'
// import e8 from './views/example8View.vue'
import e9 from './views/example9View.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Element)



new Vue({
    router,
    store,
    render: h => h(e9)
}).$mount('#app')