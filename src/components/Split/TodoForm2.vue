<script setup lang="ts">
import { ref } from 'vue'
const inputContent = ref('')

const emit = defineEmits<{
  'add-item': [value: string]
}>()

const addItem = () => {
  emit('add-item', inputContent.value)
  inputContent.value = ''
}
</script>

<template>
  <div>
    <input v-model="inputContent" />
    <button @click="addItem">添加</button>
  </div>
</template>

<style scoped></style>
