<script setup lang="ts">
import { reactive, ref } from 'vue'

const checkbox =ref(true);

const inputText = ref('haha');


const message = ref('');


const inputTextModifiers = ref('');
</script>

<template>
  <div class="custom">

    <div>
      {{checkbox}}
      <input type="checkbox" v-model="checkbox" />
    </div>

    <div>
      {{inputText}}
      <input v-model="inputText" />
    </div>

  <div>
    {{ message }}
    <select v-model="message">
      <option disabled value="">请选择</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  </div>

  <div>
    {{typeof inputTextModifiers}} --
  {{ inputTextModifiers }}
    <input v-model.trim.number.lazy="inputTextModifiers" />
  </div>


  </div>
</template>
