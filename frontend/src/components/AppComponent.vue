<script setup lang="ts">
import { useTemplateRef, watch, ref } from 'vue'
import { useDesktopStore } from '@/stores/useDesktopStore'
import type { DesktopApp } from '@/interfaces/DesktopApp'
import { Icon } from '@iconify/vue'

const desktopStore = useDesktopStore().Applications
const selectedAppName = ref('')
const itemRefs = useTemplateRef('items')
const app = ref<HTMLDivElement | null>(null)
const offsetX = ref(0)
const offsetY = ref(0)
const selectedAppObj = ref<DesktopApp>()

function centerApp(selectedApp: HTMLDivElement) {
  desktopStore.find((element) => {
    if (element.name === selectedAppName.value) {
      element.x_axis = (window.innerWidth - selectedApp.offsetWidth) / 2
      element.y_axis = (window.innerHeight - selectedApp.offsetHeight) / 2
    }
  })
}

function getIsOpen() {
  const newArraj = desktopStore.map((element) => ({
    name: element.name,
    isOpen: element.isOpen,
  }))
  return newArraj
}

watch(
  getIsOpen,
  (newValue, oldValue) => {
    newValue.forEach((element, index) => {
      if (newValue[index]?.isOpen === true && newValue[index]?.isOpen !== oldValue[index]?.isOpen) {
        selectedAppName.value = newValue[index].name
        const foundElement = itemRefs.value?.find((element) =>
          element.classList.contains(selectedAppName.value),
        )
        if (foundElement === undefined || foundElement === null) {
          app.value = null
        } else {
          app.value = foundElement
          centerApp(app.value)
        }
      }
    })
  },
  {
    flush: 'post',
  },
)

function startDrag(e: PointerEvent, item: DesktopApp) {
  selectedAppObj.value = item

  // offset
  offsetX.value = e.clientX - item.x_axis
  offsetY.value = e.clientY - item.y_axis

  window.addEventListener('pointermove', dragging)
  window.addEventListener('pointerup', closeDrag)
}

function dragging(e: PointerEvent) {
  const posx = e.clientX - offsetX.value
  const posy = e.clientY - offsetY.value

  const totalX = ref(0)
  const totalY = ref(0)

  if (app.value) {
    totalX.value = window.innerWidth - app.value?.getBoundingClientRect().width
    totalY.value = window.innerHeight - app.value?.getBoundingClientRect().height
  }

  if (selectedAppObj.value) {
    selectedAppObj.value.x_axis = Math.max(Math.min(posx, totalX.value), 0)
    selectedAppObj.value.y_axis = Math.max(Math.min(posy, totalY.value), 0)
  }
}

function closeDrag() {
  window.removeEventListener('pointermove', dragging)
  window.removeEventListener('pointerup', closeDrag)
}
</script>

<template>
  <template v-for="item in desktopStore" :key="item.name">
    <template v-if="item.isOpen">
      <div
        class="absolute w-200 bg-[#D9D1EE]"
        ref="items"
        :style="{ top: `${item.y_axis}px`, left: `${item.x_axis}px` }"
        :class="`${item.name}`"
      >
        <div
          class="flex flex-row justify-between align-middle px-2 py-1 bg-linear-to-r from-[#68419B] to-[#B265AD]"
          @pointerdown="startDrag($event, item)"
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
              @click="item.isOpen = false"
            >
              <Icon icon="akar-icons:cross" class="text-[#302547] w-3 h-3" />
            </button>
          </div>
        </div>
        <div class="flex flex-row justify-between gap-2"></div>
      </div>
    </template>
  </template>
</template>
