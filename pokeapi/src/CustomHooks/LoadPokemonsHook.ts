import { useEffect, useState } from "react";
import type { Pokemon } from "../Types/Pokemon";
import type { PokemonListsResponse } from "../Types/PokemonListsResponse";

function LoadPokemonsHook(): { data: Pokemon[] | undefined; loading: boolean } {
  const [pokemons, setPokemons] = useState<Pokemon[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function load() {
      const pokeList: Pokemon[] = await loadList();
      setLoading(false);
      setPokemons(pokeList);
    }
    load();
  }, []);

  return { data: pokemons, loading: loading };
}

export default LoadPokemonsHook;

async function loadPokemon(url: string) {
  try {
    const newPokemon: Pokemon = {
      name: "",
      number: "",
      imgSrc: "",
      types: [],
    };
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);
    newPokemon.name = json.name;
    newPokemon.number = json.id;
    newPokemon.imgSrc = json.sprites.back_default;
    newPokemon.types = json.types;
    return newPokemon;
  } catch (e) {
    console.log(e);
  }
}

async function loadList() {
  const pokemonList: Pokemon[] = new Array<Pokemon>();
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
  const pokeListRes: PokemonListsResponse = await res.json();
  for (let i = 0; i < pokeListRes.results.length; i++) {
    const pokemon: Pokemon | undefined = await loadPokemon(
      pokeListRes.results[i].url
    );
    if (pokemon !== undefined) pokemonList[i] = pokemon;
  }
  return pokemonList;
}
