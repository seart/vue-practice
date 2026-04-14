<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Custompage from '../components/CustomPage.vue'
import SlotPage from '@/components/SlotPage.vue';
import ComposeAPIPage from '@/components/ComposeAPIPage.vue';
</script>

<template>
  <main>
    <Custompage />
    <SlotPage />
    <ComposeAPIPage></ComposeAPIPage>
    <TheWelcome />
  </main>
</template>
