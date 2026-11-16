<template>
  <form class="flex flex-col border p-4">
    <label class="text-gray-700">Subject (optional)</label>
    <input type="text" class="text-gray-700" placeholder="Subject..." />

    <label class="text-gray-700">Message</label>
    <textarea
      class="text-gray-700 h-32 resize-none border-gray-300 rounded-md p-2"
      placeholder="Your message what you want to deliver..."
    ></textarea>
  </form>
  <div class="flex flex-row justify-end gap-2 pt-2">
    <button class="bg-gray-700 p-2 w-20 cursor-pointer">Send</button>
  </div>
</template>
