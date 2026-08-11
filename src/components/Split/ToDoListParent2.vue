<script lang="ts" setup>
import TodoForm2 from '@/components/Split/TodoForm2.vue'
import { ref } from 'vue'
import TodoStats2 from '@/components/Split/TodoStats2.vue'
import type { TodoItem } from '@/components/Split/TodoItem2.ts'
import TodoList2 from '@/components/Split/TodoList2.vue'
import { useTodoStorage } from '@/components/Split/useTodoStorage.ts'

const { todoItemList } = useTodoStorage()

const totalCount1 = ref(0)
const finishCount = ref(0)

// 子组件添加数据
const handleAddItem = (value: string) => {
  console.log('父组件接收到 【添加】子组件传来的数据:', value)
  const content = value.trim()
  if (!content) {
    return
  }

  const todoItem: TodoItem = {
    id: Date.now(),
    content: value,
    checked: false,
  }

  todoItemList.value.push(todoItem)
  totalCount1.value = todoItemList.value.length
}

// 处理 TodoListltem2 -> TodoList2 -> ToDoListParent2  上报的 emit

const handleCheckBox = (id: number, checked: boolean) => {
  const operItem = todoItemList.value.find((item) => item.id === id)
  // 不存在就踢出去
  if (!operItem) {
    return
  }
  // 存在就变更复选框的状态
  operItem.checked = checked
  finishCount.value = todoItemList.value.filter((item) => item.checked).length
}

// 1.判断对象是否存在
//2.过滤掉要删除的对象
const handleRemove = (id: number) => {
  const targeItem = todoItemList.value.find((item) => item.id === id)
  if (!targeItem) {
    return
  }

  todoItemList.value = todoItemList.value.filter((item) => item.id !== id)
  totalCount1.value = todoItemList.value.length
  finishCount.value = todoItemList.value.filter((item) => item.checked).length
}
</script>

<template>
  <TodoForm2 @add-item="handleAddItem" />

  <TodoList2
    v-bind:items="todoItemList"
    @removeItem="handleRemove"
    @checked-item="handleCheckBox"
  />

  <TodoStats2 :totalCount1234="totalCount1" v-bind:finishCount="finishCount" />
</template>

<style scoped></style>
