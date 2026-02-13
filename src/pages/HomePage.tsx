import {Link} from "react-router-dom";

export const HomePage = () => {
    const modules =[{
        id: 1,
        title: 'Home',
        description: "Introduccion a TypeScript em React",
        path: "/modulo1"
    },{
        id: 2,
        title: 'Props y Estado',
        description: "Props opcionales, defauly y useState tipado",
        path: "/modulo2"
    },{
        id: 3,
        title: 'Eventos y Formularios',
        description: "ChangeEvent, submit y formularios controlados.",
        path: "/modulo3"
    },{
        id: 4,
        title: 'Hooks y Custom Hooks',
        description: "Uso de useEffect: Construyendo un temporizador y llamadas a PokeApi con useFetch",
        path: "/modulo4"
    },{
        id: 5,
        title: 'Componentes Avanzados',
        description: "Children, componentes genericos y refs.",
        path: "/modulo5"
    }];



    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100">
            <section className="mx-auto max-w-3x1 px-6 px-12">
                <header className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-semibold text-amber-400">
                        React + TypeScript
                    </h1>
                    <p className="text-sm text-neutral-400">
                        Navega por los modulos del curso.
                    </p>
                </header>
                <nav className="space-y-3">
                    {modules.map((module) => (
                        <Link to={module.path} key={module.id} className="group block rounded-xl border border-neutral-800 bg-neutral-900/60 px-5 py-4 transition hover:border-blue-500/40 hover:bg-neutral-900">
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-[10px] tracking-widest uppercase text-neutral-500">{module.title} -
                                    Modulo
                                </span>
                                <h2 className="mt-1 text-lg font-medium text-neutral-100">
                                    {module.title}
                                </h2>
                                <p className="text-sm text-neutral-400">
                                    {module.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </nav>
            </section>
        </main>
    );
};
