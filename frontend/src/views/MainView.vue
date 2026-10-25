<script setup lang="ts">
import AppComponent from '@/components/AppComponent.vue'
import SideDockComponent from '@/components/SideDockComponent.vue'
</script>
<template>
  <div class="relative w-full h-screen overflow-hidden">
    <SideDockComponent />
    <AppComponent />
  </div>
</template>
