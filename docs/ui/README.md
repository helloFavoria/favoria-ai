# UI Blueprint Index

Last Updated: 2026-08-06

This directory contains the UI blueprint for the MVP. These documents are intended to be the source of truth for screen structure, state handling, and permission rules before implementation begins.

## Standard Blueprint Structure

Each screen blueprint should define:

- Layout: major regions and content hierarchy
- Props: data dependencies and expected inputs
- Behavior: actions, validation, navigation, and state transitions
- Permissions: who can access the screen and which actions are allowed
- Loading State: skeletons, spinners, and deferred content
- Empty State: what the screen shows when there is no data
- Error State: user-facing fallback when data or actions fail

## MVP Screen Inventory

- Authentication: login, register, forgot password
- Dashboard: overview and key actions
- Products: list, create, edit, and detail flows
- Collections: grouping and management
- Marketplaces: browse and discover destination platforms
- Affiliate Links: create and manage links
- Search: find products, collections, and links
- Analytics: usage and performance reporting

## Implementation Rule

Implementation must follow the blueprint in this directory. If the screen behavior changes, the blueprint must be updated first.
