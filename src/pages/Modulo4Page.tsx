import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFetch} from "../hooks/useFetch.ts";


export const Modulo4Page = () => {
    const [tick, setTick] = useState<number>(0);
    const [running, setRunning] = useState<boolean>(true);

// Listener de teclado (solo una vez)
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key.toLowerCase() === "k") {
                setRunning((r) => !r);
            }
        };
        globalThis.addEventListener("keydown", onKeyDown);
        return () => {
            globalThis.removeEventListener("keydown", onKeyDown);
        };
    }, []);

// Temporizador dependiente de running
    useEffect(() => {
        if (!running) return; // si está pausado, no arrancar interval

        const id = globalThis.setInterval(() => {
            setTick((t) => t + 1);
        }, 1000);

        return () => {
            globalThis.clearInterval(id);
        };
    }, [running]);
/// useFecth con la api de pokemon PokeApi

    type Pokemon ={
        id: number;
        name: string;
        sprites: {front_default: string | null};
    }
    const {data:pokemon} = useFetch<Pokemon>("https://pokeapi.co/api/v2/pokemon/ditto");


    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
          <div className="mx-auto max-w-3xl p-8">
            <header className="mb-8 border-neutral-800 pb-4">
                <Link to="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md">
                    ⬅️
                </Link>
                <h1 className="text-3xl font-semibold text-blue-500 mt-5">
                    React + TypeScript 🔰 Modulo 4
                </h1>
                <p className="text-sm text-neutral-400">
                    Fundamentos: Uso de useEffect: Construyendo un temporizador y llamadas a PokeApi con useFetch
                </p>
            </header>
              <section className="mb-8">
                  <h2 className="text-xl font-medium text-blue-300 mb-2">
                      Temporizador.
                  </h2>
                  <p className="text-sm text-neutral-400">
                      tick: {tick}
                  </p>
                  <p className="text-white">{running?"running":"pause"}</p>
                  <p className="text-sm text-neutral-400">Pulsa la tecla k para pausar / reanudar</p>
              </section>

              <section className="mb-8">
                  <h2 className="text-xl font-medium text-blue-300 mb-2">
                      LLamadas a la PokeApi.
                  </h2>

                  <p className="text-white">Pokemon: {pokemon?.id}-{pokemon?.name}</p>
                  {
                      pokemon?.sprites.front_default && (
                          <img src={pokemon.sprites.front_default} alt="Pokemon image" className="h-50"/>
                      )
                  }

              </section>

          </div>
        </main>
    );
};