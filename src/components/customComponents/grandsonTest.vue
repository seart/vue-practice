<script setup lang="ts">
import { inject } from 'vue';

const myData = inject('myData', '孙子组件的默认值');

</script>

<template>
  <div>
    <p>孙子组件接收到的数据: {{ myData }}</p>
  </div>
</template>
