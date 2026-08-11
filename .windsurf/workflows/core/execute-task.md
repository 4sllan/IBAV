---
description: Execute a single task from an approved task list
---

# /execute-task <number>

## Purpose

Execute exactly one task from a task list.

## Steps

1. Read the spec at `docs/specs/<feature-name>.md`.
2. Read the task list at `docs/specs/<feature-name>-tasks.md`.
3. Identify the requested task number.
4. Analyze the files involved.
5. Implement only that task.
6. Run relevant validations from `package.json`:
   - `pnpm lint` (with caution; check `git diff` after)
   - `pnpm format:check`
   - `pnpm test`
   - `pnpm build` when appropriate
7. Analyze the diff.
8. Report the result.

## Constraints

- Execute only the requested task number.
- Do not execute Task N+1, N+2, etc.
- Do not refactor unrelated code.
- Do not update dependencies.
- Do not change versions.
- Do not create future functionality.
- Do not fix unrelated problems.

## Hard stop

- On `task_complete`: do not proceed to additional tasks without explicit user request.
- Mark completed task as `[✅]` and pending/deferred tasks as `[⏳]`.
