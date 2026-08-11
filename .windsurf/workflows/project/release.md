---
description: Prepare a new release
---

# /release

## Purpose

Prepare a new release based on the current state.

## Steps

1. Read `package.json` and confirm the current version.
2. Read `CHANGELOG.md`.
3. Check `git status` and `git log`.
4. Run the necessary validation scripts that exist in `package.json`:
   - `pnpm lint` (with caution; review `git diff` after)
   - `pnpm test`
   - `pnpm format:check`
   - `pnpm build`
5. Identify changes since the last release.
6. Propose the next version using `changelogen` semantics.
7. Propose a new `CHANGELOG.md` entry.

## Output

- Current version
- Changes since last release
- Proposed next version
- Suggested changelog entry

## Constraints

- Do not bump version automatically.
- Do not publish or release automatically.
- Do not modify `package.json` or `CHANGELOG.md` without explicit approval.
- Wait for explicit user authorization before any release step.
