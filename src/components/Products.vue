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
		...mapActions(['fetchProducts', 'createProduct', 'updateProduct', 'deleteProduct']),
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
		},
		async handleDelete(id) {
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
		<div>
			<form @submit.prevent="addProduct">
				<div id="createProduct">
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
        <div id="productsDiv">
            <div id="productDiv" v-for="product in allProducts" :key="product._id">
                <div id="for">
                    <div>
                        <img :src="product.image_path"/>
                    </div>
                    <h3>{{ product.productName }}</h3>
                    <button @click="updateProductHidden(product)">Update Product</button>
                    <button @click="handleDelete(product._id)">Delete</button>
                </div>
            </div>
        </div>
		<div id="updateProductDivForm" class="hidden formStyle">
			<h2>Update Product</h2>
			<form @submit.prevent="handleUpdateProduct">
				<div>
					<label for="updateProductName">Name:</label>
					<input type="text" id="updateProductName" v-model="productEdit.productName" :placeholder="productEdit.productName" />
				</div>
				<div>
					<label for="updateDescription">Description:</label>
					<input type="text" id="updateDescription" v-model="productEdit.description" :placeholder="productEdit.description" />
				</div>
				<div>
					<label for="updatePrice">Price:</label>
					<input type="number" id="updatePrice" v-model="productEdit.price" :placeholder="productEdit.price" />
				</div>
				<div>
					<label for="updateImagePath">Image path:</label>
					<input type="text" id="updateImagePath" v-model="productEdit.image_path" :placeholder="productEdit.image_path" />
				</div>
				<button type="submit">Update Product</button>
				<button @click="updateProductHidden(product)">Close</button>
			</form>
		</div>
	</div>
</template>

<style scoped>
.createProduct {
    display: flex;
}
.for {
    width: 100%;
}
.productDiv {
    width: 200px;
}

.productsDiv{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem
}
img {
    width: 150px;
}
.hidden {
	display: none;
}
h1 {
	color: #00BD7E;
}
.hidden {
	display: none;
}
.formStyle {
	position: absolute;
	background-color: gray;
	width: 250px;
	height: 350px;
	padding: 2rem;
	top: 50%;
	bottom: 50%;
	right: 50%;
	left: 50%;
}
</style>
