# 02.Separate

> Example of VueJS project with multiple files. 

*Please note that I committed the `dist` folder which is not a normal thing to do.  I did it simply to allow github pages to serve up the example web page.*

## To recreate this project

``` bash
# install vue-cli
npm i -g vue-cli

# generate out the webpack template
vue init webpack my-project-name
```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---

## Add Vuex to the project

```
yarn add vuex
```

### main.js

```
import Vuex from 'vuex'

Vue.use(Vuex)
```

Create a store:

```
const store = new Vuex.Store({
	state: { your: 'state' },
	mutations: { mymutator: (state, value) => { state.your = value },
	actions: { myaction: (context, value) => { context.commit('mymutator', value)
	})
```

Add store to Vue application:

```
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store
})
```
