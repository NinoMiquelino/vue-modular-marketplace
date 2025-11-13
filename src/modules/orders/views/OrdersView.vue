<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">My Orders</h1>
    
    <div v-if="orders.length === 0" class="text-center py-12">
      <Package class="w-24 h-24 text-gray-400 mx-auto mb-4" />
      <p class="text-gray-500 dark:text-gray-400 text-lg mb-4">No orders yet</p>
      <RouterLink to="/" class="btn-primary">
        Start Shopping
      </RouterLink>
    </div>

    <div v-else class="space-y-6">
      <OrderCard
        v-for="order in orders"
        :key="order.id"
        :order="order"
      />
    </div>
  </div>
</template>

<script setup>
import { Package } from 'lucide-vue-next'
import { useOrdersStore } from '../store'
import OrderCard from '../components/OrderCard.vue'

const ordersStore = useOrdersStore()
const orders = ordersStore.orders
</script>