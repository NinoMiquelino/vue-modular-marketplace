import { ref } from 'vue'

export const useApi = () => {
  const loading = ref(false)
  const error = ref(null)

  const callApi = async (apiCall) => {
    loading.value = true
    error.value = null
    
    try {
      const result = await apiCall()
      return result
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    callApi
  }
}