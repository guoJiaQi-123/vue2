import Vue from 'vue'
// import App from './App.vue'
// import e1 from './views/example1View.vue'
// import e3 from './views/example3View.vue'
// import e4 from './views/example4View.vue'
import e5 from './views/example5View.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(e5)
}).$mount('#app')