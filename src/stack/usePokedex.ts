import {usePokedexStore} from "../store/pokedexStore.ts";
import {useQuery} from "@tanstack/react-query";

export const usePokedexQuery = (limit:number) => {
    const {fetchPokemons} = usePokedexStore();
    return useQuery({
        queryKey:["pokedex",limit],
        queryFn:()=>fetchPokemons(limit),
    });
}