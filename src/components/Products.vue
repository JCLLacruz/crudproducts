<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            productName: '',
            description: '',
            price: '',
            imagePath: '',
        };
    },
    computed: {
        ...mapGetters(['allProducts','product']),
    },
    methods: {
        ...mapActions(['fetchProducts', 'createProduct']),
        async addProduct() {
            const product = {
                productName: this.productName,
                description: this.description,
                price: this.price,
                imagePath: this.imagePath,
            };
            await this.createProduct(product);
            this.productName = '';
            this.description = '';
            this.price = '';
            this.imagePath = '';
        },
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
    },
    created() {
        this.fetchProducts();
        this.updateProduct();
    },
};
</script>


<template>
<<<<<<< HEAD
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
=======
  <div>
      <h1>Mis productos</h1>
      <form @submit.prevent="addProduct">
          <div class="">
              <label for="productName">Nombre del producto:</label>
              <input v-model="productName" type="text" id="productName" required />
              
              <label for="description">Descripción:</label>
              <input v-model="description" type="text" id="description" required />
              
              <label for="price">Precio:</label>
              <input v-model="price" type="number" id="price" required />
              
              <label for="imagePath">URL imagen:</label>
              <input v-model="imagePath" type="text" id="imagePath" required />
          </div>
          <button type="submit">Crear producto</button>
      </form>
      <div v-for="product in allProducts" :key="product._id">
          {{ product.productName }}
          <button>Update Product</button>
          <button>Delete</button>
      </div>
  </div>
>>>>>>> 5ae5a2802174f1076c926a97090af9650453ed53
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
