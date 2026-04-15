<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';


const store = useCounterStore();
const incrementCount = store.increment;
const updateName = store.updateName;
</script>



<template>
  <h1>Pinia Store Example</h1>
  <p>{{ store.count }} -- {{ store.name }}</p>
  <button @click="incrementCount">Increment Count</button>
  <button @click="updateName('Updated Counter Store')">Update Store Name</button>

</template>
