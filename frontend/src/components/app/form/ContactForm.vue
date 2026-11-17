<template>
  <form
    class="flex flex-col gap-3 bg-[#C0C0C0] p-3 border border-t-white border-l-white border-r-gray-600 border-b-gray-600"
  >
    <!-- Subject -->
    <div class="flex flex-col gap-1">
      <label for="subject" class="text-xs font-bold text-black">
        Subject <span class="font-normal text-gray-600">(optional)</span>
      </label>

      <input
        id="subject"
        type="text"
        maxlength="100"
        class="bg-white border border-t-gray-600 border-l-gray-600 border-r-white border-b-white p-2 text-sm text-black outline-none focus:border-[#000080]"
        placeholder="What's this about?"
      />
    </div>

    <!-- Message -->
    <div class="flex flex-col gap-1">
      <label for="message" class="text-xs font-bold text-black"> Message </label>

      <textarea
        id="message"
        required
        maxlength="1000"
        class="h-36 resize-none bg-white border border-t-gray-600 border-l-gray-600 border-r-white border-b-white p-2 text-sm text-black outline-none focus:border-[#000080]"
        placeholder="Write something..."
      ></textarea>

      <span class="text-[10px] text-gray-600 text-right"> Maximum 1000 characters </span>
    </div>

    <!-- Footer -->
    <div class="flex justify-between items-center pt-2">
      <span class="text-xs text-gray-600"> Ready to send. </span>

      <button
        type="submit"
        class="bg-[#C0C0C0] px-5 py-1 text-sm text-black border border-t-white border-l-white border-r-gray-600 border-b-gray-600 active:border-t-gray-600 active:border-l-gray-600 active:border-r-white active:border-b-white cursor-pointer"
      >
        Send
      </button>
    </div>
  </form>
</template>
