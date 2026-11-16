import { defineStore } from 'pinia'
import type { DesktopApp } from '@/interfaces/DesktopApp'
import { ref } from 'vue'

export const useDesktopStore = defineStore('desktopStore', () => {
  const Applications = ref<DesktopApp[]>([
    {
      name: 'About',
      icon_img: 'About',
      isOpen: false,
      x_axis: 0,
      y_axis: 0,
      z_index: 0,
    },
    {
      name: 'Stats',
      icon_img: 'Stats',
      isOpen: false,
      x_axis: 0,
      y_axis: 0,
      z_index: 0,
    },
    {
      name: 'Music',
      icon_img: 'Music',
      isOpen: false,
      x_axis: 0,
      y_axis: 0,
      z_index: 0,
    },
    {
      name: 'Contact',
      icon_img: 'Contact',
      isOpen: false,
      x_axis: 0,
      y_axis: 0,
      z_index: 0,
    },
    {
      name: 'Settings',
      icon_img: 'Settings',
      isOpen: false,
      x_axis: 0,
      y_axis: 0,
      z_index: 0,
    },
  ])

  function updateAppPosition(appName: string, x: number, y: number) {
    const app = Applications.value.find((app) => app.name === appName)

    if (app) {
      app.x_axis = x
      app.y_axis = y
    }
  }

  function openApp(appName: string) {
    const app = Applications.value.find((element) => element.name === appName)
    if (app) {
      app.isOpen = true
      // app.z_index = +1
    }
  }

  return {
    Applications,
    updateAppPosition,
    openApp,
  }
})
