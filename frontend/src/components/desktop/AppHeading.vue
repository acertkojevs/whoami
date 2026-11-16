<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { DesktopApp } from '@/interfaces/DesktopApp'
import { ref } from 'vue'
import { useDesktopStore } from '@/stores/useDesktopStore'
import { onMounted } from 'vue'

const props = defineProps<{
  item: DesktopApp
}>()

const desktopStore = useDesktopStore()
const app = ref<HTMLDivElement | null>(null)
const offset = ref({ x: 0, y: 0 })

function startDrag(e: PointerEvent) {
  // offset
  offset.value.x = e.clientX - props.item.x_axis
  offset.value.y = e.clientY - props.item.y_axis

  window.addEventListener('pointermove', dragging)
  window.addEventListener('pointerup', closeDrag)
}

function dragging(e: PointerEvent) {
  const posx = e.clientX - offset.value.x
  const posy = e.clientY - offset.value.y

  let maxX = 0
  let maxY = 0

  if (app.value) {
    maxX = window.innerWidth - app.value.getBoundingClientRect().width
    maxY = window.innerHeight - app.value.getBoundingClientRect().height
  }

  const x = Math.max(Math.min(posx, maxX), 0)
  const y = Math.max(Math.min(posy, maxY), 0)

  desktopStore.updateAppPosition(props.item.name, x, y)
}

function closeDrag() {
  window.removeEventListener('pointermove', dragging)
  window.removeEventListener('pointerup', closeDrag)
}

function closeApp(item: DesktopApp) {
  item.isOpen = false
}

onMounted(() => {
  if (app.value) {
    desktopStore.updateAppPosition(
      props.item.name,
      (window.innerWidth - app.value.offsetWidth) / 2,
      (window.innerHeight - app.value.offsetHeight) / 2,
    )
  }
})
</script>
<template>
  <div
    class="absolute w-200 bg-[#D9D1EE] p-0.5"
    ref="app"
    :style="{ top: `${item.y_axis}px`, left: `${item.x_axis}px`, 'z-index': `${item.z_index}` }"
    :class="`${item.name}`"
  >
    <div
      class="flex flex-row justify-between align-middle px-2 py-1 bg-linear-to-r from-[#68419B] to-[#B265AD]"
      @pointerdown="startDrag($event)"
    >
      <div>{{ item.name }}</div>
      <div class="flex flex-row gap-1.5 justify-center">
        <button
          class="flex items-center justify-center bg-[#D9D1EE] w-6 h-6 border-l border-t-[#F6EDFF] border-l-[#F6EDFF] cursor-pointer"
          @pointerdown.stop
        >
          <Icon icon="akar-icons:minus" class="text-[#302547] w-3 h-3" />
        </button>
        <button
          class="flex items-center justify-center bg-[#D9D1EE] w-6 h-6 border-l border-t-[#F6EDFF] border-l-[#F6EDFF] cursor-pointer"
          @pointerdown.stop
        >
          <Icon icon="akar-icons:square" class="text-[#302547] w-3 h-3" />
        </button>
        <button
          class="flex items-center justify-center bg-[#D9D1EE] w-6 h-6 border-l border-t-[#F6EDFF] border-l-[#F6EDFF] cursor-pointer"
          @pointerdown.stop
          @click="closeApp(item)"
        >
          <Icon icon="akar-icons:cross" class="text-[#302547] w-3 h-3" />
        </button>
      </div>
    </div>
    <div class="p-3">
      <slot />
    </div>
  </div>
</template>
