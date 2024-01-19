import Vue from 'vue'
import { BootstrapVue, } from 'bootstrap-vue';
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import Vuex from 'vuex';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue'
import store from './store';

Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')



const requireComponent = require.context(
    './components',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
      camelCase(
          fileName
              .split('/')
              .pop()
              .replace(/\.\w+$/, '')
      )
  )

  // Register component globally
  Vue.component(
      componentName,
      componentConfig.default || componentConfig
  )
})