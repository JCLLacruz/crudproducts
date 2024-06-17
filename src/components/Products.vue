<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		...mapGetters(['allProducts']),
	},
	methods: {
		...mapActions(['fetchProducts']),
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
			<button>Delete</button>
		</div>
	</div>
</template>

<style scoped>
h1 {
	color: red;
}
</style>
