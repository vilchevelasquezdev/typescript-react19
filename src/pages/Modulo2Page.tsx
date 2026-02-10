import {type CafePreparadoI, type MaquinaCafe, peleaOK, type RecetaAzucar} from "../interfaces/Modulo2Interface.ts";
import {useState} from "react";
/*---------------------------- contador ---------------------*/
type ContadorProps = {
    initial?: number;
    step?: number;
}

export const Modulo2Page = ({initial=0,step=1}:ContadorProps) => {


    const [count, setCount] = useState<number>(initial);
    const inc = () => setCount((c)=>c+step);
    const dec = () => setCount((c)=>c-step);

    // uso de useState
    //implicito
    const [tazas,setTazas] = useState(1);
    //explicito
    const [intesidadUI, setIntesidadUI] = useState<Cafe["intensidad"]>("Suave");
    //explicito con valores nulos
    const [ultimoCafe,setUltimoCafe] = useState<Cafe | null>(null);
    // valores que pueden ser undefined
    const [azucarIn, setAzucarIn] = useState<number | undefined>(undefined);
    type Ingredientes = "agua" | "cafe" | "azucar"; //union literal, acepta solo uno de los tres valores.
    type RecetaCafe = {
        agua:number,
        cafe:number,
        azucar:number,
    };
    type Cafe = {
        mensaje: string;
        intensidad: "Suave" | "Fuerte";
    }
    function prepararCafe(receta: RecetaCafe):Cafe {
        const intensidad= receta.cafe>10?"Fuerte":"Suave";
        return {
            mensaje: `Cafe listo ${receta.agua}ml de agua, ${receta.cafe}grs de cafe y ${receta.azucar}grs de azucar`,
            intensidad: intensidad,
        };
    }
    const onCafe = ()=>{
        const resultado = prepararCafe({agua: 200,cafe:15,azucar:5})
        const ingredientesPrincipal:Ingredientes = "agua";
        console.log(resultado)
        console.log("ingredientesPrincipal: "+ingredientesPrincipal)

        alert(resultado.mensaje);
    };



    function prepararCafeI(receta:RecetaAzucar):CafePreparadoI{
        const intensidad:CafePreparadoI["intensidad"] =receta.cafe>10?"Fuerte":"Suave";
        return {
            mensaje : `Cafe Listo Interface con ${receta.agua}ml de agua y ${receta.cafe}g de cafe + ${receta.azucar}g de azucar`,
            intensidad: intensidad,
        }
    }
    const onCafeI = ()=>{
        const resultado = prepararCafeI({agua: 200,cafe:15,azucar:5})
        const ingredientesPrincipal:Ingredientes = "agua";
        console.log(resultado)
        console.log("ingredientesPrincipal: "+ingredientesPrincipal)

        alert(resultado.mensaje);
    };
    const maquinaCafe:MaquinaCafe ={modelo:"Kame-500",aguaMax:2000};
// Intersecciones

    type A = {nombre:string};
    type B = {edad:string};
    type C = {sexo?: "female" | "male"};
    type Persona = A & B & C;
    const juanObject :  Persona = {nombre:"Juan",edad:"30", sexo:"male"};
    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col p-4 gap-4">
            <p>Cafetera - Modulo 2</p>
            <p>Modelo: {maquinaCafe.modelo}. Capacidad Maxima: {maquinaCafe.aguaMax}cc</p>
            <button className="bg-blue-600 text-white rounded-2xl" onClick={onCafe}>Hacer cafe con Type</button>
            <div>
                <span>Inteface</span>
                <ul>
                    <li>Arena: {peleaOK.arena}</li>
                    <li>Ki: {peleaOK.ki}</li>
                </ul>
            </div>
            <button className="bg-amber-950 text-white rounded-2xl" onClick={onCafeI}>Hacer cafe con Interface</button>
            <br/>
            <span> State tipados</span>
            {intesidadUI}
            <button className="bg-cyan-900 text-white rounded-2xl" onClick={()=>setIntesidadUI("Fuerte")}>Cambiar State</button>
            <span className="min-w-1/3 text-center text-2xl font-semibold"> Contador </span>
            <p className="min-w-1/3 text-center text-2xl font-semibold">{count}</p>
            <button onClick={inc} className="bg-gray-700 text-black rounded-2xl hover:bg-gray-400 border">+</button>
            <button onClick={dec} className="bg-gray-700 text-black rounded-2xl hover:bg-gray-400 border">-</button>
            <br/>
            <h2>Intersecciones</h2>
            <pre> {JSON.stringify(juanObject,null,2)}</pre>
        </main>
    );
};
