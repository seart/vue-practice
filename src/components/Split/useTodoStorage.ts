import type { TodoItem } from '@/components/Split/TodoItem2.ts'
import { onMounted, ref, watch } from 'vue'

export const useTodoStorage = () => {
  const todoItemList = ref<TodoItem[]>([])

  onMounted(() => {
    const storeTodos = localStorage.getItem('todo-list')

    if (storeTodos) {
      todoItemList.value = JSON.parse(storeTodos) as TodoItem[]
    }
  })

  watch(todoItemList, (items) => {
    localStorage.setItem('todo-list', JSON.stringify(items))
  }, {deep: true})

  return {todoItemList}
}
