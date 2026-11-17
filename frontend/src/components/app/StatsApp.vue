<script setup lang="ts">
const stats = [
  { label: 'Total visits', value: '1,284', icon: '👥' },
  { label: 'App openings', value: '3,492', icon: '🖥️' },
  { label: 'Messages received', value: '23', icon: '✉️' },
]
</script>

<template>
  <section class="bg-[#C0C0C0] text-black p-2 font-sans">
    <!-- Header -->
    <div class="flex justify-between items-center mb-3">
      <div>
        <h2 class="font-bold text-sm">WHOAMI.OS - TRAFFIC REPORT</h2>
      </div>
    </div>

    <!-- Statistics list -->
    <div class="flex flex-col gap-2 mb-3">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="flex items-center gap-3 bg-white p-3 border-2 border-t-gray-600 border-l-gray-600 border-r-white border-b-white"
      >
        <div class="bg-[#C0C0C0] p-2">
          <span class="text-[#000080] text-xl">
            {{ stat.icon }}
          </span>
        </div>

        <div class="flex flex-col">
          <span class="text-xs text-gray-600 uppercase font-bold">
            {{ stat.label }}
          </span>

          <span class="text-2xl font-bold text-[#000080]">
            {{ stat.value }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
