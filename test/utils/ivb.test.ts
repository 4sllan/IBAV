import { describe, it, expect } from 'vitest';
import { calculateIvb } from '../../shared/utils/ivb';

describe('ivb', () => {
  it('returns the correct IVB for the docs example', () => {
    const inputs = {
      fipeValue: 80000,
      year: 2022,
      mileage: 90000,
      condition: 'excelente' as const,
    };

    const result = calculateIvb(inputs, 2026);

    expect(result.points).toBe(940);
    expect(result.label).toBe('Excelente');
  });

  it('classifies each condition correctly', () => {
    const base = { fipeValue: 80000, year: 2022, mileage: 90000 };

    expect(calculateIvb({ ...base, condition: 'bom' }, 2026).points).toBe(910);
    expect(calculateIvb({ ...base, condition: 'regular' }, 2026).points).toBe(880);
    expect(calculateIvb({ ...base, condition: 'ruim' }, 2026).points).toBe(830);
    expect(calculateIvb({ ...base, condition: 'ruim' }, 2026).label).toBe('Muito Bom');
  });
});
