<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters(['allProducts', 'product']),
    },
    methods: {
        ...mapActions(['fetchProducts', 'updateProduct']),
    },
    created() {
        this.fetchProducts();
    },
    methods: {
        ...mapActions(['fetchProducts', 'updateProduct']),
        updateProductHidden() {
            const updateProductDivForm = document.getElementById('updateProductDivForm');
            if (updateProductDivForm.classList.contains('hidden')) {
                updateProductDivForm.classList.remove('hidden');
            } else {
                updateProductDivForm.classList.add('hidden');
            }
        },
        updateProductForm(id) {
            const productName = document.getElementById('productName').value;
            const productPrice = document.getElementById('productPrice').value;
            const productImagePath = document.getElementById('productImagePath').value;
            this.updateProduct({ productName, productPrice, productImagePath },id);
        },
    }
};
</script>


<template>
    <div>
        <h1>Mis productos</h1>
        <button>Create Product</button>
        <div v-for="product in allProducts" :key="product._id">
            {{ product.productName }}
            {{ console.log(product)}}
            <button @click="updateProductHidden">Update Product</button>
            <button>Delete</button>
            <div id="updateProductDivForm" class="hidden">
                <form>
                    <div>
                        <label for="producName">Name:</label>
                        <input type="text" id="producName" v-model="productName">
                    </div>
                    <div>
                        <label for="description">Price:</label>
                        <input type="number" id="description" v-model="productPrice">
                    </div>
                    <div>
                        <label for="image_path">Image path:</label>
                        <input type="text" id="image_path" v-model="productImagePath">
                    </div>
                    {{ console.log('formulario',product) }}
                    <button @click.prevent="handelUpdateProduct(product._id)">Update Product</button>
                </form>
            </div>
        </div>
    </div>
</template>


<style scoped>
.hidden {
    display: none;
}
h1 {
	color: red;
}
</style>
