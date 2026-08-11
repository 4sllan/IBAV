---
description: Safely execute a requested sequence of tasks one by one
---

# /execute-tasks <number>[,<number>...]

## Purpose

Execute multiple tasks explicitly requested by the user, one at a time, with confirmation between them.

## Steps

1. Read the spec at `docs/specs/<feature-name>.md`.
2. Read the task list at `docs/specs/<feature-name>-tasks.md`.
3. For each requested task number:
   a. Confirm the next task with the user.
   b. Run `/execute-task <number>` logic.
   c. Wait for explicit user approval to continue.
4. Stop after each task.

## Constraints

- Each task must be explicitly requested or approved.
- Do not auto-continue after a task finishes.
- Do not skip the `/execute-task` workflow logic.
- Validate between tasks.

## Hard stop

- After any task: **STOP**. Wait for explicit user instruction.
