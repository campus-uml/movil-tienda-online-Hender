import { describe, it, expect } from 'vitest';
import tailwindConfig from './tailwind.config.js';

describe('Tailwind CSS Configuration', () => {
  it('should have the correct content paths', () => {
    expect(tailwindConfig.content).toEqual([
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ]);
  });

  it('should have an extend object in the theme', () => {
    expect(tailwindConfig.theme.extend).toBeDefined();
  });

  it('should have an empty plugins array', () => {
    expect(tailwindConfig.plugins).toEqual([]);
  });
});