import {calcularDanio} from "../utils/Tools.ts";
import {Link} from "react-router-dom";
import {HomePage} from "./HomePage.tsx";

export const Modulo1Page = () => {

    let saga:string;
    // eslint-disable-next-line prefer-const
    saga = "Saiyan Saga";
    // eslint-disable-next-line prefer-const
    let horasEntrenamiento: number = 36;

    // tipos basicos.
    const guerrero:string = "Goku";
    const ki = 9001;
    const enCombate:boolean = true;

    //Arrays
    const equipoZ = [guerrero,"Vegeta","Gohan","Piccolo"];
    //Tuplas
    const coordenadas:[number,number,string] = [42,17,"hi"];
    //funciones tipadas: {parametros -> retorno}
/*    function calcularDanio(base:number,multiplicador:number):number {
        return base*multiplicador;
    }*/
    // funcion flecha
    const calcularDanioFlecha =(base:number,multplicador:number):number =>{
        return base*multplicador;
    }

    // null o undefined
    let transformacion:string | null =null;
    transformacion = "Super Saiyan";
    let estrategia:string | undefined = undefined;
    estrategia = "Transformarce a ultra instinto";

    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
          <div className="mx-auto max-w-3xl p-8">
            <header className="mb-8 border-neutral-800 pb-4">
                <Link to="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md">
                    ⬅️
                </Link>
                <h1 className="text-3xl font-semibold text-blue-500 mt-5">
                    React + TypeScript 🔰 Modulo 1
                </h1>
                <p className="text-sm text-neutral-400">
                    Fundamentos: tipos basicos, arrays y tuplas.
                </p>
            </header>
              <section className="mb-8">
                  <h2 className="text-xl font-medium text-blue-300 mb-2">
                      Inferencias y básicos
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300">
                    <div>Saga: {saga}</div>
                    <div>Horas de entrenamiento: {horasEntrenamiento}</div>
                    <div>Guerrero: {guerrero}</div>
                    <div>KI: {ki}</div>
                    <div>En combate: {enCombate?"SI":"NO"}</div>
                  </div>
              </section>
              <section className="mb-8">
                  <h2 className="text-xl font-medium text-blue-300 mb-2">
                      Arrays y tuplas
                  </h2>
                  <div>
                      Equipo Z: {equipoZ.join(",")}
                  </div>
                  <h2 className="text-xl font-medium text-blue-300 mb-2"> Tuplas</h2>
                  <div>
                      Coordenadas [x,y,hi]: x={coordenadas[0]} y={coordenadas[1]} saludo={coordenadas[2]}
                  </div>
              </section>
              <section className="mb-8">
                  <h2 className="text-xl font-medium text-blue-300 mb-2">
                      Funciones tipadas
                  </h2>
                  <div>
                      <p>Habilidad 1 (base 450 x 2)</p>
                      <span>{calcularDanio(450,2)}</span>
                      <p>Habilidad 2 (base 500 x 2)</p>
                      <span>{calcularDanioFlecha(500,2)}</span>

                  </div>
              </section>
          </div>
        </main>
    );
};