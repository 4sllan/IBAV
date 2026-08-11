---
description: Regras permanentes do projeto IBAV
---

# IBAV - Project Rules

## Nome do projeto

IBAV (Instituto Brasileiro de Avaliação Veicular)

## Stack

- Nuxt 4
- Vue 3
- Vue Router
- TypeScript
- Nuxt UI
- Nuxt Content
- Nuxt Image
- Nuxt SEO Utils
- Vitest
- Vue Test Utils
- Nuxt Test Utils
- ESLint (@nuxt/eslint-config)
- Prettier
- Changelogen
- pnpm

## Package manager

O projeto utiliza **pnpm**.

- Use `pnpm` para instalar, remover, atualizar ou executar scripts.
- Nunca use `npm`, `yarn` ou `bun` a menos que o usuário solicite explicitamente.

## Scripts disponíveis

Verifique o `package.json` antes de sugerir qualquer comando. Scripts atuais:

- `pnpm build`
- `pnpm dev`
- `pnpm generate`
- `pnpm preview`
- `pnpm postinstall`
- `pnpm lint`
- `pnpm test`
- `pnpm test:watch`
- `pnpm test:debug`
- `pnpm format`
- `pnpm format:check`

Não invente scripts como `pnpm typecheck`, `pnpm test:unit`, `pnpm check` ou `pnpm validate`.

## Localização da documentação

- Documentação principal: `docs/docs.md`
- Especificações técnicas: `docs/specs/`
- Documentação pública: `docs/content/`

## Fonte de verdade

- `package.json` é a fonte de verdade para:
  - Nome e versão do projeto
  - Dependências e devDependencies
  - Scripts
  - Stack e versões
- `docs/docs.md` é a fonte de verdade para a documentação pública do produto.

## Convenções gerais

- Trate `package.json` como fonte de verdade para dependências, scripts e stack.
- Não hardcode versões de pacotes em Workflows ou Rules.
- Não invente dependências, scripts ou configurações.
- Caso um arquivo não exista, ignore-o. Não crie suposições.
- Sempre consulte `package.json` e `docs/docs.md` antes de propor mudanças.

## Regras de execução

- Uma tarefa por vez.
- Pare após cada tarefa e aguarde aprovação explícita do usuário.
- Não continue automaticamente.
- Não execute a próxima tarefa sem instrução explícita.
