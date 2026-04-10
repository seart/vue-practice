<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

const count = ref(1)

onMounted(() => {
  setInterval(() => {
    count.value += 1
  }, 1000)
})

const pageTitle = ref('hello')
// 反转字符串
const inverseTitle = () => {
  pageTitle.value = pageTitle.value.split('').reverse().join('')
}

const show = ref(true)
// 隐藏/显示
const hideShow = () => {
  show.value = !show.value
}
</script>

<template>
  <div class="custom">
    {{ count }}

    <span v-if="show">{{ pageTitle }}</span>
    <button v-on:click="inverseTitle">inverse</button>
    <button v-on:click="hideShow">hide/show</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
