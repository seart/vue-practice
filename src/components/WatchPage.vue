<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted, ref, watch, watchEffect } from 'vue';

const inputValue = ref('');
watch(inputValue, (newValue, oldValue) => {
  console.log('旧值是:', oldValue, ' 新值是:', newValue);
})


const inputObject = ref({
  name: 'zhangsan',
  age: 18
});
// 下面 2 个监听是分开来的，不会相互影响

// 只针对对象的某个属性进行监听
watch(() => inputObject.value.name, (newValue, oldValue) => {
  console.log('旧值是:', oldValue, ' 新值是:', newValue);
})

// 对整个对象的属性进行监听
// watch(inputObject, (newValue, oldValue) => {
//     console.log('旧值是:', oldValue, ' 新值是:', newValue);
// }, { deep: true })


// 监听多个数据源  前面是新值，后面是旧值，多个的话按照顺序排
// watch([() => inputObject.value.name, inputValue], ([objNewValue, inputNewValue], [objOldValue, inputOldValue]) => {
//     console.log('Object 旧值是:', objOldValue, ' 新值是:', objNewValue);
//     console.log('inputValue 旧值是:', inputOldValue, ' 新值是:', inputNewValue);
// })


// watchEffect 默认会立即执行一次,监听上面声明的所有的响应式数据
// watchEffect(() => {
//     console.log('inputValue :', inputValue.value);
//     console.log('inputObject name:', inputObject.value.name, 'inputObject age:', inputObject.value.age);
// })


</script>


<template>

  <div>
    <p>watch监听 输入的内容是: {{ inputValue }}</p>
    <input v-model="inputValue" placeholder="请输入内容" />
    <p />
    <!-- ---------------------------------------------- -->
    <p>watch监听 输入的对象是: {{ inputObject }}</p>
    <input v-model="inputObject.name" />
    <input v-model="inputObject.age" />
  </div>
  <hr />
</template>
