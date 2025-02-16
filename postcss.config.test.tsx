import { describe, it, expect } from 'vitest';
import postcssConfig from './postcss.config.js';

describe('postcss.config.js', () => {
  it('should have the correct plugins configuration', () => {
    expect(postcssConfig).toEqual({
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    });
  });
});