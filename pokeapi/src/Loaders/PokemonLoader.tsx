import type { LoaderFunctionArgs } from "react-router";
import ApiGet from "../CustomHooks/ApiGet";
import type { ExpandedDataPokemon, Pokemon } from "../Types/Pokemon";
import type { Response } from "../Types/Response";
import type { TypeExtendedDetails } from "../Types/TypeExtendedDetails";
import type { SpeciesDetails } from "../Types/SpeciesDetails";
import type { EvolutionChain, EvolutionDetails } from "../Types/EvolutionChain";

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

  const evolutions = await loadEvolutions(speciesResponse);

  const expandedData = composePokemonData(
    pokemonResponse.data,
    typeDetailsResponse.data,
    speciesResponse.data,
    evolutions
  );

  console.log(expandedData);
  return { pokemonData: expandedData };
}

function composePokemonData(
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

async function loadEvolutions(
  speciesResponse: Response<SpeciesDetails>
): Promise<Pokemon[]> {
  const evolutionResponse: Response<EvolutionChain> =
    await ApiGet<EvolutionChain>(
      speciesResponse.data?.evolution_chain.url ?? ""
    );
  return await registerEvolutions(evolutionResponse.data.chain);
}

async function registerEvolutions(
  evolution: EvolutionDetails
): Promise<Pokemon[]> {
  let pokemons: Pokemon[] = [];
  const pokeResponse = await ApiGet<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${evolution.species.name}`
  );
  pokemons.push(pokeResponse.data);
  if (evolution.evolves_to[0]) {
    pokemons = [
      ...pokemons,
      ...(await registerEvolutions(evolution.evolves_to[0])),
    ];
  }
  return pokemons;
}
