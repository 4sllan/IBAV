export function calculateAge(year: number, currentYear = new Date().getFullYear()): number {
  return Math.max(0, currentYear - year);
}
