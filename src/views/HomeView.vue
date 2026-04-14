<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Custompage from '../components/CustomPage.vue'
import SlotPage from '@/components/SlotPage.vue';
import ComposeAPIPage from '@/components/ComposeAPIPage.vue';
import WatchPage from '@/components/WatchPage.vue';
</script>

<template>
  <main>
    <Custompage />
    <SlotPage />
    <ComposeAPIPage />
    <WatchPage />
    <TheWelcome />
  </main>
</template>
