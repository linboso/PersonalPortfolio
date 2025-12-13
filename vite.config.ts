import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // plugins: [
  //   react({
  //     babel: {
  //       plugins: [['babel-plugin-react-compiler']],
  //     },
  //   }),
  // ],
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
