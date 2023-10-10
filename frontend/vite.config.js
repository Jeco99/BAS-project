import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy:{
    proxy:{
      "/chart":"http://localhost:3001",
      "/createaccount":"http://localhost:3001",
      "/root":"http://localhost:3001",
      "/post":"http://localhost:3001",
      "/appointment":"http://localhost:3001",
      "/static":"http://localhost:3001",
      "/history":"http://localhost:3001",

    }
  }
})
