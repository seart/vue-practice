import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const name = ref('')

  function updateName(newName: string) {
    name.value = newName
  }

  return { count, doubleCount, increment, name, updateName }
})
