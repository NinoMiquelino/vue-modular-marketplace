<template>
  <div class="products-view">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Our Products</h1>
      <p class="text-gray-600 dark:text-gray-400">Discover amazing products at great prices</p>
    </div>
    <ProductList />
  </div>
</template>

<script setup>
import ProductList from '../ProductList.vue'
</script>