import ApiGet from "../CustomHooks/ApiGet";
import type { Pokemon, PokemonWithName } from "../Types/Pokemon";
import type { Response } from "../Types/Response";
import type { SpeciesDetails } from "../Types/SpeciesDetails";

/**
 * Create an array with four promises to fetch four random pokemons
 * @returns An array of promises
 */
export function createFourPokemonsRequests(): Promise<Response<Pokemon>>[] {
  return [
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
  ];
}

/**
 * Makes a request to the PokeApi to load the names in different languages
 * @param pokemonResponses List of pokemons responses, each one of them
 * @returns A list of the data of the pokemons, each one of them also including their corresponding names in varios laguages
 */
export async function loadNames(
  pokemonResponses: Response<Pokemon>[]
): Promise<PokemonWithName[]> {
  return Promise.all(
    pokemonResponses.map(async (pokemonResponse) => {
      const species: SpeciesDetails = (
        await ApiGet<SpeciesDetails>(pokemonResponse.data.species.url)
      ).data;
      return {
        ...pokemonResponse.data,
        ...species,
      };
    })
  );
}
