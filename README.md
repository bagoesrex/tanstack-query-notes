# TanStack Query || React Query

**TanStack Query** (formely known as **React Query**).
The goal of this repository is to understand both basic and advanced concepts such as `data fetching`, `cache`, `mutation`, and `pagination`.

## Core Concepts

- `Query` - Handles _fetching_ and _caching_ of data automatically.
- `Mutation` - Manages _creating_, _updating_, or _deleting_ data on the server.
- `Query Invalidation` - Ensures data stays fresh by _refetching_ when dependencies change.

## Install TanStack Query

```bash
npm install @tanstack/react-query
```

package source: [@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query)

## Data Fetching & Staleness

- By default, data from `useQuery` is considered **stale** immediately after it’s fetched.
- You can adjust this using the `staleTime` option:
  - `staleTime: 2 * 60 * 1000` → data stays fresh for 2 minutes.
  - `staleTime: Infinity` → data won’t refetch automatically until the query is manually invalidated.
  - `staleTime: 'static'` → never refetch, even after invalidation.

## Refetch Behavior

A stale query will automatically refetch when:

- A new component mounts using the query.
- The browser window regains focus.
- The network reconnects.

You can customize this behavior with:

- `refetchOnMount`
- `refetchOnWindowFocus`
- `refetchOnReconnect`
- `refetchInterval` → schedules periodic refetching (independent from `staleTime`).

## Cache & Garbage Collection

- Queries without any active instances become **inactive**, but remain cached.
- Default cache removal time `(gcTime) = 5 minutes (1000 * 60 * 5)`.
- You can adjust this as needed.

## Error & Retry

- Failed queries are **automatically retried 3 times with exponential backoff delay**.
- You can modify this behavior with:
  - `retry`
  - `retryDelay`
