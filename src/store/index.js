import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from "../utils/myaxios";

export default new Vuex.Store({
    state: {
        name: '',
        age: 18
    },
    getters: {},
    mutations: {
        updateName(state, name) {
            state.name = name;
        },
        updateServeUser(state, user) {
            const {name, age} = user;
            state.name = name;
            state.age = age;
        }
    },
    actions: {
        async updateServeUser(context) {
            const resp = await axios().get('/api/user');
            context.commit('updateServeUser', resp.data.data)
        }
    },
    modules: {}
})
