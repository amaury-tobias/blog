export const state = () => ({
  darkMode: true,
})

export const mutations = {
  setDarkMode: (state, payload) => {
    state.darkMode = payload
  },
}

export const actions = {
  setDarkMode: ({ commit }, payload) => {
    commit('setDarkMode', payload)
    payload ? document.body.classList.add('dark') : document.body.classList.remove('dark')
    localStorage.setItem('darkMode', payload)
  },
}

export const getters = {
  getThemeStatus(state) {
    return state.isDark
  },
}
