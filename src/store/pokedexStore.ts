import {create} from "zustand/react";
import type {Pokemon} from "../types/pokemon.ts";



type PokedexStore = {
    dataPokemons: Pokemon[] | null;
    setDataPokemons: (data: Pokemon[])=> void;
    fetchPokemons: (limit:number)=> Promise<Pokemon[]>;
};

export const usePokedexStore = create<PokedexStore>((set)=>({
    dataPokemons:null,
    setDataPokemons:(data: Pokemon[])=> set({dataPokemons:data}),
    fetchPokemons:async(limit:number)=>{
        const ids = Array.from({length:limit},(_,i)=>i+1);
        const result = await Promise.all(
            ids.map(async(id)=>{
                const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                if (!res.ok) throw new Error("No se pudo cargar la pokedex")
                return (await res.json()) as Pokemon;
            })
        );
        set({dataPokemons:result});
        return result;
    },

}));