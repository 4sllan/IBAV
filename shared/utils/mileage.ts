export function calculateMileageAdjustment(age: number, mileage: number): number {
  const expected = age * 15000;
  const diff = mileage - expected;

  if (diff > 0) {
    return roundPercent(-(Math.floor(diff / 10000) * 0.005));
  }

  if (diff < 0) {
    return roundPercent(Math.floor(Math.abs(diff) / 10000) * 0.003);
  }

  return 0;
}

function roundPercent(value: number): number {
  return Math.round(value * 1_000_000) / 1_000_000;
}
