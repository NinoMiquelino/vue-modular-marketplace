<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
    <div class="relative overflow-hidden">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div class="absolute top-2 right-2">
        <span
          v-if="product.originalPrice > product.price"
          class="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold"
        >
          {{ discountPercentage }}% OFF
        </span>
      </div>
    </div>

    <div class="p-4">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
        {{ product.name }}
      </h3>
      
      <p class="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
        {{ product.description }}
      </p>

      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center space-x-2">
          <span class="text-lg font-bold text-gray-900 dark:text-white">
            {{ formatPrice(product.price) }}
          </span>
          <span
            v-if="product.originalPrice > product.price"
            class="text-sm text-gray-500 dark:text-gray-400 line-through"
          >
            {{ formatPrice(product.originalPrice) }}
          </span>
        </div>

        <div class="flex items-center space-x-1">
          <Star class="w-4 h-4 text-yellow-400 fill-current" />
          <span class="text-sm text-gray-600 dark:text-gray-300">
            {{ product.rating }} ({{ product.reviewCount }})
          </span>
        </div>
      </div>

      <button
        @click="$emit('add-to-cart', product)"
        :disabled="!product.inStock"
        class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
      >
        <ShoppingCart class="w-4 h-4" />
        <span>{{ product.inStock ? 'Add to Cart' : 'Out of Stock' }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Star, ShoppingCart } from 'lucide-vue-next'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

defineEmits(['add-to-cart'])

const discountPercentage = computed(() => {
  const discount = ((props.product.originalPrice - props.product.price) / props.product.originalPrice) * 100
  return Math.round(discount)
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>