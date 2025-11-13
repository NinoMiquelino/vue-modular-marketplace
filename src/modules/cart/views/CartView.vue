<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Shopping Cart</h1>
    
    <div v-if="items.length === 0" class="text-center py-12">
      <ShoppingCart class="w-24 h-24 text-gray-400 mx-auto mb-4" />
      <p class="text-gray-500 dark:text-gray-400 text-lg mb-4">Your cart is empty</p>
      <RouterLink to="/" class="btn-primary">
        Continue Shopping
      </RouterLink>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 space-y-4">
        <CartItem
          v-for="item in items"
          :key="item.id"
          :item="item"
          @update-quantity="updateQuantity"
          @remove="removeItem"
        />
      </div>

      <div class="card p-6 h-fit sticky top-4">
        <h2 class="text-lg font-semibold mb-4">Order Summary</h2>
        
        <div class="space-y-3 mb-4">
          <div class="flex justify-between text-sm">
            <span class="text-gray-600 dark:text-gray-400">Subtotal</span>
            <span class="font-medium">{{ formatPrice(subtotal) }}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-600 dark:text-gray-400">Shipping</span>
            <span class="font-medium">{{ formatPrice(shipping) }}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-600 dark:text-gray-400">Tax</span>
            <span class="font-medium">{{ formatPrice(tax) }}</span>
          </div>
        </div>

        <div class="flex justify-between font-semibold text-lg border-t border-gray-200 dark:border-gray-600 pt-4 mb-6">
          <span>Total</span>
          <span>{{ formatPrice(total) }}</span>
        </div>

        <RouterLink
          to="/checkout"
          class="w-full btn-primary text-center block"
        >
          Proceed to Checkout
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ShoppingCart } from 'lucide-vue-next'
import { useCartStore } from '../store'
import CartItem from '../components/CartItem.vue'
import { formatPrice } from '@/utils/formatters'

const cartStore = useCartStore()

const {
  items,
  subtotal,
  shipping,
  tax,
  total,
  updateQuantity,
  removeItem
} = cartStore
</script>