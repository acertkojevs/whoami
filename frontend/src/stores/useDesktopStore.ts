import { defineStore } from 'pinia'
import type { DesktopApp } from '@/interfaces/DesktopApp'
import { ref } from 'vue'

export const useDesktopStore = defineStore('desktopStore', () => {
  const Applications = ref<DesktopApp[]>([
    {
      name: 'test',
      icon_img: 'test',
      isOpen: false,
      x_axis: 0,
      y_axis: 0,
    },
    {
      name: 'spotify',
      icon_img: 'spotify',
      isOpen: false,
      x_axis: 0,
      y_axis: 0,
    },
  ])

  function openApp(appName: string) {
    const app = Applications.value.find((element) => element.name === appName)
    if (app) {
      app.isOpen = true
    }
  }

  return {
    Applications,
    openApp,
  }
})
