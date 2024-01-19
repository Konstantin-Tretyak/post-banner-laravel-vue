import Vue from 'vue';
import Vuex from 'vuex';
import axios from './axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        banners: [],
    },
    mutations: {
        setBanners(state, banners) {
            state.banners = banners;
        },
    },
    actions: {
        async fetchBanners({ commit }) {
            const apiUrl = '/api/banners'; // Replace with your actual API endpoint
            axios.get(apiUrl)
                .then(response => {
                    const data = response.data;
                    commit('setBanners', data.banners);
                })
                .catch(error => {
                    console.error('Error fetching banners:', error);
                })
        },
    },
    getters: {
        getBanners(state) {
            return state.banners
        }
    }
});