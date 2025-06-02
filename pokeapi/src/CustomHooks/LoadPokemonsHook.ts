import { useEffect, useState } from "react";
import type { Pokemon } from "../Types/Pokemon";

function LoadPokemonsHook():Pokemon{


    
    const [pokemon, setPokemon] = useState<Pokemon>(
      {
        name: "",
        number:"",
        imgSrc:"",
        types:[]
      }
    );

    async function loadPokemon() {
      const newPokemon:Pokemon = {
        name: "",
        number:"",
        imgSrc:"",
        types:[]
      };
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const json = await res.json();
      newPokemon.name = json.name;
      newPokemon.number = json.id;
      newPokemon.imgSrc = json.sprites.back_default;
      newPokemon.types = json.types;
      setPokemon(pokemon);
      console.log(json);
  }

    useEffect(() => {
         loadPokemon();
      }, [])

    return pokemon;
}

export default LoadPokemonsHook;