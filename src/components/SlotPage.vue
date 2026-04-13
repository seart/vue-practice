<script setup lang="ts">
import { ref } from 'vue';
import SlotTest from './customComponents/slotTest.vue';
import SlotScopeTest from './customComponents/slotScopeTest.vue';

const scopeData = ref({
  name: 'hello world',
});

</script>

<template>

  <SlotTest>
    <!-- 插槽占用 两种写法，一种是#xxxx， 一种是 v-slot:xxxx -->
    <!-- <template #header>
      <div>这是父组件中 header插槽</div>
    </template> -->

    <template v-slot:footer>
      <div>这是父组件中 footer插槽</div>
    </template>

  </SlotTest>
  <hr />
  <SlotScopeTest v-bind:scopeData="scopeData" v-slot="{ aa }">
    <span>作用域插槽：{{ aa }} </span>
  </SlotScopeTest>

</template>
