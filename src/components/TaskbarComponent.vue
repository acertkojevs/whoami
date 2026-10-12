<script setup lang="ts">
import { ref } from 'vue'

interface NavItem {
  name: string
}

const navItems = ref<NavItem[]>([
  { name: 'test' },
  { name: 'test2' },
  { name: 'test3' },
  { name: 'test4' },
])

function deleteNavItem(itemName: string) {
  const index = navItems.value.findIndex((itemname) => itemname.name === itemName)

  if (index !== -1) navItems.value.splice(index, 1)
}
</script>

<template>
  <div class="flex flex-row w-full items-center gap-20 p-2">
    <div class="flex flex-row gap-5 px-2 items-center w-full">
      <div
        v-for="item in navItems"
        :key="item.name"
        class="flex flex-row justify-between items-center border w-1/4"
      >
        <div>{{ item.name }}</div>
        <span class="border p-1 cursor-pointer" @click="deleteNavItem(item.name)">Delete X</span>
      </div>
    </div>
  </div>
</template>
