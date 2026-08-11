import { describe, it, expect } from 'vitest';
import { parseVehicleQuery, buildVehicleQuery } from '../../shared/utils/vehicle-query';

describe('vehicle-query', () => {
  it('parses query strings into VehicleInputs', () => {
    expect(
      parseVehicleQuery({
        fipe: '80000',
        year: '2022',
        km: '90000',
        condition: 'excelente',
      })
    ).toEqual({
      fipeValue: 80000,
      year: 2022,
      mileage: 90000,
      condition: 'excelente',
    });
  });

  it('ignores unknown condition values', () => {
    expect(parseVehicleQuery({ condition: 'invalid' }).condition).toBeUndefined();
  });

  it('ignores invalid numbers', () => {
    expect(parseVehicleQuery({ fipe: 'abc' }).fipeValue).toBeUndefined();
  });

  it('builds query from inputs', () => {
    expect(
      buildVehicleQuery({
        fipeValue: 80000,
        year: 2022,
        mileage: 90000,
        condition: 'excelente',
      })
    ).toEqual({
      fipe: '80000',
      year: '2022',
      km: '90000',
      condition: 'excelente',
    });
  });
});
