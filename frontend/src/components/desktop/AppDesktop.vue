<script setup lang="ts">
import { useDesktopStore } from '@/stores/useDesktopStore'
import AppHeading from './AppHeading.vue'
import AboutApp from '../app/AboutApp.vue'
import SettingsApp from '../app/SettingsApp.vue'
import StatsApp from '../app/StatsApp.vue'
import MusicApp from '../app/MusicApp.vue'
import MessageApp from '../app/MessageApp.vue'

const desktopStoreApps = useDesktopStore().Applications

const appComponents = {
  About: AboutApp,
  Settings: SettingsApp,
  Stats: StatsApp,
  Music: MusicApp,
  Message: MessageApp,
}
</script>

<template>
  <AppHeading
    v-for="app in desktopStoreApps.filter((app) => app.isOpen)"
    :key="app.name"
    :item="app"
  >
    <component :is="appComponents[app.name]" />
  </AppHeading>
</template>
