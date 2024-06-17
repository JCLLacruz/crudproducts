import { createStore } from "vuex";
import products from "./modules/product";
import product from "./modules/product";

const store = createStore({
    modules: {
        products,
        product
    },
});

export default store;