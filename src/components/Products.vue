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
        ...mapGetters(['allProducts']),
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
    },
    created() {
        this.fetchProducts();
    },
};
</script>


<template>
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
</template>


<style scoped>
h1 {
	color: red;
}
.hidden {
  display: none;
}
</style>
