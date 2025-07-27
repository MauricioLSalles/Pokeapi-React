import type { Pokemon, PokemonWithName } from "../Types/Pokemon";
import type { Response } from "../Types/Response";
import { createFourPokemonsRequests, loadNames } from "../Utils/ApiCallUtils";

export async function PokemonGameLoader() {
  return { fourRandomPokemons: await requestFourPokemons() };
}

async function requestFourPokemons(): Promise<PokemonWithName[]> {
  const pokemonResponses: Response<Pokemon>[] = await Promise.all(
    createFourPokemonsRequests()
  );

  return await loadNames(pokemonResponses);
}
