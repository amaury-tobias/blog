export const state = () => ({
  token: ''
})

export const mutations = {
  SET_TOKEN(state, payload) {
    state.token = payload
  }
}

export const getters = {
  getToken(state) {
    return state.token
  }
}

export const actions = {
  async testToken({ commit }, _data) {
    const tokenResponse = await this.$axios.get('/api')
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log(tokenResponse)
    }

    commit('SET_TOKEN', tokenResponse.data.message)
  }
}
