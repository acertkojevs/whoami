<script setup lang="ts">
const interests = [
  { icon: '💻', name: 'Development' },
  { icon: '⚙️', name: 'Automation' },
  { icon: '🎧', name: 'Electronic music' },
  { icon: '🔌', name: 'Technology' },
]

const technologies = ['Vue.js', 'TypeScript', 'JavaScript', 'Python', 'FastAPI', 'Tailwind CSS']
</script>

<template>
  <section class="bg-[#C0C0C0] text-black p-2 font-sans flex flex-col gap-4">
    <!-- Profile -->
    <div class="flex items-center gap-3">
      <div class="w-16 h-16 bg-[#000080] flex items-center justify-center">
        <span class="text-4xl">👨‍💻</span>
      </div>

      <div>
        <h1 class="text-xl font-bold text-[#000080]">Hello, human!</h1>
        <p class="text-xs text-gray-600">Welcome to my little corner of the internet.</p>
      </div>
    </div>

    <!-- About -->
    <div
      class="bg-white p-3 border-2 border-t-gray-600 border-l-gray-600 border-r-white border-b-white"
    >
      <h2 class="text-sm font-bold text-[#000080] mb-2">ABOUT ME</h2>

      <p class="text-sm leading-relaxed">
        I'm someone who enjoys building things, experimenting with technology and finding creative
        ways to solve problems. I like learning by making actual projects rather than just reading
        about them.
      </p>
    </div>

    <!-- Interests -->
    <div>
      <h2 class="text-sm font-bold text-[#000080] mb-2">WHAT I'M INTO</h2>

      <div class="grid grid-cols-2 gap-2">
        <div
          v-for="interest in interests"
          :key="interest.name"
          class="bg-white p-2 flex items-center gap-2 border-2 border-t-gray-600 border-l-gray-600 border-r-white border-b-white"
        >
          <span>{{ interest.icon }}</span>
          <span class="text-xs font-bold">
            {{ interest.name }}
          </span>
        </div>
      </div>
    </div>

    <!-- Technologies -->
    <div>
      <h2 class="text-sm font-bold text-[#000080] mb-2">MY TOOLBOX</h2>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in technologies"
          :key="tech"
          class="bg-[#E0E0E0] border border-gray-500 px-2 py-1 text-xs"
        >
          {{ tech }}
        </span>
      </div>
    </div>

    <!-- Current project -->
    <div
      class="bg-white p-3 border-2 border-t-gray-600 border-l-gray-600 border-r-white border-b-white"
    >
      <h2 class="text-sm font-bold text-[#000080] mb-2">CURRENTLY BUILDING</h2>

      <div class="flex items-center gap-2">
        <span class="text-2xl">🖥️</span>

        <div>
          <p class="text-sm font-bold">whoami.os</p>
          <p class="text-xs text-gray-600">My personal desktop experience.</p>
        </div>
      </div>
    </div>
  </section>
</template>
