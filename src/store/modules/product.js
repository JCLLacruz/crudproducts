import axios from 'axios';

const state = {
    products: [],
};

const getters = {
    allProducts: (state) => state.products,
};

const actions = {
    async fetchProducts({ commit }) {
        try {
            const response = await axios.get(
                'https://serverecommercevue.onrender.com/products'
            );
            commit('setProducts', response.data.products);
            console.log(response);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    },
};

const mutations = {
    setProducts: (state, products) => (state.products = products),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
