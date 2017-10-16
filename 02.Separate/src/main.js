// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
	state: {
		colors: [
			{ code: '#f00', name: 'Red' },
			{ code: '#0f0', name: 'Green' },
			{ code: '#00f', name: 'Blue' },
		]
	},
	mutations: {
		addColor: (state, newColor) => {
			state.colors.push(newColor)
		}
	},
	actions: {
		addColor: (context, colorToAdd) => {
			context.commit('addColor', colorToAdd)
		}
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store
})
