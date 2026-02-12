import {Link} from "react-router-dom";
import {useState} from "react";
import * as React from "react";

export const Modulo3Page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPwd, setShowPad] = useState(false);
    const handleEmail = (event:React.ChangeEvent<HTMLInputElement>) =>setEmail(event.target.value);
    const handlePassword = (event:React.ChangeEvent<HTMLInputElement>) =>setPassword(event.target.value);


   const togglePwd = (event:React.MouseEvent<HTMLButtonElement>) => {
       event.preventDefault();
       setShowPad((s)=>!s)
   }
   const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {

       if (!email || !password) {
           alert("Completa email y password");
           return;
       }

    alert(`Login Ok \nemail ${email}\npassword ${"*".repeat(password.length)}`);
   }

   // botones tipados.

    type BtnProps = {
       onClick1?: (event:React.MouseEvent<HTMLButtonElement>) => void;
    };
    function BtnClick({ onClick1 }: BtnProps) {
        return (
            <button
                onClick={onClick1}
                className="shrink-0 rounded-md border-neutral-700 bg-neutral-800 px-3 py-2 text-sm hover:bg-neutral-700">
                hola
            </button>
        );
    }

    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
          <div className="mx-auto max-w-3xl p-8">
            <header className="mb-8 border-neutral-800 pb-4">
                <Link to="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md">
                    ⬅️
                </Link>
                <h1 className="text-3xl font-semibold text-blue-500 mt-5">
                    React + TypeScript 🔰 Modulo 3
                </h1>
                <p className="text-sm text-neutral-400">
                    Fundamentos: ChangeEvent, submit y formularios controlados.
                </p>
            </header>
              <section className="mb-8">
                  <h2 className="text-xl font-medium text-blue-300 mb-2">
                      Formulario.
                  </h2>
                  <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-3 rounded-xl border border-neutral-800 bg-neutral-900 p-5">
                      <h1 className="text-xl font-semibold text-blue-400 ">Login</h1>
                      <label className="block text-sm">
                          <span className="text-neutral-300">Email</span>
                          <input placeholder="tu@email.com"
                                 onChange={handleEmail}
                                 value={email}
                                 type="email"
                                 className="mt-1 w-full rounded-md border border-neutral-700 px-3 py-2 outline-none focus:border-amber-500"/>
                      </label>
                      <label className="block text-sm">
                          <span className="text-neutral-300">Contraseña</span>
                          <input onChange={handlePassword}
                                 value={password}
                                 type={showPwd?"text":"password"}
                                 placeholder="******"
                                 className="mt-1 w-full rounded-md border border-neutral-700 px-3 py-2 outline-none focus:border-amber-500"/>
                          <button  onClick={togglePwd} className="shrink-0 rounded-md border-neutral-700 bg-neutral-800 px-3 py-2
                      text-sm hover:bg-neutral-700 ">{showPwd ? "Ocultar":"Ver"}</button>
                      </label>
                      <button type="submit" className="w-full rounded-lg border border-amber-600 bg-amber-600/20 px-4 py-2 hover:bg-neutral-600/30">Ingresar</button>
                  </form>
              </section>
              <h3 className="text-xl font-medium text-blue-300 mb-2"> Botones personalizados o tipados.</h3>
            <section className="w-full max-w-sm space-y-3 rounded-xl border border-neutral-800 bg-neutral-900 p-5">
                {/* eslint-disable-next-line react-hooks/static-components */}
                <BtnClick/>
            </section>
          </div>
        </main>
    );
};