export default {
  namespaced: true,
  state: {
    item: '',
    path: '',
    itemList: []
  },
  mutations: {
    info(state, res) {
      state.item = res.label
      state.path = res.path
      state.itemList.filter((item) => {
        console.log(item.title.indexOf(item.title) === -1)
        return item.title.indexOf(item.title) === -1
      })
      state.itemList.push({
        title: state.item,
        pathTo: state.path
      })
    },
    del(state, data) {
      state.itemList.splice(data, 1)
    }
  },
  actions: {
    async item({ commit }, data) {
      const res = await data
      commit('info', res)
      return res
    },
    async del({ commit }, data) {
      const res = await data
      commit('del', res)
      return res
    }
  }
}
