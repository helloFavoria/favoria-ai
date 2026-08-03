# Contributing to Favoria

Last Updated: 2026-08-03

This document describes the process and conventions for contributing code and documentation to Favoria.

## Git Flow

- Use feature branches off `main` or `develop` depending on branch strategy.
- Branch name: `feature/{short-description}`, `fix/{issue-number}`, or `chore/{task}`.

## Branch Naming

- `feat/<short-description>`
- `fix/<short-description>`
- `docs/<short-description>`
- `test/<short-description>`

## Pull Requests

- Open PRs against `main` (or `develop` if used).
- PR title: short descriptive title and issue link (`feat: add products import (#123)`)
- PR description: summary, approach, testing steps, and checklist.

## Code Review

- At least one reviewer required for small changes; two for major features.
- Review checklist: functionality, security, tests, accessibility, and documentation.

## Commit Convention

- Follow Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`.

## Merge Rules

- Use merge commits or squash merges based on repo policy.
- Require CI to pass (lint, typecheck, tests) before merge.

## Issue Tracking

- Use GitHub Issues to track work and link PRs to issues.

---

Add more organization-specific rules as the team grows.
