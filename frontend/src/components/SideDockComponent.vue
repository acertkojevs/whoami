<script setup lang="ts">
import { useDesktopStore } from '@/stores/useDesktopStore'

const desktopStore = useDesktopStore()
const Apps = desktopStore.Applications
</script>

<template>
  <div class="fixed flex flex-col gap-10 w-20 top-1/2 -translate-y-1/2 p-4">
    <div v-for="item in Apps" :key="item.name">
      <button @click="desktopStore.openApp(item.name)" class="border">Open {{ item.name }}</button>
      <div>{{ item.name }}</div>
      <div>{{ item.isOpen }}</div>
      <div>{{ item.x_axis }}</div>
      <div>{{ item.y_axis }}</div>
    </div>
  </div>
</template>
