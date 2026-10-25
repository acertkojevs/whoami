<script setup lang="ts">
import FooterView from './views/FooterView.vue'
import MainView from './views/MainView.vue'
</script>

<template>
  <div class="relative min-h-screen">
    <MainView />
    <FooterView class="absolute bottom-0 w-100%" ref="height" />
  </div>
</template>
