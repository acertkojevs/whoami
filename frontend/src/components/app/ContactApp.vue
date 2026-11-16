<script setup lang="ts">
import ContactForm from '@/components/app/form/ContactForm.vue'
</script>

<template>
  <section class="text-gray-700">
    <div class="mb-4 border-b border-gray-400 pb-3">
      <h1 class="text-xl font-bold">New message</h1>
      <p class="text-sm text-gray-500">Have something to say? Leave me a message.</p>
    </div>

    <ContactForm />
  </section>
</template>
