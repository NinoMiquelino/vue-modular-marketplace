import { defineAsyncComponent } from 'vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: defineAsyncComponent(() => import('@/modules/products/views/ProductsView.vue'))
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: defineAsyncComponent(() => import('@/modules/products/views/ProductDetailView.vue')),
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: defineAsyncComponent(() => import('@/modules/cart/views/CartView.vue'))
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: defineAsyncComponent(() => import('@/modules/checkout/views/CheckoutView.vue'))
  },
  {
    path: '/orders',
    name: 'Orders',
    component: defineAsyncComponent(() => import('@/modules/orders/views/OrdersView.vue'))
  },
  {
    path: '/orders/:id',
    name: 'OrderDetail',
    component: defineAsyncComponent(() => import('@/modules/orders/views/OrderDetailView.vue')),
    props: true
  },
  {
    path: '/profile',
    name: 'Profile',
    component: defineAsyncComponent(() => import('@/modules/users/views/ProfileView.vue'))
  }
]

export default routes