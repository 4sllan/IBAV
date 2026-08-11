---
description: Analyze the product and existing project context
---

# /analyze-product

## Purpose

Understand the project, its goals, and existing architecture before proposing any change.

## Steps

1. Read `package.json` to understand the project name, version, stack, dependencies, and scripts.
2. Read `docs/docs.md` to understand the product goals and domain.
3. Read `README.md` for the public description.
4. List `app/`, `server/`, `shared/`, `test/`, `public/`, and `docs/`.
5. Read `nuxt.config.ts`, `tsconfig.json`, `vitest.config.ts`, `eslint.config.mjs`, and `.prettierrc` if they exist.
6. Identify the current architecture, patterns, and conventions.
7. Summarize findings without proposing implementation.

## Output

- Project overview
- Stack and versions (from `package.json`)
- Main documentation location
- Current architecture and conventions
- Known risks or ambiguities

## Constraints

- Do not invent dependencies or scripts.
- Do not modify production code.
- Do not create specifications at this stage unless requested.
