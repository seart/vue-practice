<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const count = ref(1)

let timere: ReturnType<typeof setInterval> | null = null

const stopTimer = () => {
  if (timere) {
    clearInterval(timere)
  }
}

const startTimer = () => {
  stopTimer()
  timere = setInterval(() => {
    count.value += 1
  }, 1000)
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
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

// --------------------------------------------------

const listItem = ref(['apple', 'paer', 'orange'])
const inputText = ref('')
const add = () => {
  if (inputText.value == '') {
    return
  }
  listItem.value.push(inputText.value)
  inputText.value = ''
}

const remove = () => {
  listItem.value.pop()
}
</script>

<template>
  <div class="custom">
    {{ count }}

    <span v-if="show">{{ pageTitle }}</span>
    <button v-on:click="inverseTitle">inverse</button>
    <button v-on:click="hideShow">hide/show</button>
    <div></div>

    <ul>
      <li v-for="(item, index) in listItem" :key="index">{{ index + 1 }}.{{ item }}</li>
    </ul>
    <div>
      <input type="text" v-model="inputText" />
      <button v-on:click="add">add</button>
      <button v-on:click="remove">remove</button>
    </div>
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
