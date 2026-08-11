import { calculateAge } from './vehicle';
import type { VehicleCondition, VehicleInputs } from '../types/valuation';

export function calculateIvb(
  inputs: VehicleInputs,
  currentYear = new Date().getFullYear()
): { points: number; label: string } {
  const age = calculateAge(inputs.year, currentYear);
  const agePoints = age * -15;
  const mileagePoints = calculateMileagePoints(inputs.mileage, age);
  const conditionPoints = getConditionPoints(inputs.condition);

  const points = 1000 + agePoints + mileagePoints + conditionPoints;
  const label = getIvbLabel(points);

  return { points, label };
}

function calculateMileagePoints(mileage: number, age: number): number {
  const expected = age * 15000;
  const diff = mileage - expected;

  if (diff > 0) {
    return -(Math.floor(diff / 10000) * 10);
  }

  return 0;
}

function getConditionPoints(condition: VehicleCondition): number {
  switch (condition) {
    case 'excelente':
      return 30;
    case 'bom':
      return 0;
    case 'regular':
      return -30;
    case 'ruim':
      return -80;
    default:
      return 0;
  }
}

function getIvbLabel(points: number): string {
  if (points >= 900) {
    return 'Excelente';
  }
  if (points >= 800) {
    return 'Muito Bom';
  }
  if (points >= 700) {
    return 'Bom';
  }
  if (points >= 600) {
    return 'Regular';
  }
  return 'Atenção';
}
