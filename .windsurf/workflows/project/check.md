---
description: Analyze project state without implementing
---

# /check

## Purpose

Analyze the current project state and produce a report without making changes.

## Steps

1. Run `git status` and `git diff` to see uncommitted changes.
2. Check `package.json` for scripts and dependencies.
3. Run `pnpm format:check` if the script exists.
4. Run `pnpm test` if relevant.
5. Run `pnpm lint` only if the user explicitly requests it (because `--fix` can modify files).
6. Consider `pnpm build` only when the project state demands it.
7. Identify files modified inappropriately.

## Output

- Git status summary
- Validation results
- Files changed unexpectedly
- Recommendations

## Constraints

- Do not fix automatically.
- Do not modify production code.
- Report only. Wait for user instruction before fixing.
