import type { LoaderFunctionArgs } from "react-router";
import ApiGet from "../CustomHooks/ApiGet";
import type { ExpandedDataPokemon, Pokemon } from "../Types/Pokemon";
import type { Response } from "../Types/Response";
import type { TypeExtendedDetails } from "../Types/TypeExtendedDetails";
import type { SpeciesDetails } from "../Types/SpeciesDetails";
import type { EvolutionChain, EvolutionDetails } from "../Types/EvolutionChain";
import type { EvolutionData } from "../Types/EvolutionData";

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
  evolutions: EvolutionData[]
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
): Promise<EvolutionData[]> {
  const evolutionResponse: Response<EvolutionChain> =
    await ApiGet<EvolutionChain>(
      speciesResponse.data?.evolution_chain.url ?? ""
    );
  return await registerEvolutions(evolutionResponse.data.chain);
}

async function registerEvolutions(
  evolution: EvolutionDetails
): Promise<EvolutionData[]> {
  let pokemons: EvolutionData[] = [];
  pokemons.push({
    name: evolution.species.name,
    url: await getImageUrl(evolution.species.name),
  });
  if (evolution.evolves_to[0]) {
    pokemons = [
      ...pokemons,
      ...(await registerEvolutions(evolution.evolves_to[0])),
    ];
  }
  return pokemons;
}

async function getImageUrl(name: string) {
  const pokemonResponse: Response<Pokemon> = await ApiGet<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  return pokemonResponse.data.sprites.front_default;
}
