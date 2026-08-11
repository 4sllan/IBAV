---
description: Run project tests
---

# /test

## Purpose

Execute tests and report results without changing code.

## Steps

1. Read `package.json` to confirm test scripts.
2. Identify tests related to the current change.
3. Run the appropriate test command:
   - `pnpm test` for full suite
   - `pnpm test:watch` if requested for development
   - `pnpm test:debug` if requested for debugging
4. Report the results.
5. Stop on any failure and report without modifying code.

## Output

- Command executed
- Test results
- Failed tests (if any)
- Recommended next action

## Constraints

- Do not modify code to make tests pass.
- Do not invent test scripts.
- Wait for user instruction before fixing failures.
