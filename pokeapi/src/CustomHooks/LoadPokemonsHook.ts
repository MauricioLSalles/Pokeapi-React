import { useEffect, useState } from "react";
import type { Pokemon } from "../Types/Pokemon";

function LoadPokemonsHook():Pokemon[]{

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
        loadList();
    }, [])

  return pokemons;
}

export default LoadPokemonsHook;



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
}

async function loadList() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const json = await res.json();
    console.log(json);
  }


  