import type { LoaderFunctionArgs } from "react-router";
import ApiGet from "../CustomHooks/ApiGet";
import type { ExpandedDataPokemon, Pokemon } from "../Types/Pokemon";
import type { Response } from "../Types/Response";
import type { TypeExtendedDetails } from "../Types/TypeExtendedDetails";
import type { SpeciesDetails } from "../Types/SpeciesDetails";
import type { EvolutionChain, EvolutionDetails } from "../Types/EvolutionChain";

/**
 * Load the pokemon with the id on the path. It also loads its related data
 * @param param: Used to obtain the id on the path
 * @returns The data of the pokemon including its typeDetails, speciesDetails and evolutions
 */
export async function pokemonLoader({ params }: LoaderFunctionArgs): Promise<{
  pokemonData: ExpandedDataPokemon;
}> {
  const pokemonResponse: Response<Pokemon> = await ApiGet<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${params.id}/`
  );
  const typeDetailsResponse: Response<TypeExtendedDetails> =
    await ApiGet<TypeExtendedDetails>(pokemonResponse.data.types[0].type.url);

  const speciesResponse: Response<SpeciesDetails> =
    await ApiGet<SpeciesDetails>(pokemonResponse.data.species.url);

  const evolutions = await loadEvolutions(
    speciesResponse.data.evolution_chain.url
  );

  const expandedData = mergePokemonData(
    pokemonResponse.data,
    typeDetailsResponse.data,
    speciesResponse.data,
    evolutions
  );
  return { pokemonData: expandedData };
}

/**
 * Merge diferent objects holding pokemon data into one extended version
 * @returns A merged object containing the data of the pokemon and all of its details
 */
function mergePokemonData(
  pokeData: Pokemon,
  typeData: TypeExtendedDetails,
  speciesData: SpeciesDetails,
  evolutions: Pokemon[]
): ExpandedDataPokemon {
  return {
    evolutions: evolutions,
    ...typeData,
    ...speciesData,
    ...pokeData,
  };
}

/**
 * Fetch the chain of evolutions of a pokemon and then loads the data of the pokemons in that chain
 * @param evolutionChainUrl Url for fetching the evolutions data
 * @returns
 */
async function loadEvolutions(evolutionChainUrl: string): Promise<Pokemon[]> {
  const evolutionResponse: Response<EvolutionChain> =
    await ApiGet<EvolutionChain>(evolutionChainUrl);
  return await getEvolutionsData(evolutionResponse.data.chain);
}

/**
 * Obtain the current pokemon evolution and fetches its data. If there is a next evolution, call itself with the next evolution
 * @param evolution: Object that holds the name of the current evolution and the next evolution in evolves_to
 * @returns An array with the data of the entire evolution chain
 */
async function getEvolutionsData(
  evolution: EvolutionDetails
): Promise<Pokemon[]> {
  let pokemons: Pokemon[] = [];
  const pokeResponse = await ApiGet<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${evolution.species.name}`
  );
  pokemons.push(pokeResponse.data);
  if (evolution.evolves_to[0]) {
    const nextPokemonEvolution = await getEvolutionsData(
      evolution.evolves_to[0]
    );
    pokemons = [...pokemons, ...nextPokemonEvolution];
  }
  return pokemons;
}
