import {Link} from "react-router-dom";
import {Card} from "../components/ui/cards/Card.tsx";
import {List} from "../components/ui/list/List.tsx";
import {useRef} from "react";


export const Modulo5Page = () => {
type User = { id: string; name: string };
const inputRef = useRef<HTMLInputElement>(null);
const user: User[] = [{ id: "1" , name: "Oscar" }, { id: "2" , name: "Facundo" }];
const focusInput = ()=>{
    inputRef.current?.focus();
};
    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
          <div className="mx-auto max-w-3xl p-8">
            <header className="mb-8 border-neutral-800 pb-4">
                <Link to="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md">
                    ⬅️
                </Link>
                <h1 className="text-3xl font-semibold text-blue-500 mt-5">
                    React + TypeScript 🔰 Modulo 5
                </h1>
                <p className="text-sm text-neutral-400">
                    Fundamentos: Children, componentes genericos y refs.
                </p>
            </header>
              {/*Childen: El card funciona como un contenedor, todo lo que este dentro de el sera un hijo o Childen*/}
                <Card title="Perfil Card">
                <p>Bienvenido</p>
                </Card>
                <List<User> items={user} renderItem={(item) =><li>{item.id}-{item.name}</li>}/>
              <div className="p-5">
                  <input ref={inputRef} placeholder="Escribe algo aqui ...." className="rounded-md border-blue-500 border hover:border-blue-300 px-1 py-0"/>
                  <button onClick={focusInput} className="rounded-md bg-blue-600 text-white border-blue-400 border hover:border-blue-300  ml-2 px-2 py-0"> Dar focus</button>
              </div>
          </div>
        </main>
    );
};