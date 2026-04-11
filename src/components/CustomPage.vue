<script setup lang="ts">
import { reactive, ref } from 'vue'

const list = ref(['hell', 'world', 'one', 'two', 'three'])
const object = reactive({
  name: 'vue',
  age: 12,
  sex: 'W',
})

const count = ref(0)
const handleBtnClick = (event) => {
  console.log('event:', event)
  count.value += 1
}
</script>

<template>
  <div class="custom">
    <template v-for="(item, index) in list" :key="index">
      <div v-if="item !== 'one'">{{ item }} -- {{ index }}</div>
    </template>

    <div v-for="(value, key, index) in object" :key="index">
      <div v-if="key !== 'age'">{{ key }}:{{ value }}--{{ index }}</div>
    </div>

    <div>{{ count }}</div>
    <button @click="handleBtnClick">add number</button>

  </div>
</template>
