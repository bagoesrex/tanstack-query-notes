# Parallel Queries

**Parallel queries** are multiple queries that run **simultaneously** to maximize data fetching speed and concurrency.

## Manual Parallel Queries

If the number of queries is **fixed**,
just call multiple useQuery hooks side by side:

```tsx
const users = useQuery({ queryKey: ["users"], queryFn: fetchUsers });
const teams = useQuery({ queryKey: ["teams"], queryFn: fetchTeams });
const projects = useQuery({ queryKey: ["projects"], queryFn: fetchProjects });
```

All run **in parallel** automatically.

> ⚠️ **Warning**
> In **suspense mode**, this doesn’t work directly,
> use `useSuspenseQueries` or separate components.

## Dynamic Parallel Queries (`useQueries`)

When the number of queries changes dynamically,
use `useQueries` instead (to follow React’s hook rules):

```tsx
const userQueries = useQueries({
  queries: users.map((u) => ({
    queryKey: ["user", u.id],
    queryFn: () => fetchUserById(u.id),
  })),
});
```

It runs all queries **concurrently** and returns an array of results.

## TL;DR

- Fixed number → use multiple `useQuery`
- Dynamic number → use `useQueries`
