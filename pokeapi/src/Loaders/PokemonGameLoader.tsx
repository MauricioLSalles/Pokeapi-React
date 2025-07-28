import type { Pokemon, PokemonWithName } from "../Types/Pokemon";
import type { Response } from "../Types/Response";
import { createFourPokemonsRequests, loadNames } from "../Utils/ApiCallUtils";

export async function PokemonGameLoader() {
  return { fourRandomPokemons: await requestFourPokemons() };
}

/**
 * Fetches a list of four pokemons and then it loads their corresponding names in diferent languages
 * @returns A list of four pokemons and also their names in diferent languages
 */
async function requestFourPokemons(): Promise<PokemonWithName[]> {
  const pokemonResponses: Response<Pokemon>[] = await Promise.all(
    createFourPokemonsRequests()
  );
  return await loadNames(pokemonResponses);
}
