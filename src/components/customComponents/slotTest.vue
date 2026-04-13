<script setup lang="ts">

const contnet = '这是子组件 具名 Content内容';

</script>

<template>

  <div>
    <slot name="header">
      <button>这是子组件默认 header 具名插槽内容</button>
    </slot>

    <div>{{ contnet }}</div>

    <slot name="footer">
      <button>这是子组件默认 footer 具名插槽内容</button>
    </slot>


  </div>


</template>
