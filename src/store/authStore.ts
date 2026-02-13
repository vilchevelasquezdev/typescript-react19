import {create} from "zustand/react";

type User = {
    id: number;
    email: string;
    name: string;
};

type AuthState  = {
    user: User | null;
    loading: boolean;
    error: Error | null;
};
type Error = {
    code: number;
    message: string;
};
type AuthAction = {
    setUser: (u: User | null) => void;
    setloading: (l: boolean) => void;
    setError: (err: Error | null) => void;
    login: (email:string,password:string) => Promise<void>;
    logout: () => void;
};
type AuthStore = AuthState & AuthAction;
export const useAuthStore = create<AuthStore>((set)=>({
    //estados
    user:null,
    loading:false,
    error:null,
    //acciones
    setUser:(u)=>set({user:u}),
    setloading:(l)=>set({loading:l}),
    setError:(err)=>set({error:err}),
    login:async(email,password)=>{
        set({loading:true, error:null})
        try{
            await new Promise((r)=>setTimeout(r,4000));
            if (password!=="123456") throw new Error("Credenciales Invalidas");
            set({
                user: {
                    id: 1,
                    email: email,
                    name: "adrian"
                }
            });

        }catch (e) {
            set({
                error: {
                    code: 4,
                    message:(e as Error).message,
                },
                user:null
            });

        }finally {
            set({loading:false});
        }
    },
    logout:()=>set({user:null}),
}));