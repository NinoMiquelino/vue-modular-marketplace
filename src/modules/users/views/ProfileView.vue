<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Profile</h1>
    
    <div class="card p-6">
      <div class="flex items-center space-x-4 mb-6">
        <img
          :src="user?.avatar"
          alt="Profile"
          class="w-16 h-16 rounded-full"
        />
        <div>
          <h2 class="text-lg font-semibold">{{ user?.name }}</h2>
          <p class="text-gray-600 dark:text-gray-400">{{ user?.email }}</p>
        </div>
      </div>

      <form class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            v-model="profileData.name"
            class="input-field"
          />
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            v-model="profileData.email"
            class="input-field"
          />
        </div>

        <button
          type="submit"
          @click.prevent="updateProfile"
          class="btn-primary"
        >
          Update Profile
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../store'

const userStore = useUserStore()
const user = computed(() => userStore.user)

const profileData = ref({
  name: user.value?.name || '',
  email: user.value?.email || ''
})

const updateProfile = () => {
  userStore.updateProfile(profileData.value)
}
</script>