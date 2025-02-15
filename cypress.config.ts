import { defineConfig } from 'cypress';
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), "VITE_");

export default defineConfig({
  projectId: "fxatur", // Usa el valor de entorno o un valor por defecto
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: 'src/**/*.cy.tsx',
  },
  e2e: {
    baseUrl: env.VITE_CYPRESS_BASE_URL || "http://localhost:5174", // Usa el valor de entorno o un valor por defecto
    supportFile: false,

    // Record screenshots and videos
    video: true,
    videoCompression: 32,
  },
});
