import type { Label } from "./Label";

export type Pokemon = {
        id:number;
        name:string;
        types:Label[];
        sprites:Sprites;
}


export type Sprites = {
        back_default:string
        front_default:string
}