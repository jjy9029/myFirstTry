import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:8099',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/api/, ' '),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            const targetUrl = proxyReq.getHeader('host') + proxyReq.path;
            console.log('Proxying request:', req.url, 'to', targetUrl);
          });
        },
      }
    }
  },
})
