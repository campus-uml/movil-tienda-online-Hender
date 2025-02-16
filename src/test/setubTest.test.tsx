import { expect, describe, it } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';

// Configurar Vitest para usar los matchers de Testing Library
expect.extend(matchers);

describe('setupTest.ts', () => {
    it('should import @testing-library/jest-dom correctly', async () => {
        await expect(import('@testing-library/jest-dom')).resolves.not.toThrow();
    });
});
