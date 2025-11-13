import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { PRODUCTS_QUERY, PRODUCT_QUERY } from './graphql'

export const useProductsStore = defineStore('products', () => {
  const searchTerm = ref('')
  const selectedCategory = ref('all')
  const sortBy = ref('name')
  const priceRange = ref([0, 1000])
  const currentPage = ref(1)
  const itemsPerPage = ref(12)

  const { result: productsResult, loading: productsLoading, refetch: refetchProducts } = useQuery(
    PRODUCTS_QUERY,
    () => ({
      search: searchTerm.value,
      category: selectedCategory.value === 'all' ? null : selectedCategory.value,
      limit: itemsPerPage.value,
      offset: (currentPage.value - 1) * itemsPerPage.value
    })
  )

  const products = computed(() => productsResult.value?.products || [])
  const totalProducts = computed(() => products.value.length)

  const filteredProducts = computed(() => {
    let filtered = [...products.value]

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange.value[0] && product.price <= priceRange.value[1]
    )

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy.value) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  })

  const categories = computed(() => {
    const cats = new Set(products.value.map(p => p.category))
    return ['all', ...Array.from(cats)]
  })

  return {
    products: filteredProducts,
    productsLoading,
    searchTerm,
    selectedCategory,
    sortBy,
    priceRange,
    currentPage,
    itemsPerPage,
    totalProducts,
    categories,
    refetchProducts
  }
})