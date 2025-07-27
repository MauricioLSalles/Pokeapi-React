import ApiGet from "../CustomHooks/ApiGet";
import type { Pokemon } from "../Types/Pokemon";
import type { Response } from "../Types/Response";
import type { SpeciesDetails } from "../Types/SpeciesDetails";

export function createFourPokemonsRequests() {
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

export async function loadNames(pokemonResponses: Response<Pokemon>[]) {
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
