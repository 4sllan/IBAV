---
description: Create a detailed specification for a feature
---

# /create-spec <feature-name>

## Purpose

Create a complete specification for a new feature or change.

## Steps

1. Read `package.json`.
2. Read `docs/docs.md`.
3. List and analyze the current project structure.
4. Read files related to the feature area.
5. Identify existing patterns and conventions.
6. Identify risks and ambiguities.
7. Create the spec file at `docs/specs/<feature-name>.md`.

## Spec template

```markdown
# <Feature>

## Problem

## Goal

## Scope

## Non-goals

## Current Architecture

## Proposed Solution

## Functional Requirements

## Technical Requirements

## Data Flow

## API / Interfaces

## Error Handling

## Testing Strategy

## Documentation

## Acceptance Criteria

- [ ] ...

## Risks

## Open Questions
```

## Critical rule

- After creating the spec: **STOP**.
- Do not create tasks.
- Do not implement code.
- Do not modify production files.
- Wait for explicit user approval before running `/create-tasks`.
