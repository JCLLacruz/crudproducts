<script>
import { ref } from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    setup() {
        const initialState = {
            _id: '',
            productName: '',
            description: '',
            price: '',
            image_path: '',
        };
        const productEdit = ref({ ...initialState });

        const setProductEdit = (product) => {
            productEdit.value = { ...product };
        };

        return {
            productEdit,
            setProductEdit,
        };
    },
    computed: {
        ...mapGetters(['allProducts', 'product']),
    },
    methods: {
        ...mapActions(['fetchProducts', 'createProduct', 'updateProduct']),
        async addProduct() {
            const product = {
                productName: this.productName,
                description: this.description,
                price: this.price,
                image_path: this.image_path,
            };
            await this.createProduct(product);
            await this.fetchProducts();
            this.resetForm();
        },
        async handleUpdateProduct() {
            const product = {
                _id: this.productEdit._id,
                productName: this.productEdit.productName,
                description: this.productEdit.description,
                price: this.productEdit.price,
                image_path: this.productEdit.image_path,
            };
            await this.updateProduct(product);
            await this.fetchProducts();
            this.resetForm();
        },
        updateProductHidden(product) {
            const updateProductDivForm = document.getElementById('updateProductDivForm');
            if (updateProductDivForm.classList.contains('hidden')) {
                this.setProductEdit(product);
                updateProductDivForm.classList.remove('hidden');
            } else {
                updateProductDivForm.classList.add('hidden');
            }
        },
        resetForm() {
            this.productEdit = { _id: '', productName: '', description: '', price: '', image_path: '' };
        }
    },
    created() {
        this.fetchProducts();
    },
};
</script>



<template>
    <div>
        <h1>Mis productos</h1>
        <div>
            <form @submit.prevent="addProduct">
                <div>
                    <label for="productName">Nombre del producto:</label>
                    <input v-model="productName" type="text" id="productName" required />
                    
                    <label for="description">Descripción:</label>
                    <input v-model="description" type="text" id="description" required />
                    
                    <label for="price">Precio:</label>
                    <input v-model="price" type="number" id="price" required />
                
                    <label for="image_path">URL imagen:</label>
                    <input v-model="image_path" type="text" id="image_path" required />
                </div>
                <button type="submit">Crear producto</button>
            </form>
        </div>
        <div v-for="product in allProducts" :key="product._id">
            <h3>{{ product.productName }}</h3>
            <button @click="updateProductHidden(product)">Update Product</button>
            <button @click="handleDelete(product._id)" >Delete</button>
        </div>
        <div id="updateProductDivForm" class="hidden">
            <form @submit.prevent="handleUpdateProduct">
                <div>
                    <label for="updateProductName">Name:</label>
                    <input type="text" id="updateProductName" v-model="productEdit.productName" :placeholder="productEdit.productName">
                </div>
                <div>
                    <label for="updateDescription">Description:</label>
                    <input type="text" id="updateDescription" v-model="productEdit.description" :placeholder="productEdit.description">
                </div>
                <div>
                    <label for="updatePrice">Price:</label>
                    <input type="number" id="updatePrice" v-model="productEdit.price" :placeholder="productEdit.price">
                </div>
                <div>
                    <label for="updateImagePath">Image path:</label>
                    <input type="text" id="updateImagePath" v-model="productEdit.image_path" :placeholder="productEdit.image_path">
                </div>
                <button type="submit">Update Product</button>
            </form>
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
.hidden {
  display: none;
}
</style>
