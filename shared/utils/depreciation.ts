export function calculateAgeDiscount(age: number): number {
  if (age === 0) {
    return 0;
  }
  return -(age * 0.02);
}
