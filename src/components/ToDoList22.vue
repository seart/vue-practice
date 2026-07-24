<!-- 自己照着 todolist 重新写的 -->

<script lang="ts" setup>
import { ref } from 'vue'

interface TodoItem {
  id: string
  status: 'pending' | 'completed'
  content: string
}

const totalCount = ref(0)
const completedCount = ref(0)

const todoItemList = ref<TodoItem[]>([])
const inputContent = ref('')

const addItem = () => {
  if (inputContent.value === '' || inputContent.value === null) {
    console.log('input content is empty')
    return
  }
  const todoitem: TodoItem = {
    id: crypto.randomUUID(),
    status: 'pending',
    content: inputContent.value.trim(),
  }
  todoItemList.value.push(todoitem)
  inputContent.value = ''
  totalCount.value++
}

const removeItem = () => {
  if (todoItemList.value.length <= 0) {
    console.log('todoitemList is emty')
    return
  }

  const removedItem = todoItemList.value.pop()
  if (removedItem?.status === 'completed') {
    completedCount.value--
  }
  totalCount.value--
}

const isCompleted = (item: TodoItem) => {
  item.status = item.status === 'completed' ? 'pending' : 'completed'

  if (item.status === 'completed') {
    completedCount.value++
  } else {
    completedCount.value--
  }
}

const getCompletedClass = (item: TodoItem) => {
  return item.status === 'completed' ? 'completed' : ''
}
</script>

<template>
  <div>
    <span>总数：{{ totalCount }}</span>
    <span>完成数：{{ completedCount }}</span>
    <span>未成数：{{ totalCount - completedCount }}</span>
    <div>
      <input v-model="inputContent" />
    </div>
    <ul>
      <li v-for="(item, index) in todoItemList" v-bind:key="index">
        <input type="checkbox" v-on:change="isCompleted(item)" />
        <span v-bind:class="getCompletedClass(item)">{{ item.content }}</span>
      </li>
    </ul>
    <div>
      <button v-on:click="addItem()">添加</button>
      <button v-on:click="removeItem()">移除</button>
    </div>
  </div>
</template>

<style>
.completed {
  text-decoration: line-through;
  color: #e93b3b;
}
</style>
