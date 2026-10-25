<script setup lang="ts">
import { useDesktopStore } from '@/stores/useDesktopStore'

const desktopStore = useDesktopStore().Applications

const today = new Date()

const month = today.toLocaleString('default', { month: 'short' })
const day = today.getDate()
const time = today.toLocaleTimeString('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
})
</script>

<template>
  <div class="flex flex-row w-full items-center gap-20 px-4 py-2 bg-[#B7A9CE]">
    <div class="flex flex-row gap-5 px-2 items-center w-full">
      <template v-for="item in desktopStore" :key="item.name">
        <template v-if="item.isOpen">
          <div
            class="flex shrink-0 items-center w-80 justify-between border-t border-l border-t-[#F6EDFF] border-l-[#F6EDFF] px-2 bg-[#CBBFDF] text-[#302547]"
          >
            <div>{{ item.name }}</div>
            <span class="p-1 cursor-pointer" @click="item.isOpen = false">Delete X</span>
          </div>
        </template>
      </template>
    </div>
    <div
      class="flex shrink-0 items-center px-2 gap-4 whitespace-nowrap p-1 border-t border-l border-t-[#8C77A7] border-l-[#8C77A7]"
    >
      <div>{{ time }}</div>
      <div>{{ month }} {{ day }}</div>
    </div>
  </div>
</template>
