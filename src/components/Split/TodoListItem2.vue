<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  id: number
  content: string
  checked: boolean
}>()

const emit = defineEmits<{
  'checked-item': [id: number, checked: boolean]
  removeItem: [id: number]
}>()

const handleCheck = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('checked-item', props.id, target.checked)
}

const handlerRemove = (id: number) => {
  emit('removeItem', id)
}

const contentClass = computed(() => ({
  completed: props.checked
}))
</script>

<template>
  <!--一个复选框 一个文字内容 一个删除按钮  -->
  <ul>
    <li>
      <input type="checkbox" @change="handleCheck" v-bind:checked="props.checked" />
      <span v-bind:class="contentClass">{{ content }}  </span>
      <button v-on:click="handlerRemove(props.id)">   删除 </button>
    </li>
  </ul>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
  color: #999;
}
</style>
