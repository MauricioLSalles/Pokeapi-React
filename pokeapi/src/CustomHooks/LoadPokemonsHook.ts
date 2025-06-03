import { useEffect, useState } from "react";
import type { Pokemon } from "../Types/Pokemon";
import type { PokemonListsResponse } from "../Types/PokemonListsResponse";

function LoadPokemonsHook():Pokemon[]{

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  async function load(){
    const pokeList:Pokemon[]|undefined =  await loadList();
    if(pokeList) setPokemons(pokeList);
    console.log(pokeList);
  }

  useEffect(() => {
        load();
    }, [])

  return pokemons;
}

export default LoadPokemonsHook;



async function loadPokemon(url:string) {
  try{
    const newPokemon:Pokemon = {
      name: "",
      number:"",
      imgSrc:"",
      types:[]
    };
    const res = await fetch(url);
    const json = await res.json();
    newPokemon.name = json.name;
    newPokemon.number = json.id;
    newPokemon.imgSrc = json.sprites.back_default;
    newPokemon.types = json.types;
    return newPokemon;
  }
  catch{
    console.log("error");
  }
}

async function loadList() {
  const pokemonList:Pokemon[] = [];
  try{
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const pokeListRes:PokemonListsResponse = await res.json();
    for(let pokeUrl of pokeListRes.result){
      let pokemon:Pokemon|undefined = await loadPokemon(pokeUrl.url);
      if(pokemon)  pokemonList.push(pokemon);
    }
    return pokemonList;
  }
  catch{
    console.log("error");
  }
  }