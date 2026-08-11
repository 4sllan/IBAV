import { calculateAge } from './vehicle';
import { calculateAgeDiscount } from './depreciation';
import { calculateMileageAdjustment } from './mileage';
import { calculateConditionAdjustment } from './condition';
import type { VehicleInputs } from '../types/valuation';

export function calculateVjv(
  inputs: VehicleInputs,
  currentYear = new Date().getFullYear()
): number {
  const age = calculateAge(inputs.year, currentYear);
  const ageAdjustment = calculateAgeDiscount(age);
  const mileageAdjustment = calculateMileageAdjustment(age, inputs.mileage);
  const conditionAdjustment = calculateConditionAdjustment(inputs.condition);

  const vjv = inputs.fipeValue * (1 + ageAdjustment + mileageAdjustment + conditionAdjustment);

  return Math.round(vjv * 100) / 100;
}
