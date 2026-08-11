---
description: Regras de qualidade do projeto IBAV
---

# IBAV - Quality Rules

## TypeScript strict

- Utilize tipos explícitos e evite `any`.
- Prefira interfaces e tipos nomeados.
- Mantenha consistência com as configurações de `tsconfig.json`.

## Código simples

- Funções pequenas com responsabilidade única.
- Máxima clareza sobre máxima abstração.
- Evite lógica desnecessária.

## Responsabilidades claras

- Um componente, composable ou função deve ter um propósito claro.
- Separe lógica de apresentação quando apropriado.

## Evitar duplicação

- Extraia funções comuns para `utils/` ou `composables/`.
- Não copie e cole código em vários locais.

## Testes

- Novos comportamentos devem receber testes quando aplicável.
- Os testes vivem em `test/**/*.{test,spec}.{js,ts}`.
- Não modifique testes apenas para fazer a implementação passar.
- Se um teste estiver incorreto, explique o motivo antes de alterá-lo.

## Lint

- O comando `pnpm lint` executa `eslint . --fix`.
- Como o `--fix` modifica arquivos, verifique `git diff` após a execução.
- Não execute lint indiscriminadamente em tarefas que possam afetar arquivos fora do escopo.

## Formatação

- Use `pnpm format:check` para validação.
- Use `pnpm format` somente quando necessário corrigir formatação.
- Verifique `git diff` após `pnpm format`.

## Build

- Considere `pnpm build` como validação quando alterar:
  - `nuxt.config.ts`
  - módulos
  - plugins
  - pages
  - server
  - configuração de build
  - runtime
  - imports
  - SSR
  - componentes críticos
- Não execute build desnecessariamente para alterações puramente documentais.

## Alterações mínimas

- Uma tarefa deve modificar apenas o código necessário para o seu objetivo.
- Não refatore código não relacionado.
- Problemas encontrados fora do escopo devem ser reportados, não corrigidos automaticamente.

## Validação

- As validações devem ser baseadas exclusivamente em scripts existentes em `package.json`.
- Antes de executar qualquer comando, verifique se ele existe no `package.json`.
- Não crie comandos fictícios como `pnpm typecheck`.
