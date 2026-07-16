# State Management Convention

To keep the application footprint minimal, clean, and bug-free, this project adheres to a strict division of state management responsibilities:

## 1. Client UI State (Zustand)
Use **Zustand** exclusively for local/global UI interactions that don't belong in the URL.

- **Location:** `frontend/src/store/`
- **When to use:** Mobile navigation toggles, command palette visibility, modal open/close states, active theme, multi-step form progress.
- **Rules:**
  - Create small, single-purpose stores (e.g., `useUIStore.ts`, `useCheckoutStore.ts`).
  - Keep each store under ~50 lines; if it grows, split it.
  - **No API calls inside Zustand stores.** Fetching data belongs in TanStack Query.
  - Handle hydration safely when using the `persist` middleware to avoid Next.js SSR mismatch errors.

## 2. Server State (TanStack Query)
Use **TanStack React Query** for all API data fetching, caching, synchronization, and mutations on the client.

- **Location:** `frontend/src/hooks/queries/`
- **When to use:** Fetching dashboard data, paginated lists, submitting forms, or any data that lives on the server.
- **Rules:**
  - Use custom hooks for all queries and mutations (e.g., `useAdminStats()`, `useUpdateUser()`).
  - Keep all query keys centralized in `frontend/src/lib/queryKeys.ts` to prevent magic string typos.
  - All API calls must go through the centralized fetch wrapper in `frontend/src/lib/api.ts`.
  - Type all query responses and mutation variables using TypeScript interfaces.

## 3. Server Components vs Client Components (Next.js App Router)
Respect the boundaries of the Next.js App Router:

- **Server Components (Default):** Use for pages/sections that only display data fetched once (e.g., marketing pages, industry listings, blog posts). Fetch data directly using native `fetch()` inside the Server Component. **Do not use TanStack Query here.**
- **Client Components (`"use client"`):** Use only where data needs to be interactive (e.g., filtered client-side, paginated, or mutated via forms). This is where TanStack Query and Zustand belong.
- **Rule of Thumb:** Never wrap a Server Component in a `"use client"` boundary just to access a Zustand store or React Query. Isolate the interactive piece into its own small Client Component leaf node.
