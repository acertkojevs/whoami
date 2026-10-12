<script setup lang="ts">
import { useDesktopStore } from '@/stores/useDesktopStore'
import type { DesktopApp } from '@/interfaces/DesktopApp'

const desktopStore = useDesktopStore().Applications

function openApp(item: DesktopApp) {
  item.isOpen = true
}
</script>

<template>
  <div class="fixed flex flex-col gap-10 w-20 top-1/2 -translate-y-1/2 p-4">
    <div v-for="item in desktopStore" :key="item.name">
      <button @click="openApp(item)" class="border">Open {{ item.name }}</button>
      <div>{{ item.name }}</div>
      <div>{{ item.isOpen }}</div>
      <div>{{ item.x_axis }}</div>
      <div>{{ item.y_axis }}</div>
    </div>
  </div>
</template>
