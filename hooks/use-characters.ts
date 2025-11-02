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
        // data stays fresh for 2 minutes.
        // staleTime: 1000 * 60 * 2,

        // data won’t refetch automatically until the query is manually invalidated.
        // staleTime: Infinity,

        // never refetch, even after invalidation.
        // staleTime: 'static'
    });
}