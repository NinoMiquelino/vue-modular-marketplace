import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useOrdersStore = defineStore('orders', () => {
  const orders = ref([])
  const loading = ref(false)

  const getOrders = computed(() => orders.value)

  const createOrder = async (orderData) => {
    loading.value = true
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const newOrder = {
        id: 'ORD' + Date.now(),
        ...orderData,
        status: 'processing',
        createdAt: new Date().toISOString(),
        estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
      }
      
      orders.value.unshift(newOrder)
      return newOrder
    } finally {
      loading.value = false
    }
  }

  const getOrderById = (id) => {
    return orders.value.find(order => order.id === id)
  }

  const updateOrderStatus = (orderId, status) => {
    const order = orders.value.find(order => order.id === orderId)
    if (order) {
      order.status = status
    }
  }

  return {
    orders: getOrders,
    loading,
    createOrder,
    getOrderById,
    updateOrderStatus
  }
})