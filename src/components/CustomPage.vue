<script setup lang="ts">
import { ref } from 'vue'
import helloTs from './customComponents/helloTs.vue'
import EmitTs from './customComponents/emitTs.vue'

const title = ref('这是父组件')

const messageContent = ref('父组件传给子组件 动态数据')
const funcs = () => {
  alert('this is function')
}
const typeName = ref('Monday')

const myWorld = ref({
  firstName: 'hello world',
  age: 20,
  sex: 'woman',
})

// 下面是使用 emit 进行数据回调
const helloWorld = ref({
  title: 'hello world',
  num: 100,
})
const parentUpdateContent = () => {
  helloWorld.value.num++
  helloWorld.value.title = ' emit method call change title and num:' + helloWorld.value.num
}
</script>

<template>
  <!-- 局部组件（最常用）-->
  <div class="custom">
    {{ title }}
    // 这里 content 是 false ，就可以省略不写
    <helloTs v-bind:message="messageContent" :funcs="funcs" :typeName="typeName" />
    <!-- 全局组件, 传输对象类型，使用- 连接，会自动转成驼峰命名 -->
    <world-ts v-bind:my-world="myWorld" />


    <!-- emit 进行回调数据传递，父组件监听事件来改变父组件的值 -->
    <div>emit父组件的值：{{ helloWorld.title }}</div>
    <EmitTs :helloWorld="helloWorld" @updateContent="parentUpdateContent" />
  </div>
</template>
