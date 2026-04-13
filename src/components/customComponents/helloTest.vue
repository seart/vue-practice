<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  typeName: {
    type: String,
    validator: (value: string) => {
      return value.length > 5
    },
    default: 'sunday',
    required: true,
  },
  content: {
    type: String,
    required: false,
    validator: (value: string) => {
      return value.length > 1
    },
  },
  funcs: {
    type: Function as PropType<() => void>,
  },
  message: String,
})
</script>

<template>
  <div>
    我是子组件,{{ props.content }}

    <div>动态传递的参数：{{ props.message }}</div>
    <div v-on:click="props.funcs">Dynamic Parameter Passing have been called</div>
    <div>类型名称：{{ props.typeName }} 增加了一些校验</div>
  </div>
</template>
