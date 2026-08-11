---
description: Regras de arquitetura do projeto IBAV
---

# IBAV - Architecture Rules

## Nuxt

- O projeto utiliza Nuxt 4. Sempre verifique `nuxt.config.ts` antes de modificar configurações.
- A data de compatibilidade está em `nuxt.config.ts`. Não altere sem necessidade.
- Não adicione módulos automaticamente. Verifique `package.json` e `nuxt.config.ts` existentes.

## Vue

- Vue 3 Composition API é o padrão do projeto.
- `<script setup>` é preferido para novos componentes.
- Não crie componentes Options API sem justificativa técnica.

## TypeScript

- TypeScript é obrigatório para arquivos `.ts` e `<script setup lang="ts">`.
- Evite `any`. Prefira tipos explícitos.
- Aproveite a inferência de tipos do Nuxt e Vue quando segura.
- Mantenha `tsconfig.json` e configurações geradas por Nuxt (`.nuxt/tsconfig.*.json`).

## SSR

- O projeto suporta SSR por padrão.
- Composables e código executado no servidor devem respeitar as diferenças entre cliente e servidor.
- Evite acessar APIs do navegador (`window`, `document`) sem `onMounted` ou verificação de `process.client`.

## Client / Server

- APIs server-side vivem em `server/`.
- Lógica compartilhada pode usar `shared/` quando apropriado.
- `app/` contém a aplicação Vue/Nuxt.
- `public/` contém assets estáticos.

## Composables

- Use `composables/` para lógica reutilizável entre componentes.
- Nomeie com `use*` e exporte como função nomeada.
- Documente entradas, saídas e efeitos colaterais quando relevante.

## Components

- Componentes Vue em `app/components/` (ou `components/` se configurado).
- Nome em PascalCase. Não crie componentes de uma única palavra sem necessidade.
- Reutilize componentes existentes antes de criar novos.

## Pages

- Pages em `app/pages/` (ou `pages/` se configurado).
- Use `vue-router` (via Nuxt) para navegação.
- Cada página deve ter responsabilidade única.

## Layouts

- Layouts em `app/layouts/` (se existir).
- Não crie layout novo se um existente já atender.

## Plugins

- Plugins em `app/plugins/` (se existir).
- Registre em `nuxt.config.ts` se necessário.

## Server

- Server routes e middlewares em `server/`.
- Valide entradas nas APIs.
- Retorne respostas consistentes e com tipos claros.

## Utils

- Funções utilitárias puras em `app/utils/` ou `utils/`.
- Prefira funções pequenas, testáveis e sem efeitos colaterais.

## Configuração

- `nuxt.config.ts` é a fonte de verdade para configuração do Nuxt.
- `vitest.config.ts` para configuração de testes.
- `eslint.config.mjs` para regras de lint.
- `.prettierrc` para formatação.
- `tsconfig.json` deve ser respeitado.

## Imports

- Utilize auto-imports do Nuxt quando disponível.
- Imports explícitos são aceitáveis quando evitam conflitos ou melhoram clareza.

## Reutilização de código

- Antes de criar uma nova abstração:
  - Procure por algo equivalente.
  - Entenda a arquitetura atual.
  - Reutilize o padrão existente quando possível.
- Não crie arquitetura nova apenas por preferência.
