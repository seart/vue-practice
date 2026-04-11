<script setup lang="ts">
import { ref } from 'vue'
import helloTs from './customComponents/helloTs.vue'

const title = ref('这是父组件')

const messageContent = ref('父组件传给子组件 动态数据')
const funcs = () => {
  alert('this is function')
}
const typeName = ref('Monday')
</script>

<template>
  <!-- 局部组件（最常用）-->
  <div class="custom">
    {{ title }}
    // 这里 content 是 false ，就可以省略不写
    <helloTs v-bind:message="messageContent" :funcs="funcs" :typeName="typeName" />
    // 全局组件
    <world-ts />
  </div>
</template>
