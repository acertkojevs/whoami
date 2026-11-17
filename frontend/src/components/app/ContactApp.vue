<script setup lang="ts">
import ContactForm from '@/components/app/form/ContactForm.vue'
</script>

<template>
  <section class="bg-[#C0C0C0] text-black p-2 font-sans">
    <div class="mb-4 pb-3">
      <h1 class="text-lg font-bold text-[#000080]">New message</h1>

      <p class="text-xs text-gray-600 mt-1">Have something to say? Leave me a message.</p>
    </div>

    <ContactForm />
  </section>
</template>
