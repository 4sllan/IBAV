# IBAV MVP — Calculadora de Valor Justo e Índice IVB

## Problem

A Tabela FIPE apresenta uma média nacional de preços e não reflete as condições individuais de um veículo (idade, quilometragem, conservação). Não existe uma ferramenta pública, auditável e offline que ajuste a referência FIPE com base nesses fatores de forma transparente.

## Goal

Implementar o **MVP do IBAV**, um cálculo reprodutível de:

- **VJV (Valor Justo do Veículo)**
- **IVB (Índice de Valor Brasileiro)**

A ferramenta deve funcionar **100% no frontend**, sem APIs externas, e apresentar os resultados de forma clara ao usuário.

## Scope

- Formulário de entrada (FIPE, ano, km, conservação)
- Cálculo da idade do veículo
- Cálculo do VJV com base na metodologia do `docs/docs.md`
- Cálculo do IVB (0-1000 pontos) e classificação
- Página/área de resultado (Valor FIPE, VJV, IVB, classificação)
- Compartilhamento básico dos resultados
- Testes unitários das funções de cálculo

## Non-goals

- Consulta automática à Tabela FIPE
- Backend real/persistência de dados
- Histórico de cálculos
- Comparação entre veículos
- Integração com bancos, leilões, seguro ou sinistros
- Autenticação
- Internacionalização (i18n) — o MVP será exclusivamente em português do Brasil

## Current Architecture

```
app/
  app.vue              # entry básico, apenas NuxtWelcome
server/
  api/hello.ts         # endpoint placeholder
shared/
  utils/capitalize.ts  # único utilitário existente
test/
  app.test.ts          # testes do app.vue básico
  utils.test.ts        # testes genéricos placeholder
```

Stack:

- Nuxt 4.5.1 + Vue 3.5.40
- Nuxt UI 4.10.0
- TypeScript 6.0
- Vitest 4.1 + jsdom
- ESLint flat config + Prettier

Não existe ainda nenhuma lógica de domínio implementada.

## Proposed Solution

1. Criar módulos de cálculo em `shared/utils/`:
   - `vehicle.ts` — cálculo da idade
   - `depreciation.ts` — desvalorização por idade
   - `mileage.ts` — ajuste por quilometragem
   - `condition.ts` — ajuste por conservação
   - `vjv.ts` — cálculo do Valor Justo
   - `ivb.ts` — cálculo do IVB e classificação
2. Criar uma página `app/pages/index.vue` com o formulário e o resultado.
3. Utilizar Nuxt UI para inputs (`UInput`, `USelect`) e exibição (`UCard`).
4. Persistir os inputs em query params para permitir compartilhamento por URL.
5. Testar todas as funções matemáticas com os exemplos contidos em `docs/docs.md`.

## Functional Requirements

- **FR1** O usuário deve informar: valor FIPE (R$), ano do veículo, quilometragem atual e estado de conservação.
- **FR2** A idade deve ser calculada automaticamente (`anoAtual - anoVeiculo`).
- **FR3** O desconto por idade deve ser `idade × 2%`.
- **FR4** O ajuste por quilometragem deve seguir a média de 15.000 km/ano:
  - acima da média: `-0,5%` a cada 10.000 km
  - abaixo da média: `+0,3%` a cada 10.000 km
- **FR5** O ajuste por conservação deve ser:
  - Excelente: `+3%`
  - Bom: `0%`
  - Regular: `-3%`
  - Ruim: `-8%`
- **FR6** O VJV deve ser calculado como:
  `VJV = FIPE + ajusteConservação - descontoIdade ± ajusteQuilometragem`
- **FR7** O IVB deve ser calculado como pontuação de 0 a 1000:
  - base: 1000
  - idade: `-15` pontos/ano
  - quilometragem acima: `-10` a cada 10.000 km
  - conservação: `+30/0/-30/-80`
- **FR8** O resultado deve exibir classificação IVB (Excelente, Muito Bom, Bom, Regular, Atenção).
- **FR9** O compartilhamento deve permitir copiar a URL com os parâmetros preenchidos.
- **FR10** O cálculo deve ocorrer em tempo real à medida que o usuário altera os campos.

## Technical Requirements

- **TR1** Todos os cálculos devem ser TypeScript puro em `shared/utils/`.
- **TR2** Nenhuma chamada de API ou backend será usada para o cálculo.
- **TR3** A moeda deve ser formatada em `pt-BR` (R$).
- **TR4** Formulário e resultados devem usar componentes Nuxt UI.
- **TR5** A página deve ser SSR-safe (sem hydration mismatch).
- **TR6** Query params devem sincronizar o estado do formulário via `useRoute().query` e `useRouter()`.
- **TR7** Cobertura de testes unitários acima de 80% para os utilitários matemáticos.

## Data Flow

```
Usuário preenche formulário
        ↓
Validação de campos (números positivos, ano, km)
        ↓
Cálculo da idade
        ↓
Cálculo de descontos/acréscimos
        ↓
Cálculo VJV
        ↓
Cálculo IVB
        ↓
Renderização do resultado
        ↓
Sincronização com query params (compartilhamento)
```

## API / Interfaces

```ts
// shared/types/valuation.ts
export interface VehicleInputs {
  fipeValue: number;
  year: number;
  mileage: number;
  condition: 'excelente' | 'bom' | 'regular' | 'ruim';
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

// shared/utils/vjv.ts
export function calculateVjv(inputs: VehicleInputs): number;

// shared/utils/ivb.ts
export function calculateIvb(inputs: VehicleInputs): { points: number; label: string };
```

## Error Handling

- Valor FIPE deve ser maior que zero.
- Ano deve estar entre 1900 e o ano atual.
- Quilometragem deve ser maior ou igual a zero.
- Campos inválidos exibem mensagem sem bloquear digitação.
- Resultado só é exibido quando todos os campos são válidos.

## Testing Strategy

- **Unitários** em `test/utils/` com os cenários do `docs/docs.md`:
  - `vjv.test.ts` — exemplo FIPE 80.000, 2022, 90.000 km, Excelente → R$ 74.800
  - `ivb.test.ts` — mesmo exemplo → 842 pontos
  - `condition.test.ts` — todos os estados
  - `mileage.test.ts` — acima e abaixo da média
- **Componente** `app.test.ts` — renderiza formulário e mostra resultados após input.
- **Edge cases**: ano futuro, km 0, FIPE 0, string vazia, conservação inválida.

## Documentation

- Manter `docs/docs.md` como a fonte da metodologia de produto.
- `docs/specs/ibav-mvp-tasks.md` será gerado na próxima etapa (`/create-tasks`).
- Código deve conter comentários mínimos explicando a fórmula.

## Acceptance Criteria

- [ ] Usuário consegue preencher os quatro campos.
- [ ] Cálculo do VJV gera exatamente R$ 74.800 para o exemplo do `docs.md`.
- [ ] Cálculo do IVB gera exatamente 842 pontos para o exemplo do `docs.md`.
- [ ] Resultado exibe VJV, IVB e classificação.
- [ ] URL é atualizada com os parâmetros preenchidos.
- [ ] Testes unitários cobrem todos os estados de conservação e faixas de quilometragem.
- [ ] Nenhuma requisição externa é feita durante o cálculo.
- [ ] Aplicação funciona em `pnpm dev` e `pnpm generate` (modo estático).

## Risks

- **R1** Ambiguidade na ordem de aplicação dos percentuais. A fórmula `docs.md` usa `±` sem indicar se os descontos são cumulativos sobre o FIPE ou sobre o total acumulado.
- **R2** Arredondamento de centavos pode divergir dependendo do ponto de aplicação.
- **R3** Nuxt UI 4 pode ter diferenças de API de componentes que exigem ajustes.
- **R4** Query params podem expor valores sensíveis (números brutos) no compartilhamento.

## Open Questions

1. O cálculo percentual deve ser aplicado sempre sobre o valor FIPE original (mais previsível) ou de forma cumulativa?
2. O arredondamento final do VJV será em centavos (toFixed(2))?
3. O compartilhamento será apenas por URL/query params ou incluir botão "copiar resultado" em texto?
4. A página de resultados ficará na mesma página do formulário ou em rota separada?

---

Status: **Draft**
