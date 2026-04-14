<script setup lang="ts">
import { onMounted, provide, ref } from 'vue';
import SonTest from './customComponents/sonTest.vue';

// key ,value 的形式
provide('myData', '这是父组件提供的数据 provoide');


// template ref
const hello = ref<HTMLDivElement | null>(null);
onMounted(() => {
  if (hello.value) {
    console.log('template ref hello:', hello.value);
  }
});


</script>

<template>
  <son-test />

  <div ref="hello">hello world</div>

</template>
