import {Link} from "react-router-dom";
import {useAuthStore} from "../store/authStore.ts";




export const Modulo6Page = () => {
const user = useAuthStore();
//deseriablizaciones.
/*const login = useAuthStore((s)=>s.login)*/
const {login, logout,loading,error} = useAuthStore();


    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
          <div className="mx-auto max-w-3xl p-8">
            <header className="mb-8 border-neutral-800 pb-4">
                <Link to="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md">
                    ⬅️
                </Link>
                <h1 className="text-3xl font-semibold text-blue-500 mt-5">
                    React + TypeScript 🔰 Modulo 6
                </h1>
                <p className="text-sm text-neutral-400">
                    Fundamentos: Uso de Zustand, set y store: Funcion de autentificacion.
                </p>
            </header>
            <div className="flex flex-col">
                <div className="bg-neutral-800 px-1 py-8 bg-neutral-900 rounded-lg">
                    {loading && <p>Loading...</p>}
                    <p>Usuario: {user.user?.name.toLocaleUpperCase()} <br/> Email: {user.user?.email}</p>
                    {error && <p className="text-red-500">Mensaje: E0{error.code} - {error.message}</p>}


                </div>

                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md" onClick={()=>login("tu@email.com","1234256")}>

                    Login
                </button>
                <button className="mt-2 px-4 py-2 bg-amber-400 hover:bg-blue-500 text-white rounded-md" onClick={()=>logout()}>

                    Logout
                </button>

            </div>
          </div>
        </main>
    );
};