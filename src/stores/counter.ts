import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const name = ref('')

  async function updateName() {
    const axiosInstance = axios.create({
      timeout: 2000, // 设置请求超时时间为2秒
      baseURL: '/api', // 设置基础URL
    })
    try {
      await axiosInstance.get('/testdata').then((response) => {
        const newName = response.data.data
        name.value = newName
      })
    } catch (error) {
      console.error('请求超时或请求失败', error)
    }
  }

  return { count, doubleCount, increment, name, updateName }
})
