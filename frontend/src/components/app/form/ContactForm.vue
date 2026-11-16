<template>
  <form class="flex flex-col gap-3 border p-4">
    <div class="flex justify-between items-center">
      <h3 class="font-semibold">New message</h3>
      <span class="text-xs text-gray-500 uppercase">mail.io</span>
    </div>

    <div class="flex flex-col gap-1">
      <label for="subject" class="text-sm text-gray-700">
        Subject <span class="text-gray-400">(optional)</span>
      </label>
      <input
        id="subject"
        type="text"
        maxlength="100"
        class="border border-gray-300 bg-white rounded-md p-2 text-gray-700"
        placeholder="What's this about?"
      />
    </div>

    <div class="flex flex-col gap-1">
      <label for="message" class="text-sm text-gray-700">Message</label>
      <textarea
        id="message"
        required
        maxlength="1000"
        class="h-36 resize-none border bg-white border-gray-300 rounded-md p-2 text-gray-700"
        placeholder="Write something..."
      ></textarea>
      <span class="text-xs text-gray-500 text-right">Maximum 1000 characters</span>
    </div>

    <div class="flex justify-between items-center pt-2">
      <span class="text-xs text-gray-500">Ready to send.</span>
      <button type="submit" class="bg-gray-700 text-white px-4 py-2 cursor-pointer">Send</button>
    </div>
  </form>
</template>
