<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 overflow-hidden"
    @click="toggleCart"
  >
    <div class="absolute inset-0 bg-black bg-opacity-50" />
    <div
      class="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl"
      @click.stop
    >
      <div class="flex flex-col h-full">
        <!-- Header -->
        <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
            Shopping Cart ({{ totalItems }})
          </h2>
          <button
            @click="toggleCart"
            class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            <X class="w-5 h-5" />
          </button>
        </div>

        <!-- Cart Items -->
        <div class="flex-1 overflow-y-auto p-4">
          <div v-if="items.length === 0" class="text-center py-8">
            <ShoppingCart class="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p class="text-gray-500 dark:text-gray-400">Your cart is empty</p>
          </div>

          <div v-else class="space-y-4">
            <CartItem
              v-for="item in items"
              :key="item.id"
              :item="item"
              @update-quantity="updateQuantity"
              @remove="removeItem"
            />
          </div>
        </div>

        <!-- Footer -->
        <div v-if="items.length > 0" class="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4">
          <div class="space-y-2">
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
            <div class="flex justify-between text-lg font-semibold border-t border-gray-200 dark:border-gray-600 pt-2">
              <span>Total</span>
              <span>{{ formatPrice(total) }}</span>
            </div>
          </div>

          <RouterLink
            to="/checkout"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium text-center block transition-colors duration-200"
            @click="toggleCart"
          >
            Checkout
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { X, ShoppingCart } from 'lucide-vue-next'
import { useCartStore } from '../store'
import CartItem from './CartItem.vue'

const cartStore = useCartStore()

const {
  items,
  isOpen,
  totalItems,
  subtotal,
  shipping,
  tax,
  total,
  toggleCart,
  updateQuantity,
  removeItem
} = cartStore

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}
</script>