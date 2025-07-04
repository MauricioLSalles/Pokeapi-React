import { createContext } from "react";
import type { Pokemon } from "../Types/Pokemon";

type listContext = {
    loadedList: React.RefObject<Pokemon[]>;
    list: Pokemon[];
    setList: React.Dispatch<React.SetStateAction<Pokemon[]>>;
    inputRef: React.RefObject<HTMLInputElement | null>
}

export const PokeListContext = createContext<listContext | null>(null);