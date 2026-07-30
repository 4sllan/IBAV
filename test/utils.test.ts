import { describe, it, expect } from 'vitest';

describe('Utility Functions', () => {
  describe('String utilities', () => {
    it('should capitalize first letter', () => {
      const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
    });

    it('should handle empty string', () => {
      const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
      expect(capitalize('')).toBe('');
    });
  });

  describe('Array utilities', () => {
    it('should sum array of numbers', () => {
      const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0);
      expect(sum([1, 2, 3])).toBe(6);
      expect(sum([10, 20, 30])).toBe(60);
    });

    it('should handle empty array', () => {
      const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0);
      expect(sum([])).toBe(0);
    });
  });

  describe('Math utilities', () => {
    it('should check if number is even', () => {
      const isEven = (num: number) => num % 2 === 0;
      expect(isEven(2)).toBe(true);
      expect(isEven(4)).toBe(true);
      expect(isEven(3)).toBe(false);
      expect(isEven(7)).toBe(false);
    });

    it('should check if number is positive', () => {
      const isPositive = (num: number) => num > 0;
      expect(isPositive(1)).toBe(true);
      expect(isPositive(100)).toBe(true);
      expect(isPositive(-1)).toBe(false);
      expect(isPositive(0)).toBe(false);
    });
  });
});
