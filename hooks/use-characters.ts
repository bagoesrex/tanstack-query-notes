import { CharacterResponse } from "@/types/character";
import { useQuery } from "@tanstack/react-query";

export function useCharacters() {
    return useQuery<CharacterResponse>({
        queryKey: ["characters"],
        queryFn: () =>
            fetch('https://dattebayo-api.onrender.com/characters').then((res) =>
                res.json(),
            ),
    })
}
