import type { VehicleCondition } from '../types/valuation';

export function calculateConditionAdjustment(condition: VehicleCondition): number {
  switch (condition) {
    case 'excelente':
      return 0.03;
    case 'bom':
      return 0;
    case 'regular':
      return -0.03;
    case 'ruim':
      return -0.08;
    default:
      return 0;
  }
}
