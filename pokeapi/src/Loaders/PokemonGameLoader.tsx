import ApiGet from "../CustomHooks/ApiGet";
import type { Pokemon } from "../Types/Pokemon";
import type { Response } from "../Types/Response";

export async function PokemonGameLoader() {
  return { fourRandomPokemons: await requestFourPokemons() };
}

async function requestFourPokemons(): Promise<Response<Pokemon>[]> {
  return await Promise.all([
    ApiGet<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 200)}/`
    ),
    ApiGet<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 200)}/`
    ),
    ApiGet<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 200)}/`
    ),
    ApiGet<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 200)}/`
    ),
  ]);
}
