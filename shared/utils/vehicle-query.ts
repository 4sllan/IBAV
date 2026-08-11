import type { VehicleCondition, VehicleInputs } from '#shared/types/valuation';

const VALID_CONDITIONS: VehicleCondition[] = ['excelente', 'bom', 'regular', 'ruim'];

export function parseVehicleQuery(
  query: Record<string, unknown>
): Partial<VehicleInputs> {
  const parsed: Partial<VehicleInputs> = {};

  if (typeof query.fipe === 'string') {
    const value = Number.parseFloat(query.fipe);
    if (!Number.isNaN(value)) {
      parsed.fipeValue = value;
    }
  }

  if (typeof query.year === 'string') {
    const value = Number.parseInt(query.year, 10);
    if (!Number.isNaN(value)) {
      parsed.year = value;
    }
  }

  if (typeof query.km === 'string') {
    const value = Number.parseInt(query.km, 10);
    if (!Number.isNaN(value)) {
      parsed.mileage = value;
    }
  }

  if (
    typeof query.condition === 'string' &&
    VALID_CONDITIONS.includes(query.condition as VehicleCondition)
  ) {
    parsed.condition = query.condition as VehicleCondition;
  }

  return parsed;
}

export function buildVehicleQuery(inputs: VehicleInputs): Record<string, string> {
  return {
    fipe: String(inputs.fipeValue),
    year: String(inputs.year),
    km: String(inputs.mileage),
    condition: inputs.condition,
  };
}
