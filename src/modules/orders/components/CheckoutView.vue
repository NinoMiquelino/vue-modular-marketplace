<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Checkout</h1>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Checkout Form -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Shipping Address -->
        <div class="card p-6">
          <h2 class="text-lg font-semibold mb-4">Shipping Address</h2>
          <form class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" class="input-field" />
              <input type="text" placeholder="Last Name" class="input-field" />
            </div>
            <input type="text" placeholder="Address" class="input-field" />
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input type="text" placeholder="City" class="input-field" />
              <input type="text" placeholder="State" class="input-field" />
              <input type="text" placeholder="ZIP Code" class="input-field" />
            </div>
          </form>
        </div>

        <!-- Payment Method -->
        <div class="card p-6">
          <h2 class="text-lg font-semibold mb-4">Payment Method</h2>
          <div class="space-y-3">
            <label
              v-for="method in paymentMethods"
              :key="method.id"
              class="flex items-center space-x-3 p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              :class="{ 'border-blue-500 bg-blue-50 dark:bg-blue-900': selectedMethod === method.id }"
            >
              <input
                type="radio"
                :value="method.id"
                v-model="selectedMethod"
                class="text-blue-600 focus:ring-blue-500"
              />
              <span class="font-medium text-gray-900 dark:text-white">{{ method.name }}</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="lg:col-span-1">
        <div class="card p-6 sticky top-4">
          <h2 class="text-lg font-semibold mb-4">Order Summary</h2>
          
          <div class="space-y-3 mb-4">
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="flex justify-between text-sm"
            >
              <span class="text-gray-600 dark:text-gray-400">
                {{ item.name }} × {{ item.quantity }}
              </span>
              <span class="font-medium">
                {{ formatPrice(item.price * item.quantity) }}
              </span>
            </div>
          </div>

          <div class="space-y-2 border-t border-gray-200 dark:border-gray-600 pt-4">
            <div class="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>{{ formatPrice(subtotal) }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span>Shipping</span>
              <span>{{ formatPrice(shipping) }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span>Tax</span>
              <span>{{ formatPrice(tax) }}</span>
            </div>
            <div class="flex justify-between font-semibold text-lg border-t border-gray-200 dark:border-gray-600 pt-2">
              <span>Total</span>
              <span>{{ formatPrice(total) }}</span>
            </div>
          </div>

          <button
            @click="processOrder"
            :disabled="processing || cartItems.length === 0"
            class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-medium mt-6 transition-colors duration-200 flex items-center justify-center"
          >
            <Loader2 v-if="processing" class="w-5 h-5 animate-spin mr-2" />
            {{ processing ? 'Processing...' : 'Complete Order' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/modules/cart/store'
import { useOrdersStore } from '@/modules/orders/store'
import { usePaymentStore } from '@/modules/payments/store'
import { Loader2 } from 'lucide-vue-next'

const router = useRouter()
const cartStore = useCartStore()
const ordersStore = useOrdersStore()
const paymentStore = usePaymentStore()

const processing = ref(false)

const cartItems = computed(() => cartStore.items)
const { subtotal, shipping, tax, total } = cartStore
const { paymentMethods, selectedMethod } = paymentStore

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

const processOrder = async () => {
  processing.value = true
  
  try {
    // Process payment
    const paymentResult = await paymentStore.processPayment({
      amount: total.value,
      method: selectedMethod.value
    })

    if (paymentResult.success) {
      // Create order
      const order = await ordersStore.createOrder({
        items: cartItems.value,
        total: total.value,
        paymentMethod: selectedMethod.value,
        transactionId: paymentResult.transactionId
      })

      // Clear cart
      cartStore.clearCart()

      // Redirect to order confirmation
      router.push(`/orders/${order.id}`)
    }
  } finally {
    processing.value = false
  }
}
</script>