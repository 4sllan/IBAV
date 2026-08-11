export type VehicleCondition = 'excelente' | 'bom' | 'regular' | 'ruim';

export interface VehicleInputs {
  fipeValue: number;
  year: number;
  mileage: number;
  condition: VehicleCondition;
}

export interface ValuationResult {
  fipeValue: number;
  vjv: number;
  ivbPoints: number;
  ivbLabel: string;
  age: number;
  ageDiscount: number;
  mileageAdjustment: number;
  conditionAdjustment: number;
}
