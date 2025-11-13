import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePaymentStore = defineStore('payment', () => {
  const paymentMethods = ref([
    {
      id: 'credit',
      name: 'Credit Card',
      icon: 'credit-card'
    },
    {
      id: 'debit',
      name: 'Debit Card',
      icon: 'credit-card'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: 'dollar-sign'
    },
    {
      id: 'pix',
      name: 'PIX',
      icon: 'zap'
    }
  ])

  const selectedMethod = ref('credit')
  const processing = ref(false)
  const paymentStatus = ref(null)

  const processPayment = async (orderData) => {
    processing.value = true
    paymentStatus.value = null

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulate random success/failure
      const success = Math.random() > 0.2
      
      if (success) {
        paymentStatus.value = {
          success: true,
          transactionId: 'TX' + Date.now(),
          message: 'Payment processed successfully'
        }
      } else {
        paymentStatus.value = {
          success: false,
          error: 'Payment failed. Please try again.'
        }
      }
    } catch (error) {
      paymentStatus.value = {
        success: false,
        error: 'An error occurred during payment processing'
      }
    } finally {
      processing.value = false
    }
  }

  const resetPayment = () => {
    processing.value = false
    paymentStatus.value = null
  }

  return {
    paymentMethods,
    selectedMethod,
    processing,
    paymentStatus,
    processPayment,
    resetPayment
  }
})