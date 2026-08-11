import { describe, it, expect } from 'vitest';
import { calculateAge } from '../../shared/utils/vehicle';

describe('vehicle', () => {
  it('calculates age with a fixed current year', () => {
    expect(calculateAge(2022, 2026)).toBe(4);
    expect(calculateAge(2020, 2026)).toBe(6);
  });

  it('returns 0 for future years', () => {
    expect(calculateAge(2030, 2026)).toBe(0);
  });

  it('returns 0 for the current year', () => {
    expect(calculateAge(2026, 2026)).toBe(0);
  });
});
