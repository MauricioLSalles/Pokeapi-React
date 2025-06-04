import { useEffect, useState } from "react";
import type { Pokemon } from "../Types/Pokemon";
import type { PokemonListsResponse } from "../Types/PokemonListsResponse";

function LoadPokemonsHook():Pokemon[]{

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  async function load(){
    const pokeList:Pokemon[] =  await loadList();
    console.log(pokeList);
    setPokemons(pokeList);
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
  catch(e){
    console.log(e);
  }
}

async function loadList() {
  const pokemonList:Pokemon[] = [];
  try{
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
    const pokeListRes:PokemonListsResponse = await res.json();
    pokeListRes.results.forEach (async (pokeUrl) =>{
      const pokemon:Pokemon|undefined = await loadPokemon(pokeUrl.url);
      if(pokemon !== undefined)  pokemonList.push(pokemon);
    })
    return pokemonList;
  }
  catch(e){
    console.log(e);
    const pokemonList:Pokemon[] = [];
    return pokemonList;
  }
  }