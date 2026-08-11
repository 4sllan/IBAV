import { describe, it, expect } from 'vitest';
import { calculateAgeDiscount } from '../../shared/utils/depreciation';

describe('depreciation', () => {
  it('returns 2% per year as a negative decimal', () => {
    expect(calculateAgeDiscount(4)).toBe(-0.08);
    expect(calculateAgeDiscount(1)).toBe(-0.02);
    expect(calculateAgeDiscount(0)).toBe(0);
  });
});
