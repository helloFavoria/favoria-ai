# Dashboard UI Blueprint

## Screen

Main overview dashboard after login.

## Desktop Layout

- Left sidebar with navigation, section labels, and active state
- Top header with page title, quick search, theme toggle, and user menu
- Main content grid with summary cards, quick actions, recent items, and analytics preview
- Secondary content area for upcoming actions or status

## Mobile Layout

- Collapsible sidebar or bottom navigation pattern
- Header remains visible with page title and user actions
- Cards and sections stack vertically
- Primary actions remain visible without hidden controls

## Content Areas

- Summary cards: products, collections, links, analytics
- Quick actions: create product, create link, open analytics
- Recent activity table or list for latest actions
- Empty state panel when there is no data yet

## Props

- userProfile: avatar, name, role
- metrics: summary counts and trends
- recentItems: list of latest activity
- isLoading: boolean
- isError: boolean
- hasData: boolean

## Behavior

- Sidebar navigation routes to primary sections
- User menu opens a dropdown with profile and logout link
- Theme switch toggles light/dark appearance without layout shift
- Skeleton loaders appear while data is pending
- Empty state appears when metrics and recent items are absent
- Error state displays retry guidance without losing the page shell

## Permissions

- Authenticated users only
- Admins can see extra admin tools if enabled later

## Loading State

- Sidebar remains visible
- Cards render skeleton blocks
- Tables render row placeholders
- Header actions remain accessible but disabled while pending

## Empty State

- Friendly message with action CTA
- Example: "No products yet. Create your first product to get started."

## Error State

- Inline warning banner above content
- Retry action available
- Layout remains stable and no broken panels

## Responsive Rules

- Desktop: 3-column content grid with sidebar
- Tablet: stacked cards with slimmer sidebar or collapsible nav
- Mobile: single-column flow with sticky header and full-width actions
