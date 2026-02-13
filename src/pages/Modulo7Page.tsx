import {Link} from "react-router-dom";
import {usePokedexQuery} from "../stack/usePokedex.ts";
import {List} from "../components/ui/list/List.tsx";



export const Modulo7Page = () => {
const {data,isLoading,isError,error} = usePokedexQuery(3);

    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
            <div className="mx-auto max-w-3xl p-8">
                <header className="mb-8 border-neutral-800 pb-4">
                    <Link to="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md">
                        ⬅️
                    </Link>
                    <h1 className="text-3xl font-semibold text-blue-500 mt-5">
                        React + TypeScript 🔰 Modulo 7
                    </h1>
                    <p className="text-sm text-neutral-400">
                        Fundamentos: Creando una Pokedex.
                    </p>
                </header>
                <div className="flex flex-col gap-4 px-4 py-2">
                    {isLoading && (
                        <div className="min-w-1/3 bg-blue-600 rounded-lg p-4">
                            <div className="text-neutral-100">Cargando Pokedex...</div>
                        </div>
                    )}
                    {isError && error && (
                        <div className="min-w-1/3 bg-red-600 rounded-lg p-4">
                            <div className="text-neutral-100">Error: {error.message}</div>
                        </div>
                    )}
                    {data && data.length > 0 && (
                        <section>
                            <h2 className="text-xl font-medium text-neutral-200 mb-3">
                                Pokémons ({data.length})
                            </h2>
                            <List
                                items={data}
                                renderItem={(pokemon) => (
                                    <li
                                        key={pokemon.id}
                                        className="flex items-center gap-4 p-4 rounded-lg bg-neutral-800/80 border border-neutral-700 mb-2 last:mb-0 hover:bg-neutral-600/80 transition-colors duration-300"
                                    >
                                        {pokemon.sprites?.front_default && (
                                            <img
                                                src={pokemon.sprites.front_default}
                                                alt={pokemon.name}
                                                className="w-16 h-16 object-contain"
                                            />
                                        )}
                                        <div className="flex-1">
                                            <p className="font-medium capitalize text-neutral-100">
                                                #{pokemon.id} {pokemon.name}
                                            </p>
                                            <p className="text-sm text-neutral-400">
                                                Tipos: {pokemon.types?.map((t) => t.type.name).join(", ") ?? "—"}
                                            </p>
                                        </div>
                                    </li>
                                )}
                            />
                        </section>
                    )}
                    {data?.length === 0 && !isLoading && (
                        <p className="text-neutral-400">No hay pokémons para mostrar.</p>
                    )}
                </div>


            </div>
        </main>
    );
};