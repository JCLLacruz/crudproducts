<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		...mapGetters(['allProducts']),
	},
	methods: {
		...mapActions(['fetchProducts','deleteProduct']),
        async handleDelete(id) {
            console.log('Deleting product with ID:', id);
            await this.deleteProduct(id);
            this.fetchProducts();
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
		<button>Create Product</button>
		<div v-for="product in allProducts" :key="product._id">
			{{ product.productName }}
			<button>Update Product</button>
			<button @click="handleDelete(product._id)" >Delete</button>
		</div>
	</div>
</template>

<style scoped>
h1 {
	color: red;
}
</style>
