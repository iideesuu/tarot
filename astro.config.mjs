import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'

export default defineConfig({
  integrations: [vue()],
  output: 'static',
  site: 'https://tarot.deesuu.com',
  base: '/',
  build: {
    format: 'directory'
  }
})
