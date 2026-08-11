---
description: Post-execution validation and summary
---

# /post-execution-tasks <feature-name>

## Purpose

Review the implementation after all requested tasks are completed.

## Steps

1. Read the spec and task list.
2. Verify the diff for all implemented tasks.
3. Run final validations from `package.json` when applicable:
   - `pnpm lint` (with caution)
   - `pnpm format:check`
   - `pnpm test`
   - `pnpm build` (if build configuration was affected)
4. Ensure `docs/docs.md` is updated if the change affects public behavior, API, or configuration.
5. Summarize what was done, pending items, and any new risks.

## Output

- Summary of completed tasks
- Pending tasks (`[⏳]`)
- Validation results
- Suggested next action

## Constraints

- Do not execute additional tasks.
- Do not release automatically.
- Do not modify `package.json` version.
- Wait for user approval for any next step.
