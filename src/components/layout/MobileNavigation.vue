<template>
  <div
    v-if="appStore.mobileMenuOpen"
    class="fixed inset-0 z-40 md:hidden"
    @click="appStore.toggleMobileMenu"
  >
    <div class="absolute inset-0 bg-black bg-opacity-50" />
    <div
      class="absolute top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300"
      @click.stop
    >
      <div class="p-4 border-b border-gray-200 dark:border-gray-700">
        <button
          @click="appStore.toggleMobileMenu"
          class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <X class="w-5 h-5" />
        </button>
      </div>
      
      <nav class="p-4 space-y-4">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.path"
          class="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          @click="appStore.toggleMobileMenu"
        >
          {{ item.name }}
        </RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { X } from 'lucide-vue-next'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

const navigation = [
  { name: 'Products', path: '/' },
  { name: 'Categories', path: '/categories' },
  { name: 'Orders', path: '/orders' },
  { name: 'Profile', path: '/profile' }
]
</script>