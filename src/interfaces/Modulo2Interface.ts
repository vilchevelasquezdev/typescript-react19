export type CardProps = { title: string };
export interface CardPropsI {title:string;
}
export interface Battle {arena: string; }
export interface Battle {ki: number; }

export const peleaOK:Battle={arena:"Namek", ki:100}

export interface RecetaBase {
    agua: number;
    cafe: number;
}
export interface RecetaAzucar extends RecetaBase {
    azucar: number;
}
export interface MaquinaCafe {
    modelo?: string;
}
export interface MaquinaCafe {
    aguaMax?: number;
}
export interface CafePreparadoI {
    mensaje: string;
    intensidad: "Suave" | "Fuerte" ;
}