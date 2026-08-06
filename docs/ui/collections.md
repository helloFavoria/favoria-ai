# Collections UI Blueprint

## Screen

Collections management view

## Layout

- Page header with title and create collection action
- Collection cards or list rows
- Optional filter by status or category
- Detail panel for selected collection

## Props

- Collection list
- Selected collection
- Item count and metadata

## Behavior

- Create collection opens a simple form with name, description, and visibility
- Users can add or remove items from a collection
- Empty collections show guidance to add the first item

## Permissions

- Authenticated users only
- Collections are scoped to the current account owner

## Loading State

- Skeleton cards while loading collections
- Form submit button shows loading state

## Empty State

- Friendly empty state with create CTA

## Error State

- Warning on failed fetch or mutation
- Retry action for list refresh
