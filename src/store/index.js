import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
// import mabel from './modules/mabel'
import mabel from './modules/mabel'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    mabel
  }
})
