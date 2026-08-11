import { describe, it, expect } from 'vitest';
import { calculateVjv } from '../../shared/utils/vjv';

describe('vjv', () => {
  it('returns the correct VJV for the docs example', () => {
    const inputs = {
      fipeValue: 80000,
      year: 2022,
      mileage: 90000,
      condition: 'excelente' as const,
    };

    expect(calculateVjv(inputs, 2026)).toBe(74800);
  });

  it('returns the FIPE value when there are no adjustments', () => {
    const inputs = {
      fipeValue: 50000,
      year: 2026,
      mileage: 0,
      condition: 'bom' as const,
    };

    expect(calculateVjv(inputs, 2026)).toBe(50000);
  });
});
