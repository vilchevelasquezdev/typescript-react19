
//import type {ReactNode} from "react";

// metodo 1 con childen
import * as React from "react";

type CardProps = {
    title: string;
};
export const Card = ({title,children}:React.PropsWithChildren<CardProps>) => {
// para que un childen funcione, debe estar dentro de un contenedor.

    return (
        <main className="bg-neutral-950 text-neutral-100 antialiased p-5">
            <div className="bg-neutral-800 p-8">
                <span>{title}</span>
                {children}
            </div>
        </main>
    );
};
// metodo 2 con childen
/*
type CardProps = {
    title: string;
    children: ReactNode;
};
export const Card = ({title,children}:CardProps) => {
// para que un childen funcione, debe estar dentro de un contenedor.

    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
            <div className="mx-auto max-w-3xl p-8">
            <span>{title}</span>
                {children}
            </div>
        </main>
    );
};*/
