import { computed } from 'vue'
import { useUserStore } from '@/modules/users/store'

export const useAuth = () => {
  const userStore = useUserStore()

  const isAuthenticated = computed(() => userStore.isAuthenticated)
  const currentUser = computed(() => userStore.user)

  return {
    isAuthenticated,
    currentUser,
    login: userStore.login,
    logout: userStore.logout
  }
}