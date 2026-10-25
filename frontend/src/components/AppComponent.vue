<script setup lang="ts">
import { useTemplateRef, watch, ref } from 'vue'
import { useDesktopStore } from '@/stores/useDesktopStore'
import type { DesktopApp } from '@/interfaces/DesktopApp'

const desktopStore = useDesktopStore().Applications
const selectedAppName = ref('')
const itemRefs = useTemplateRef('items')
const app = ref<HTMLDivElement | null>(null)
const pointerYStartup = ref(0)
const pointerXStartup = ref(0)
const selectedItem = ref(null)
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
  console.log('Nobīde:', offsetX.value, offsetY.value)

  window.addEventListener('pointermove', dragging)
  window.addEventListener('pointerup', closeDrag)
}

function dragging(e: PointerEvent) {
  const posx = e.clientX - offsetX.value
  const posy = e.clientY - offsetY.value
  console.log('element x and y', e.clientX, e.clientY)

  if (selectedAppObj.value) {
    selectedAppObj.value.x_axis = posx
    selectedAppObj.value.y_axis = posy
  }
}

function closeDrag() {
  console.log('released')
  window.removeEventListener('pointermove', dragging)
  window.removeEventListener('pointerup', closeDrag)
}
</script>

<template>
  <template v-for="item in desktopStore" :key="item.name">
    <template v-if="item.isOpen">
      <div
        class="absolute w-50 border"
        ref="items"
        :style="{ top: `${item.y_axis}px`, left: `${item.x_axis}px` }"
        :class="`${item.name}`"
      >
        <div class="cursor-grab" @pointerdown="startDrag($event, item)">Draggable</div>
        <div class="flex flex-row justify-between gap-2 border-t">
          <div>{{ item.name }}</div>
          <button @click="item.isOpen = false">Close</button>
          <div>Y = {{ item.y_axis }}; X = {{ item.x_axis }}</div>
        </div>
      </div>
    </template>
  </template>
</template>
