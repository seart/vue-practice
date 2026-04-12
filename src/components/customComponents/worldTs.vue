<script setup lang="ts">
import { ref, type PropType } from 'vue'

const props = defineProps({
  myWorld: {
    type: Object as PropType<{
      firstName: string
      age: number
      sex: string
    }>,
    required: true,
  },
})

const age2 = ref(props.myWorld.age)
</script>

<template>
  <div>我要被全局组件引用</div>
  <div v-for="(value, key) in props.myWorld" :key="key">{{ key }}: {{ value }}</div>

  <!-- 下面这种写法是vue 不推荐,且不允许的，虽然不会报错，建议是子组件使用 emit
  传递事件，父组件监听事件来改变父组件的值 -->
  <!-- <button @click="props.myWorld.age++">点击增加年龄：{{ props.myWorld.age }}</button> -->

  <button v-on:click="age2++">这是子组件单独私有数据：{{ age2 }}</button>
</template>
