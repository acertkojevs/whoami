<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'

const isStartMenuOpen = ref(false)
const taskbarRef = useTemplateRef('taskbarRef')

function handleClickOutside(event: MouseEvent) {
  if (!taskbarRef.value?.contains(event.target as Node)) {
    isStartMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="taskbarRef" class="relative">
    <button
      @click="isStartMenuOpen = !isStartMenuOpen"
      class="bg-[#D9D1EE] w-20 flex flex-row items-center justify-center gap-2 py-0.5 cursor-pointer border-2 border-t-[#F6EDFF] border-l-[#F6EDFF] border-r-[#302547] border-b-[#302547]"
    >
      <Icon icon="iconoven:sparkles" class="text-[#302547] w-4 h-4 flex" />
      <p class="text-[#302547]">start</p>
    </button>
    <div v-if="isStartMenuOpen" class="absolute bottom-full flex flex-row">
      <!-- Left sidebar -->
      <div class="w-6 h-48 bg-[#302547] flex items-end justify-center">
        <span class="[writing-mode:vertical-rl] rotate-180 pt-2"> whoami.os First edition </span>
      </div>

      <!-- Right menu -->
      <ul class="bg-[#D9D1EE] w-40">
        <li class="hover:bg-[#C5B8E5] cursor-pointer p-2">About</li>
        <li class="hover:bg-[#C5B8E5] cursor-pointer p-2">Settings</li>
        <li class="hover:bg-[#C5B8E5] cursor-pointer p-2">Stats</li>
      </ul>
    </div>
  </div>
</template>
