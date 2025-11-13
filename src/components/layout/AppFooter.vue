<template>
  <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <ShoppingBag class="w-6 h-6 text-blue-600" />
            <span class="text-lg font-bold text-gray-900 dark:text-white">MarketPlace</span>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            Your one-stop shop for all your needs. Quality products, great prices.
          </p>
        </div>
        
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Shop</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">All Products</a></li>
            <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Featured</a></li>
            <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">New Arrivals</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Support</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Contact Us</a></li>
            <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Shipping Info</a></li>
            <li><a href="#" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Returns</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
          <ul class="space-y-2 text-sm">
            <li class="text-gray-600 dark:text-gray-400">contact@marketplace.com</li>
            <li class="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; 2024 MarketPlace. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ShoppingBag } from 'lucide-vue-next'
</script>