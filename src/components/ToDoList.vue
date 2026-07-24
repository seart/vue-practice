<!-- AI 帮助下写的 -->

<!--<script lang="ts" setup>-->
<!--import { ref } from 'vue'-->

<!--const listItem = ref<ToDoItem[]>([])-->
<!--const inputContent = ref<string>('')-->
<!--const addMethond = () => {-->
<!--  if (inputContent.value != null && inputContent.value != '') {-->
<!--    const todoItem: ToDoItem = {-->
<!--      id: crypto.randomUUID(),-->
<!--      status: 'pending',-->
<!--      content: inputContent.value.trim(),-->
<!--    }-->
<!--    listItem.value.push(todoItem)-->
<!--    totalCount.value++-->
<!--    inputContent.value = ''-->
<!--  }-->
<!--  console.log('inputContent：' + inputContent.value)-->
<!--  return-->
<!--}-->

<!--const removeMethod = () => {-->
<!--  if (listItem.value.length <= 0) {-->
<!--    console.log('集合内容为空')-->
<!--    return-->
<!--  }-->
<!--  const removedItem = listItem.value.pop()-->
<!--  if (removedItem?.status === 'completed') {-->
<!--    completedCouont.value&#45;&#45;-->
<!--  }-->
<!--  totalCount.value&#45;&#45;-->
<!--}-->

<!--interface ToDoItem {-->
<!--  id: string-->
<!--  status: 'pending' | 'completed'-->
<!--  content: string-->
<!--}-->

<!--const isCompleted = (item: ToDoItem) => {-->
<!--  item.status = item.status === 'completed' ? 'pending' : 'completed'-->
<!--  if (item.status === 'completed') {-->
<!--    completedCouont.value++-->
<!--  }-->

<!--  if (item.status === 'pending') {-->
<!--    completedCouont.value&#45;&#45;;-->
<!--  }-->
<!--}-->

<!--const getContentClass = (item: ToDoItem) => {-->
<!--  // 2种实现，要么用class 的名字，要么就是返回对象{completed: true}-->
<!--  // return {-->
<!--  //   completed: item.status === 'completed',-->
<!--  // }-->

<!--  return item.status === 'completed' ? 'completed' : ''-->
<!--}-->

<!--const totalCount = ref(0)-->
<!--const completedCouont = ref(0)-->
<!--</script>-->

<!--<template>-->
<!--  <div>-->
<!--    todolist page-->
<!--    <input v-model="inputContent" />-->
<!--    <div>-->
<!--      <div>-->
<!--        <div>总数：{{ totalCount }}</div>-->
<!--        <div>完成数：{{ completedCouont }}</div>-->
<!--        <div>未完成：{{ totalCount - completedCouont }}</div>-->
<!--      </div>-->
<!--      <ul>-->
<!--        <li v-for="item in listItem" :key="item.id">-->
<!--          <input type="checkbox" v-on:change="isCompleted(item)" />-->
<!--          <span v-bind:class="getContentClass(item)">{{ item.content }}</span>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--    <button v-on:click="addMethond">add</button>-->
<!--    <button v-on:click="removeMethod">remove</button>-->
<!--  </div>-->
<!--</template>-->

<!--<style>-->
<!--.completed {-->
<!--  text-decoration: line-through;-->
<!--  color: #1f2937;-->
<!--}-->
<!--</style>-->
