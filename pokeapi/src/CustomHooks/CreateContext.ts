import { createContext } from "react";
import type { Pokemon } from "../Types/Pokemon";

type listContext = { 
    loadedList: React.RefObject<Pokemon[]>; 
    list: Pokemon[]; 
    searchParam:string;
    setList: React.Dispatch<React.SetStateAction<Pokemon[]>>;
    setSearchParam: React.Dispatch<React.SetStateAction<string>>;
}

export const PokeListContext = createContext<listContext | null>(null);