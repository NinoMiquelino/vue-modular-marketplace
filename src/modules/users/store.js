import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const isAuthenticated = computed(() => !!user.value)
  
  const login = async (credentials) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    user.value = {
      id: '1',
      name: 'John Doe',
      email: credentials.email,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    }
  }
  
  const logout = () => {
    user.value = null
  }
  
  const updateProfile = (profileData) => {
    if (user.value) {
      user.value = { ...user.value, ...profileData }
    }
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
    updateProfile
  }
})