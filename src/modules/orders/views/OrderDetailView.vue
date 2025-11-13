<template>
  <div class="max-w-4xl mx-auto" v-if="order">
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Order #{{ order.id }}</h1>
      <p class="text-gray-600 dark:text-gray-400">Placed on {{ formatDate(order.createdAt) }}</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 space-y-6">
        <!-- Order Items -->
        <div class="card p-6">
          <h2 class="text-lg font-semibold mb-4">Order Items</h2>
          <div class="space-y-4">
            <OrderItem
              v-for="item in order.items"
              :key="item.id"
              :item="item"
            />
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <!-- Order Summary -->
        <div class="card p-6">
          <h2 class="text-lg font-semibold mb-4">Order Summary</h2>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>{{ formatPrice(order.subtotal) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Shipping</span>
              <span>{{ formatPrice(order.shipping) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Tax</span>
              <span>{{ formatPrice(order.tax) }}</span>
            </div>
            <div class="flex justify-between font-semibold border-t pt-2">
              <span>Total</span>
              <span>{{ formatPrice(order.total) }}</span>
            </div>
          </div>
        </div>

        <!-- Shipping Address -->
        <div class="card p-6">
          <h2 class="text-lg font-semibold mb-4">Shipping Address</h2>
          <p class="text-gray-600 dark:text-gray-400">{{ order.shippingAddress }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useOrdersStore } from '../store'
import OrderItem from '../components/OrderItem.vue'
import { formatPrice, formatDate } from '@/utils/formatters'

const route = useRoute()
const ordersStore = useOrdersStore()

const order = computed(() => ordersStore.getOrderById(route.params.id))
</script>