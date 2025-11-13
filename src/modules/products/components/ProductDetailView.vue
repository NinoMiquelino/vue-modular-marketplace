<template>
  <div class="max-w-6xl mx-auto" v-if="product">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Product Images -->
      <div>
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-96 object-cover rounded-lg"
        />
      </div>

      <!-- Product Info -->
      <div class="space-y-6">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
            {{ product.name }}
          </h1>
          <p class="text-gray-600 dark:text-gray-400 mt-2">
            {{ product.description }}
          </p>
        </div>

        <div class="flex items-center space-x-4">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">
            {{ formatPrice(product.price) }}
          </span>
          <span
            v-if="product.originalPrice > product.price"
            class="text-xl text-gray-500 dark:text-gray-400 line-through"
          >
            {{ formatPrice(product.originalPrice) }}
          </span>
        </div>

        <div class="flex items-center space-x-4">
          <div class="flex items-center">
            <Star
              v-for="i in 5"
              :key="i"
              class="w-5 h-5"
              :class="i <= Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'"
            />
          </div>
          <span class="text-gray-600 dark:text-gray-400">
            {{ product.rating }} ({{ product.reviewCount }} reviews)
          </span>
        </div>

        <div class="flex space-x-4">
          <button
            @click="addToCart"
            class="btn-primary flex-1 flex items-center justify-center space-x-2"
          >
            <ShoppingCart class="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
          <button class="btn-secondary">
            <Heart class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import { PRODUCT_QUERY } from '../graphql'
import { useCartStore } from '@/modules/cart/store'
import { formatPrice } from '@/utils/formatters'
import { Star, ShoppingCart, Heart } from 'lucide-vue-next'

const route = useRoute()
const cartStore = useCartStore()

const { result } = useQuery(PRODUCT_QUERY, {
  id: route.params.id
})

const product = computed(() => result.value?.product)

const addToCart = () => {
  if (product.value) {
    cartStore.addItem({
      id: product.value.id,
      name: product.value.name,
      price: product.value.price,
      image: product.value.image,
      quantity: 1
    })
  }
}
</script>