import { CharacterResponse } from "@/types/character";
import { useQuery } from "@tanstack/react-query";

export function useCharacters() {
    return useQuery<CharacterResponse>({
        queryKey: ["characters"],
        queryFn: async () => {
            console.log("Fetching characters data...");
            const res = await fetch("https://dattebayo-api.onrender.com/characters");
            if (!res.ok) throw new Error("Failed to fetch characters");
            const data = await res.json();
            console.log("Data fetched!");
            return data;
        },
        // -- data fetching & staleness --
        // staleTime: 1000 * 60 * 2, // data stays fresh for 2 minutes
        // staleTime: Infinity, // data won’t refetch automatically until the query is manually invalidated
        // staleTime: 'static', // never refetch, even after invalidation

        // -- refetch behavior --
        // refetchOnMount: true, // refetch when a component using this query mounts
        // refetchOnWindowFocus: true, // refetch when the browser window regains focus
        // refetchOnReconnect: true, // refetch when the network connection is restored
        // refetchInterval: 5000, // automatically refetch every 5 seconds regardless of staleTime

        // -- cache & garbage collection --
        // gcTime: 1000 * 60 * 5, // inactive queries are removed from cache after 5 minutes

        // -- error & retry --
        // retry: 3, // retry failed requests up to 3 times before showing an error
        // retryDelay: 1000 * 60 * 2, // wait 2 minutes before the next retry attempt
    });
}