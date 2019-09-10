import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: '广州',
        userName: null
    },
    mutations: {
        setCity: function(state, payload) {
            state.city = payload.city
        },
        setUser: function(state, name) {
            state.userName = name
        }
    },
    actions: {
        setCity: function({ commit }, payload) {
            commit('setCity', payload)
        }
    }
})