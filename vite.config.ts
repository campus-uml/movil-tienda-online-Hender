import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Configuración de Vitest
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    
  },
});
