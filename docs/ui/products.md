# Products UI Blueprint

## Screen

Products listing, create, and edit experience

## Layout

- Page header with title and create button
- Search and filter controls
- Product list in card or table format
- Pagination or infinite scroll if many items exist
- Detail drawer or modal for quick edit

## Props

- Product list data
- Filter state
- Selected product for detail view
- Form context for create/edit mode

## Behavior

- Create product opens a form with title, description, price, and optional media
- Save triggers validation and optimistic update state
- Edit mode loads existing content and preserves unsaved changes safely
- Delete action requires confirmation

## Permissions

- Authenticated users can manage their own products
- Admins may access cross-user data in the future

## Loading State

- Skeleton rows or cards while the product list loads
- Spinner inside create/edit submit button

## Empty State

- Empty illustration with CTA to create the first product

## Error State

- Inline banner for failed save, fetch, or delete operations
- Retry link for list refresh
