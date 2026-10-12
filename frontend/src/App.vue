<script setup lang="ts">
import FooterView from './views/FooterView.vue'
import MainView from './views/MainView.vue'
</script>

<template>
  <div class="relative min-h-screen">
    <div class="">
      <MainView />
    </div>
    <FooterView class="absolute bottom-0 w-100%" />
  </div>
</template>
