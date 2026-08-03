# Favoria - Design System (Design Language)

Last Updated: 2026-08-03

This document defines Favoria's Design Language: principles, tokens, component patterns, accessibility rules, and guidelines for building consistent UI across the product and future AI-enabled components.

## 1. Design Principles

- Clean
- Modern
- AI-first
- Minimal
- Fast
- Accessible
- Mobile-first

## 2. Brand Identity

- Brand Name: Favoria
- Brand Personality: Helpful, Professional, Creative, Trustworthy
- Design Philosophy: Reduce cognitive load — surface the right information, provide clear actions, and enable creators to move from idea to share quickly.

## 3. Color System

Define semantic tokens, not only hex values. Example tokens:

- `--color-primary` — primary brand color (used for CTAs)
- `--color-secondary` — secondary actions
- `--color-accent` — highlights, badges
- `--color-success` — success states
- `--color-warning` — warnings
- `--color-error` — errors
- `--color-info` — informational accents
- `--color-bg` — background
- `--color-surface` — cards, panels
- `--color-border` — neutral borders

Usage:

- Primary: CTA buttons, primary links
- Secondary: secondary buttons and subtle controls
- Accent: tags, highlights
- Background/Surface: background layers and cards
- Border: separators and input borders

Provide light and dark tokens for each semantic role.

## 4. Typography

- Font Family: Prefer Inter or InterVariable for UI; fallback to system fonts
- Heading Scale: H1 (32px), H2 (24px), H3 (20px), H4 (16px)
- Body Scale: Body Large (18px), Body (16px), Small (14px)
- Font Weight: Regular (400), Medium (500), SemiBold (600), Bold (700)
- Line Height: 1.25–1.6 depending on use (headings tighter, body more relaxed)

## 5. Spacing System

Base scale (4px): 4, 8, 12, 16, 20, 24, 32, 40, 48, 64

Rules:

- Use tokens for spacing: `space-4`, `space-8`, `space-16`, etc.
- Prefer compositional spacing that aligns with the 4px grid.

## 6. Border Radius

- `radius-sm` — 4px
- `radius-md` — 8px
- `radius-lg` — 12px
- `radius-xl` — 16px

## 7. Shadow System

- `shadow-xs` — subtle
- `shadow-sm` — small
- `shadow-md` — medium
- `shadow-lg` — large
- `shadow-xl` — prominent

## 8. Icon System

- Use Lucide Icons for consistency and open licensing.
- Sizes: `icon-sm` (16px), `icon-md` (20px), `icon-lg` (24px), `icon-xl` (32px)
- Use icons sparingly and always pair with labels for clarity.

## 9. Layout

- Container Widths:
  - Mobile: full width
  - Tablet: max 720px
  - Laptop: max 1024px
  - Desktop: max 1280–1440px
- Grid: 12-column responsive grid for dashboard; use gutters from spacing scale
- Sidebar: collapsible, responsive — hidden on smaller screens
- Navbar: top navigation with clear primary actions
- Dashboard: cards and panels, responsive stacks

## 10. Component Library

Document components as patterns with props, usage, and accessibility notes.

- Button: primary, secondary, ghost, icon-only — states: default, hover, active, disabled
- Input: single-line with label, error, helper text
- Textarea: multi-line with autosize option
- Select: single and multi-select
- Checkbox: standard and indeterminate
- Badge: used for counts and status
- Avatar: circle, with fallback initials
- Card: container for content; actions grouped
- Table: sortable, paginated, with responsive behavior
- Modal: focus trap, escape to close
- Drawer: side panel for details/controls
- Toast: ephemeral notifications; accessible
- Tabs: grouped content with keyboard support
- Dropdown: menu with actions
- Pagination: page numbers + prev/next
- Search Bar: debounced input with suggestions
- Product Card: image, title, price, actions (add, share)
- Analytics Card: metric, trend sparkline, timeframe selector

Each component must document: purpose, anatomy, props, states, accessibility notes.

## 11. Loading States

- Skeleton: blocks for cards, list rows
- Spinner: center for modal-level operations
- Empty State: illustration, message, primary CTA

## 12. Form Validation

- Error Message: displayed inline, color `--color-error`, icon optional
- Success Message: subtle green with check icon
- Disabled State: lower opacity and `pointer-events: none`

## 13. Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px — 1024px
- Laptop: 1024px — 1280px
- Desktop: >= 1280px

## 14. Accessibility

- Keyboard Navigation: all interactive elements reachable by keyboard
- Focus Ring: visible focus styles using `outline` or ring tokens
- Color Contrast: meet WCAG AA for text and UI components
- ARIA: use ARIA roles and labels where appropriate

## 15. Animation Guidelines

- Standard duration: 150ms (short), 300ms (medium)
- Use easing: `cubic-bezier(.2,.8,.2,1)`
- Hover: subtle transform/scale
- Transitions: for visibility and motion; avoid excessive motion

## 16. Dark Mode Strategy

- Provide dark tokens for all semantic colors.
- Prefer layering `surface` over `bg` and adjust elevation shadows.
- Ensure images and illustrations have appropriate contrast or variants.

## 17. Future Components

- AI Chat Panel
- Prompt Card
- Workflow Card
- Asset Preview
- AI Recommendation Card

---

Next: create `packages/ui` scaffold and export tokens in JSON for design-system consumption.
