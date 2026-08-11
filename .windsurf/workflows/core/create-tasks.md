---
description: Create implementation tasks from an approved specification
---

# /create-tasks <feature-name>

## Purpose

Break an approved specification into small, executable tasks.

## Steps

1. Read the spec at `docs/specs/<feature-name>.md`.
2. Re-analyze the code affected by the spec.
3. Divide the implementation into small, reviewable tasks.
4. Respect dependencies between tasks.
5. For each task define:
   - Goal
   - Files involved
   - Implementation outline
   - Tests
   - Validation
   - Acceptance criteria
6. Create the task list at `docs/specs/<feature-name>-tasks.md`.

## Task template

```markdown
# Tasks

## Task 1 — <name>

### Goal

### Files

### Implementation

### Tests

### Validation

### Acceptance Criteria

- [ ] ...

---

## Task 2 — <name>

...
```

## Critical rule

- This workflow can only run after a spec exists and has been approved.
- After creating the tasks: **STOP**.
- Do not execute any task.
- Wait for explicit user authorization before running `/execute-task N`.
