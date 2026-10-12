<script setup lang="ts">
import { useDesktopStore } from '@/stores/useDesktopStore'

const desktopStore = useDesktopStore().Applications
</script>

<template>
  <template v-for="item in desktopStore" :key="item.name">
    <template v-if="item.isOpen">
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-50 border">
        <div class="cursor-grab">Draggable</div>
        <div class="flex flex-row justify-between gap-2 border-t">
          <div>{{ item.name }}</div>
          <button @click="item.isOpen = false">Close</button>
        </div>
      </div>
    </template>
  </template>
</template>
