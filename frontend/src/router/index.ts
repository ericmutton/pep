import { createRouter, createWebHistory } from 'vue-router'
import DiscoveryView from '@/views/DiscoveryView.vue'
import LibraryView from '@/views/LibraryView.vue'
import SettingsView from '@/views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/discovery',
      name: 'discovery',
      component: DiscoveryView
    },
    {
      path: '/library',
      name: 'library',
      component: LibraryView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    }
  ]
})

export default router
