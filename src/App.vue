<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <AppHeader />
    <main class="container mx-auto px-4 py-8">
      <RouterView v-slot="{ Component }">
        <Suspense>
          <component :is="Component" />
          <template #fallback>
            <div class="flex justify-center items-center h-64">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          </template>
        </Suspense>
      </RouterView>
    </main>
    <AppFooter />
    <CartSidebar />
    <MobileNavigation v-if="isMobile" />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useAppStore } from '@/stores/app'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import MobileNavigation from '@/components/layout/MobileNavigation.vue'
import CartSidebar from '@/modules/cart/components/CartSidebar.vue'

const appStore = useAppStore()

const isMobile = computed(() => window.innerWidth < 768)

onMounted(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    appStore.toggleDarkMode()
  }
})
</script>