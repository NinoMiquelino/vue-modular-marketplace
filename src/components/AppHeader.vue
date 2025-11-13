<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-2">
          <ShoppingBag class="w-8 h-8 text-blue-600" />
          <span class="text-xl font-bold text-gray-900 dark:text-white">MarketPlace</span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.path"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
          >
            {{ item.name }}
          </RouterLink>
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center space-x-4">
          <!-- Dark Mode Toggle -->
          <button
            @click="appStore.toggleDarkMode"
            class="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            <Sun v-if="!appStore.darkMode" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>

          <!-- Cart -->
          <button
            @click="cartStore.toggleCart"
            class="relative p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            <ShoppingCart class="w-5 h-5" />
            <span
              v-if="cartStore.totalItems > 0"
              class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
            >
              {{ cartStore.totalItems }}
            </span>
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="appStore.toggleMobileMenu"
            class="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            <Menu class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ShoppingBag, ShoppingCart, Sun, Moon, Menu } from 'lucide-vue-next'
import { useAppStore } from '@/stores/app'
import { useCartStore } from '@/modules/cart/store'

const appStore = useAppStore()
const cartStore = useCartStore()

const navigation = [
  { name: 'Products', path: '/' },
  { name: 'Categories', path: '/categories' },
  { name: 'Orders', path: '/orders' },
  { name: 'Profile', path: '/profile' }
]
</script>