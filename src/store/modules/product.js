import axios from 'axios';

const state = {
    products: [],
    product: null,
};

const getters = {
    allProducts: (state) => state.products,
    product: (state) => state.product,
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
    async updateProduct({ commit },product, id) {
        try {
            const response = await axios.get(
                'https://serverecommercevue.onrender.com/products/id/' + id, product
            );
            commit('Product updated.', response.data.product);
            console.log(response);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    },
};

const mutations = {
    setProducts: (state, products) => (state.products = products),
    setProduct: (state, product) => (state.products = product),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
