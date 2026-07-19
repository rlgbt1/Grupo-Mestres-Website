import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Custom domain deploys at the root (see public/CNAME), and BrowserRouter needs
  // absolute asset URLs so they still resolve correctly when a user lands directly
  // on a nested path like /sobre-nos (a relative base would try to fetch
  // /sobre-nos/assets/... instead of /assets/...).
  base: '/',
})
