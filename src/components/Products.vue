<script>
import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters(['allProducts'])
    },
    methods: {
        ...mapActions(['fetchProducts'])
    },
    created() {
        this.fetchProducts();
    }
}
</script>

<template>
    <div>
        <h1>Mis productos</h1>
        <ul>
            <li v-for="product in allProducts" :key="product._id">
                {{ product.productName }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
h1 {
    color: red;
}
</style>
