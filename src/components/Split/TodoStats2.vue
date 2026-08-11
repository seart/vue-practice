<script setup lang="ts">
const props = defineProps({
  totalCount1234: {
    type: Number,
    default: 0,
  },
  finishCount:{
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div>总数：{{ props.totalCount1234 }}</div>
  <div>完成数：{{ props.finishCount }}</div>
  <div>未完成数：{{ props.totalCount1234 -  props.finishCount }}</div>
</template>

<style scoped></style>
