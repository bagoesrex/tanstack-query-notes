# Query Options

The `queryOptions` helper lets you share `queryKey` and `queryFn` across multiple places while keeping them co-located.
At runtime, it simply returns what you pass in, but it provides strong **type inference** and **type safety** when using TypeScript.

Example:

```ts
import { queryOptions } from "@tanstack/react-query";

function groupOptions(id: number) {
  return queryOptions({
    queryKey: ["groups", id],
    queryFn: () => fetchGroups(id),
    staleTime: 5000,
  });
}

// usage
useQuery(groupOptions(1));
useQueries({ queries: [groupOptions(1), groupOptions(2)] });
queryClient.prefetchQuery(groupOptions(23));
```

For infinite queries, use `infiniteQueryOptions`.
You can also override options at the component level - for example, using `select`:

```ts
useQuery({
  ...groupOptions(1),
  select: (data) => data.groupName,
});
```
