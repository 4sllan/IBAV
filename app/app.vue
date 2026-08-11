<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { VehicleCondition, VehicleInputs } from '#shared/types/valuation';
import { calculateVjv } from '#shared/utils/vjv';
import { calculateIvb } from '#shared/utils/ivb';
import { parseVehicleQuery, buildVehicleQuery } from '#shared/utils/vehicle-query';

const currentYear = useState<number>('currentYear', () => new Date().getFullYear());
const route = useRoute();
const router = useRouter();

const query = parseVehicleQuery(route.query);
const form = ref<VehicleInputs>({
  fipeValue: query.fipeValue ?? 0,
  year: query.year ?? currentYear.value,
  mileage: query.mileage ?? 0,
  condition: query.condition ?? 'bom',
});

watch(
  () => form.value,
  () => {
    if (typeof window === 'undefined') {
      return;
    }
    if (isValid.value) {
      router.replace({ query: buildVehicleQuery(form.value) });
    }
  },
  { deep: true }
);

const conditionOptions = [
  { label: 'Excelente', value: 'excelente' as VehicleCondition },
  { label: 'Bom', value: 'bom' as VehicleCondition },
  { label: 'Regular', value: 'regular' as VehicleCondition },
  { label: 'Ruim', value: 'ruim' as VehicleCondition },
];

const isValid = computed(() => {
  return (
    form.value.fipeValue > 0 &&
    form.value.year > 1900 &&
    form.value.year <= currentYear.value &&
    form.value.mileage >= 0
  );
});

const result = computed(() => {
  if (!isValid.value) {
    return null;
  }
  return {
    vjv: calculateVjv(form.value, currentYear.value),
    ivb: calculateIvb(form.value, currentYear.value),
  };
});

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function formatMoney(value: number): string {
  return currencyFormatter.format(value);
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="mx-auto max-w-xl space-y-6">
      <h1 class="text-2xl font-bold">IBAV - Avaliação Veicular</h1>

      <div class="space-y-4">
        <div>
          <label for="fipe" class="block text-sm font-medium">Valor FIPE</label>
          <UInput id="fipe" v-model.number="form.fipeValue" type="number" min="0" step="1000" />
        </div>

        <div>
          <label for="year" class="block text-sm font-medium">Ano</label>
          <UInput id="year" v-model.number="form.year" type="number" />
        </div>

        <div>
          <label for="mileage" class="block text-sm font-medium">Quilometragem</label>
          <UInput id="mileage" v-model.number="form.mileage" type="number" min="0" />
        </div>

        <div>
          <label for="condition" class="block text-sm font-medium">Conservação</label>
          <USelect id="condition" v-model="form.condition" :options="conditionOptions" />
        </div>
      </div>

      <div v-if="result" data-testid="result" class="rounded-lg bg-white p-4 shadow">
        <p>Valor FIPE: {{ formatMoney(form.fipeValue) }}</p>
        <p>Valor Justo: {{ formatMoney(result.vjv) }}</p>
        <p>IVB: {{ result.ivb.points }} pontos ({{ result.ivb.label }})</p>
      </div>
    </div>
  </div>
</template>
