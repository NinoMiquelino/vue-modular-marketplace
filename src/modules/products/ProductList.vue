<template>
  <div class="products-module">
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Filters Sidebar -->
      <aside class="lg:w-64 flex-shrink-0">
        <ProductFilters />
      </aside>

      <!-- Products Grid -->
      <div class="flex-1">
        <ProductToolbar />
        
        <div v-if="productsLoading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCardSkeleton v-for="n in 8" :key="n" />
        </div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart"
          />
        </div>

        <ProductPagination />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useProductsStore } from './store'
import { useCartStore } from '@/modules/cart/store'
import ProductFilters from './components/ProductFilters.vue'
import ProductToolbar from './components/ProductToolbar.vue'
import ProductCard from './components/ProductCard.vue'
import ProductCardSkeleton from './components/ProductCardSkeleton.vue'
import ProductPagination from './components/ProductPagination.vue'

const productsStore = useProductsStore()
const cartStore = useCartStore()

const products = computed(() => productsStore.products)
const productsLoading = computed(() => productsStore.productsLoading)

const addToCart = (product) => {
  cartStore.addItem({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: 1
  })
}
</script>