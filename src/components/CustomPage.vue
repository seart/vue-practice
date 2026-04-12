<script setup lang="ts">
import { ref } from 'vue'
import helloTs from './customComponents/helloTs.vue'

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
</script>

<template>
  <!-- 局部组件（最常用）-->
  <div class="custom">
    {{ title }}
    // 这里 content 是 false ，就可以省略不写
    <helloTs v-bind:message="messageContent" :funcs="funcs" :typeName="typeName" />
    // 全局组件, 传输对象类型，使用- 连接，会自动转成驼峰命名
    <world-ts v-bind:my-world="myWorld" />
  </div>
</template>
