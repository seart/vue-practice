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

  function updateName() {
    axios.get('/api/testdata').then((response) => {
      const newName = response.data.data
      name.value = newName
    })
  }

  return { count, doubleCount, increment, name, updateName }
})
