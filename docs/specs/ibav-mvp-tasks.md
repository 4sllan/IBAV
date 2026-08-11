# Tasks — IBAV MVP

## Task 1 — ✅ Definir tipos e interfaces do domínio

### Goal

Criar os tipos centrais usados em toda a aplicação: entradas do veículo e resultado da avaliação.

### Files

- `shared/types/valuation.ts`

### Implementation

- Declarar `VehicleInputs` com `fipeValue`, `year`, `mileage`, `condition`.
- Declarar `ValuationResult` com todos os campos de saída.
- Exportar os tipos.

### Tests

- Nenhum teste unitário necessário; validação por compilação TypeScript.

### Validation

- `pnpm nuxt prepare` ou `npx tsc --noEmit`.

### Acceptance Criteria

- [ ] `shared/types/valuation.ts` criado e compilável.
- [ ] Tipos refletem o contrato descrito na especificação.

---

## Task 2 — ✅ Implementar utilitários base (idade, quilometragem, conservação)

### Goal

Criar as funções puras de cálculo de idade, desvalorização, ajuste por km e conservação.

### Files

- `shared/utils/vehicle.ts`
- `shared/utils/depreciation.ts`
- `shared/utils/mileage.ts`
- `shared/utils/condition.ts`

### Implementation

- `vehicle.ts`: `calculateAge(year)` retorna `anoAtual - year`.
- `depreciation.ts`: `calculateAgeDiscount(age)` retorna `age * 0.02`.
- `mileage.ts`: `calculateMileageAdjustment(age, mileage)` compara com `age * 15000` e aplica `±` percentuais.
- `condition.ts`: `calculateConditionAdjustment(condition)` mapeia os quatro estados para percentuais.

### Tests

- `test/utils/vehicle.test.ts`
- `test/utils/depreciation.test.ts`
- `test/utils/mileage.test.ts`
- `test/utils/condition.test.ts`

### Validation

- `pnpm test`

### Acceptance Criteria

- [ ] Cada utilitário cobre os cenários de limite (idade 0, km 0, km muito alta).
- [ ] Percentuais estão corretos conforme `docs/docs.md`.

---

## Task 3 — ✅ Implementar VJV e IVB

### Goal

Compor os utilitários base para calcular o Valor Justo do Veículo e o Índice IVB.

### Files

- `shared/utils/vjv.ts`
- `shared/utils/ivb.ts`

### Implementation

- `vjv.ts`: `calculateVjv(inputs)` — aplica a fórmula usando FIPE como base, desconto idade, ajuste km e conservação.
- `ivb.ts`: `calculateIvb(inputs)` — calcula pontuação e retorna `label` (Excelente, Muito Bom, Bom, Regular, Atenção).

### Tests

- `test/utils/vjv.test.ts` — verificar exemplo FIPE 80.000, 2022, 90.000 km, Excelente → R$ 74.800.
- `test/utils/ivb.test.ts` — verificar mesmo exemplo → 842 pontos e classificação "Muito Bom".

### Validation

- `pnpm test`

### Acceptance Criteria

- [ ] Exemplo do `docs/docs.md` passa com arredondamento de centavos esperado.
- [ ] Todos os estados de conservação e faixas de km são testados.

---

## Task 4 — ✅ Criar página com formulário e exibição de resultados

### Goal

Construir a interface do usuário com Nuxt UI, formulário e painel de resultado.

### Files

- `app/pages/index.vue` (ou `app.vue` se preferir single-page)
- `app/components/` se necessário (ex: `VehicleForm.vue`, `ResultPanel.vue`)

### Implementation

- Formulário com 4 campos usando Nuxt UI.
- Estados reativos com `ref`/`reactive`.
- Chamada a `calculateVjv` e `calculateIvb` a cada alteração.
- Renderização de FIPE, VJV, IVB e classificação.
- Formatação em `pt-BR` sem i18n.

### Tests

- `test/app.test.ts` — renderiza e interage com campos.

### Validation

- `pnpm dev` e `pnpm test`

### Acceptance Criteria

- [ ] Formulário renderiza os quatro campos.
- [ ] Alterar os campos atualiza o resultado em tempo real.
- [ ] Resultado exibe VJV, IVB e classificação.

---

## Task 5 — ✅ Sincronizar formulário com query params para compartilhamento

### Goal

Permitir que o usuário copie e compartilhe uma URL que carregue o mesmo cálculo.

### Files

- `app/pages/index.vue`

### Implementation

- Sincronizar `useRoute().query` → estado no `onMounted`.
- Atualizar `useRouter()` query ao mudar campos.
- Converter tipos (number) de forma segura.

### Tests

- `test/app.test.ts` ou teste específico para query params.

### Validation

- `pnpm test` e teste manual de navegação.

### Acceptance Criteria

- [ ] URL reflete os valores preenchidos.
- [ ] Acessar URL com query params preenche o formulário.
- [ ] Não há hydration mismatch.

---

## Task 6 — ✅ Integração final e verificação

### Goal

Garantir que todo o MVP passa em lint, testes e build.

### Files

- Todos afetados pelas tasks anteriores.

### Implementation

- Verificar e ajustar imports, formatação e tipos.
- Remover arquivos placeholder não utilizados (`hello.ts`, testes genéricos).

### Tests

- `pnpm test`

### Validation

- `pnpm lint`
- `pnpm format:check`
- `pnpm test`
- `pnpm build`

### Acceptance Criteria

- [ ] `pnpm lint` passa.
- [ ] `pnpm test` passa.
- [ ] `pnpm build` gera sem erros.
- [ ] Aplicação funciona em `pnpm dev`.
