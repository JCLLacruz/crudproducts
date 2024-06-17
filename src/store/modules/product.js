import axios from 'axios';

const state = {
    products: [],
    product: {},
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
    async updateProduct({ commit }, id) {
        try {
            const response = await axios.get(
                'https://serverecommercevue.onrender.com/products/' + id
            );
            commit('setProduct', response.data.products);
            console.log(response);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    },
    async createProduct({ commit }, product) {
        try {
            console.log(product);
            const response = await axios.post('https://serverecommercevue.onrender.com/products', product);
            commit('newProduct', response.data.product);
        } catch (error) {
            console.error('Error creating product:', error);
        }
    },
    async deleteProduct({ commit }, id) {
        try {
            const response = await axios.delete(
                'https://serverecommercevue.onrender.com/products/id/' + id
            );
            commit('removeProduct', id);
            console.log(response);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    }

};

const mutations = {
    setProducts: (state, products) => (state.products = products),
    setProduct: (state, product) => (state.products = product),
    newProduct: (state, product) => state.products.push(product),
    removeProduct: (state, id) => (state.products = state.products.filter(product => product.id !== id))
};

export default {
    state,
    getters,
    actions,
    mutations,
};
