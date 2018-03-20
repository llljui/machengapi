// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/*import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './style.less'

Vue.config.productionTip = false
/*if (sessionStorage.sid) {
	router.push({path:'teamrechanger'});
	console.log(22);
}else{
	router.push({path:'login'});
	console.log(22);
}*/
//Vue.use(MuseUI)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>',
  components: { App }
})
