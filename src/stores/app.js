import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  const darkMode = ref(false)
  const loading = ref(false)
  const mobileMenuOpen = ref(false)

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    if (darkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }

  return {
    darkMode,
    loading,
    mobileMenuOpen,
    toggleDarkMode,
    toggleMobileMenu
  }
})