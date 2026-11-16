<script setup lang="ts">
import AppDesktop from '@/components/desktop/AppDesktop.vue'
import SideDockComponent from '@/components/SideDockComponent.vue'
</script>
<template>
  <div class="relative w-full h-screen overflow-hidden">
    <SideDockComponent />
    <AppDesktop />
  </div>
</template>
