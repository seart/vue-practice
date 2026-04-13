<script setup lang="ts">
import { computed } from 'vue';



// const props = defineProps<({
//   scopeData: {
//     name: string;
//   },
// })>()

// 这里返回了一个对象，并不是字符串
const cust = computed(() => ({
  name: ['one', 'two', 'three']
}))

</script>

<template>
  <div>
    <slot v-for="item in cust.name" v-bind:aa="item" />
  </div>

</template>
