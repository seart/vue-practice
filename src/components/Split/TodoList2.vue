<script setup lang="ts">
import TodoListItem2 from '@/components/Split/TodoListItem2.vue'
import type { TodoItem } from '@/components/Split/TodoItem2.js'

defineProps({
  items: {
    type: Array as () => TodoItem[],
  },
})

// 继续向上（ToDoListParent2）传递数据
const emit = defineEmits<{
  'checked-item': [id: number, checked: boolean]
  removeItem: [id: number]
}>()

//   接收 todolistitem 的emit   复选框，继续向上传递
const handleCheckbox = (id: number, checked: boolean) => {
  console.log('父组件接收到 【todolistItem】子组件 复选框 传来的数据:', id, checked)
  emit('checked-item', id, checked)
}

//  接收 todolistitem 的emit   按钮，继续向上传递
const handlerRemove = (id: number) => {
  console.log('父组件接收到 【todolistItem】子组件 删除按钮 传来的数据:', id)
  emit('removeItem', id)
}
</script>

<template>
  <TodoListItem2
    v-for="item in items"
    :key="item.id"
    v-bind:id="item.id"
    v-bind:content="item.content"
    v-bind:checked="item.checked"
    @checked-item="handleCheckbox"
    @removeItem="handlerRemove"
  />
</template>

<style scoped></style>
