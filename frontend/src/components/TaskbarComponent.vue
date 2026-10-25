<script setup lang="ts">
import { useDesktopStore } from '@/stores/useDesktopStore'

const desktopStore = useDesktopStore().Applications
</script>

<template>
  <div class="flex flex-row w-full items-center gap-20 p-2">
    <div class="flex flex-row gap-5 px-2 items-center w-full">
      <template v-for="item in desktopStore" :key="item.name">
        <template v-if="item.isOpen">
          <div>{{ item.name }}</div>
          <span class="border p-1 cursor-pointer" @click="item.isOpen = false">Delete X</span>
        </template>
      </template>
    </div>
  </div>
</template>
