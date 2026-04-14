<script setup lang="ts">
import { computed, ref } from 'vue';

const inputValue = ref('');
const list = ref<string[]>([]);
const addInput = () => {
  console.log('输入的内容是:', inputValue.value);
  list.value.push(inputValue.value);
  inputValue.value = '';
};

const newList = computed(() => {
  // `${...}` 是 js 字符串拼接的一种写法   list.value.map(item => `${item} -- ${item} hello`)
  return list.value.map((data) => data + '--' + data + 'hello');
})

</script>

<template>
  <div>
    <p>输入的内容是: {{ inputValue }}</p>
    <input v-model="inputValue" placeholder="请输入内容" />
    <button v-on:click="addInput">add</button>
    <ul>
      <li v-for="(item, index) in newList" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
