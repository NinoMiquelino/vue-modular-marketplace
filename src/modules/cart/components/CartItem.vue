<template>
  <div class="flex items-center space-x-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
    <img
      :src="item.image"
      :alt="item.name"
      class="w-16 h-16 object-cover rounded-md"
    />
    
    <div class="flex-1 min-w-0">
      <h3 class="font-medium text-gray-900 dark:text-white truncate">
        {{ item.name }}
      </h3>
      <p class="text-lg font-semibold text-blue-600 dark:text-blue-400">
        {{ formatPrice(item.price) }}
      </p>
    </div>

    <div class="flex items-center space-x-2">
      <button
        @click="decreaseQuantity"
        class="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
      >
        <Minus class="w-4 h-4" />
      </button>
      
      <span class="w-8 text-center font-medium text-gray-900 dark:text-white">
        {{ item.quantity }}
      </span>
      
      <button
        @click="increaseQuantity"
        class="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
      >
        <Plus class="w-4 h-4" />
      </button>
    </div>

    <button
      @click="$emit('remove', item.id)"
      class="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900 rounded-md transition-colors duration-200"
    >
      <Trash2 class="w-4 h-4" />
    </button>
  </div>
</template>

<script setup>
import { Minus, Plus, Trash2 } from 'lucide-vue-next'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update-quantity', 'remove'])

const increaseQuantity = () => {
  emit('update-quantity', props.item.id, props.item.quantity + 1)
}

const decreaseQuantity = () => {
  emit('update-quantity', props.item.id, props.item.quantity - 1)
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}
</script>