import { describe, it, expect } from 'vitest';
import { calculateConditionAdjustment } from '../../shared/utils/condition';

describe('condition', () => {
  it('returns the correct percentage for each condition', () => {
    expect(calculateConditionAdjustment('excelente')).toBe(0.03);
    expect(calculateConditionAdjustment('bom')).toBe(0);
    expect(calculateConditionAdjustment('regular')).toBe(-0.03);
    expect(calculateConditionAdjustment('ruim')).toBe(-0.08);
  });
});
