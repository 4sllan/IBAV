import { describe, it, expect } from 'vitest';
import { calculateMileageAdjustment } from '../../shared/utils/mileage';

describe('mileage', () => {
  it('applies a discount of 0.5% per 10.000 km above average', () => {
    expect(calculateMileageAdjustment(4, 90000)).toBe(-0.015);
    expect(calculateMileageAdjustment(1, 25000)).toBe(-0.005);
  });

  it('applies a bonus of 0.3% per 10.000 km below average', () => {
    expect(calculateMileageAdjustment(4, 30000)).toBe(0.009);
    expect(calculateMileageAdjustment(1, 5000)).toBe(0.003);
  });

  it('returns 0 when mileage matches the expected average', () => {
    expect(calculateMileageAdjustment(4, 60000)).toBe(0);
    expect(calculateMileageAdjustment(0, 0)).toBe(0);
  });
});
