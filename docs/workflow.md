# Favoria - Development Workflow

Last Updated: 2026-08-03

This document defines Favoria's development workflow for AI and human contributors. It describes the process from idea to deployment, including collaboration rules, documentation governance, and project lifecycle management.

## 1. Workflow Philosophy

- Documentation First
- Specification First
- Task Driven Development
- Review Before Merge
- AI-Assisted Development

---

## 2. Project Lifecycle

1. Idea
2. PRD
3. Architecture
4. Database
5. Design System
6. Specifications
7. Task
8. Implementation
9. Testing
10. Review
11. Documentation Update
12. Merge
13. Deploy

---

## 3. AI Development Workflow

For each task:

1. Read the entire `docs/` folder.
2. Read `docs/specifications/<module>.md`.
3. Read `tasks/<task>.md`.
4. Implement only the scope of the task.
5. Run lint, typecheck, and tests.
6. Update documentation if behavior changes.
7. Create a summary of changes.

---

## 4. Git Workflow

- Branches: `feature/*`, `fix/*`, `docs/*`, `refactor/*`, `main`
- Branch names should be descriptive and follow Conventional Commits.

---

## 5. Pull Request Workflow

- Self Review before opening PR.
- Use a PR checklist.
- Verify documentation updates.
- Verify testing and linting checks.

---

## 6. Documentation Workflow

On every feature or change, evaluate whether the following documents must be updated:

- PRD
- API
- Database
- Design System
- Specification

If yes, update the relevant documentation before merging.

---

## 7. AI Prompt Workflow

Standard prompt behavior:

> "Read the entire `docs/` folder first as the project's source of truth. After understanding the context, work only on the given task. Do not modify files outside the task scope."

---

## 8. Definition of Ready

A task is ready when:

- PRD is available
- Architecture is available
- Database is available
- Specification is available
- Acceptance criteria are clear

---

## 9. Definition of Done

An implementation is done when:

- Build passes
- TypeScript is clean
- ESLint is clean
- Acceptance criteria are met
- Documentation is updated
- Review is completed

---

## 10. Future Workflow

As Favoria grows, this workflow will extend to support:

- n8n Automation
- Prompt Finder
- Workflow Hub
- AI Assets Marketplace

The workflow should continue to emphasize documentation, task-driven execution, and review before merge.
