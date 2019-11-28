import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

Vue.filter('dollar', value => '$' + value.toFixed(2));
Vue.filter('percent', value => (value * 100).toFixed(0) + '%');
Vue.filter('precise_percent', value => (value * 100).toFixed(1) + '%');
Vue.filter('temperature', value => value.toFixed(1) + '° F / ' + ((value - 32) * (5 / 9)).toFixed(1) + '° C');
Vue.filter('capitalize', value => value.charAt(0).toUpperCase() + value.slice(1));

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
