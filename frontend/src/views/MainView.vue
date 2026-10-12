<script setup lang="ts">
import AppComponent from '@/components/AppComponent.vue'
import SideDockComponent from '@/components/SideDockComponent.vue'
</script>
<template>
  <div class="relative w-full h-screen">
    <!-- <div ref="move" class="absolute w-2xl h-xl top-20 right-12.5">item which will be draggable</div> -->
    <SideDockComponent />
    <AppComponent />
  </div>
</template>
