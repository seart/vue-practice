<script setup lang="ts">
import { ref } from 'vue'
import helloTs from './customComponents/helloTs.vue'

const title = ref('这是父组件')
</script>

<template>
  <!-- 局部组件（最常用） -->
  <div class="custom">
    {{ title }}
    <helloTs />
    <world-ts/>
  </div>
</template>
