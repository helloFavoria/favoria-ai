# Favoria - Product and Engineering Roadmap

Last Updated: 2026-08-03

This document defines Favoria's long-term product vision and engineering roadmap. It is the strategic reference for feature prioritization, phase planning, and success metrics.

## 1. Vision Timeline

Favoria evolves from a lean MVP into a broader AI ecosystem:

- MVP: core affiliate marketplace management and analytics
- Content OS: content planning and AI copywriting workflows
- Prompt Finder: searchable prompt library and AI model catalog
- Workflow Hub: automation templates and AI agent workflows
- AI Assets Marketplace: marketplace for prompts, workflows, and digital assets

The roadmap balances product discovery, engineering stability, and scalable growth.

---

## 2. Product Roadmap

### Phase 1 — Favoria MVP

**Target:**

- Authentication
- Dashboard
- Products
- Collections
- Affiliate Links
- Search
- Analytics
- Deployment

**Outcome:**

Mendapatkan pengguna pertama dan komisi affiliate pertama.

---

### Phase 2 — Favoria Content OS

**Target:**

- Content Planning
- Content Calendar
- AI Copywriting
- Social Media Workflow
- n8n Automation

---

### Phase 3 — Favoria Prompt Finder

**Target:**

- Image Prompt Library
- Video Prompt Library
- Metadata Search
- AI Model Catalog

---

### Phase 4 — Favoria Workflow Hub

**Target:**

- n8n Templates
- Make Templates
- Zapier Templates
- AI Agent Templates

---

### Phase 5 — Favoria AI Assets Marketplace

**Target:**

- Prompt Marketplace
- Workflow Marketplace
- Digital Assets
- Templates
- Premium Collections

---

## 3. Technical Roadmap

### Frontend

- Establish consistent design system and component library
- Optimize Next.js App Router with Server Components
- Build reusable dashboards and product UI

### Backend

- Implement Supabase Auth and RLS
- Build API contracts and secure data access
- Support event ingestion for analytics

### Database

- Define normalized schema with UUID, relations, and RLS
- Add search-friendly indexes and analytics tables
- Support future product data models for AI assets

### AI

- Define integration points for AI recommendations
- Create prompt and workflow metadata models
- Build safe adaptive features over time

### Automation

- Plan n8n/automation connectors and templates
- Support content workflows and affiliate process automation

### Infrastructure

- Deploy frontend to Vercel
- Use Supabase managed DB and auth
- Add CI/CD checks and backups

---

## 4. Success Metrics

**Phase 1:**

- Active users
- Products added
- Collections created
- Affiliate links stored
- Search usage
- Basic analytics tracked

**Phase 2:**

- Content workflows created
- AI copywriting sessions
- Social sharing events

**Phase 3:**

- Prompt searches performed
- Prompt library engagement
- Model catalog adoption

**Phase 4:**

- Automation templates used
- Workflow executions
- Integration adoption

**Phase 5:**

- Marketplace listings
- Asset purchases/downloads
- Creator monetization events

---

## 5. Prioritization Rules

- MVP First
- Documentation First
- One Task at a Time
- Validate Before Expand

---

## 6. Backlog

The backlog contains ideas intentionally postponed until later phases:

- Advanced AI content editor
- Multi-marketplace sync automation
- Built-in affiliate link shortening
- Public marketplace storefronts
- Advanced permission roles
- Platform-level analytics dashboards

---

This roadmap is a living document and should be updated when product direction or technical constraints change.
